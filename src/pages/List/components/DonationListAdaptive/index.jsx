import { useEffect, useState, useRef } from 'react';
import DonationElement from './DonationElementAdaptive';
import styles from './styles.module.scss';
import { getDonations, creditDonation } from '@/services/api/donations';
import IdolDonationModal from '../Modal/IdolDonationModal';
import ModalPortal from '../Modal/components/ModalPortal';
import CreditAlertModal from '../Modal/CreditAlertModal';
import useAsyncWithRetry from '@/hooks/useAsyncWithRetry';
import { useCredit } from '@/contexts/CreditContext';
import DonationElementAdaptiveSkeleton from './DonationElementAdaptive/DonationElementAdaptiveSkeleton';
import { useDraggable } from 'react-use-draggable-scroll';
import { disableScroll, activateScroll } from '../Modal/components/ModalScroll';
import Toast from '@/components/Toast';

function DonationListAdaptive() {
  const [donations, setDonations] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [selectedDonation, setSelectedDonation] = useState(null);
  const [isLoadingDonations, loadDonationsError, handleLoadDonations] =
    useAsyncWithRetry(getDonations);
  const [isLoadingCreditDonation, creditDonationError, handleCreditDonation] =
    useAsyncWithRetry(creditDonation);
  const { credits, updateCredits } = useCredit();
  const dragRef = useRef(); // We will use React useRef hook to reference the wrapping div:
  const { events } = useDraggable(dragRef);
  const [toastMessage, setToastMessage] = useState('');

  useEffect(() => {
    const initialCredits = parseInt(localStorage.getItem('credits'), 10) || 0;
    updateCredits(initialCredits);
  }, [updateCredits]);

  const openModal = (donation) => {
    setSelectedDonation(donation);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedDonation(null);
    setIsModalOpen(false);
  };

  const openAlert = () => {
    setIsAlertOpen(true);
  };

  const closeAlert = () => {
    setIsAlertOpen(false);
  };

  const closeToast = () => {
    setToastMessage('');
  };

  const handleDonate = async (donationAmount) => {
    if (donationAmount > credits) {
      openAlert();
      return;
    }
    await handleCreditDonation({
      id: selectedDonation.id,
      data: { amount: donationAmount },
    });

    const newCredits = credits - donationAmount;
    updateCredits(newCredits);

    localStorage.setItem('credits', newCredits.toString());

    closeModal();

    const { list } = await handleLoadDonations();
    setDonations(list);
  };

  useEffect(() => {
    const fetchData = async () => {
      const { list } = await handleLoadDonations();
      setDonations(list);
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (isModalOpen) {
      const currentScrollY = disableScroll();

      return () => {
        activateScroll(currentScrollY);
      };
    }
  }, [isModalOpen]);

  return (
    <div className={styles['donation-list']}>
      <p className={styles['list-title']}>후원을 기다리는 조공</p>
      <div className={styles['components-container']} {...events} ref={dragRef}>
        <div className={styles['donation-contents']}>
          <div className={styles['components-wrapper']}>
            {isLoadingDonations ? (
              <DonationElementAdaptiveSkeleton />
            ) : (
              donations.map((donation) => (
                <DonationElement
                  key={donation.id}
                  donation={donation}
                  openModal={() => openModal(donation)}
                />
              ))
            )}
          </div>
        </div>
      </div>
      {selectedDonation && (
        <ModalPortal>
          <IdolDonationModal
            donationImg={selectedDonation.idol.profilePicture}
            donationSubTitle={selectedDonation.subtitle}
            donationTitle={selectedDonation.title}
            isModalOpen={isModalOpen}
            closeModal={closeModal}
            handleDonate={handleDonate}
            setToastMessage={setToastMessage}
          />
        </ModalPortal>
      )}
      {isAlertOpen && (
        <ModalPortal>
          <CreditAlertModal isModalOpen={isAlertOpen} closeModal={closeAlert} />
        </ModalPortal>
      )}
      {toastMessage && <Toast message={toastMessage} onClose={closeToast} />}
    </div>
  );
}

export default DonationListAdaptive;
