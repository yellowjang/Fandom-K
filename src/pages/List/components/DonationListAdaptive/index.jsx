import { useEffect, useState } from 'react';
import DonationElement from './DonationElementAdaptive';
import styles from './styles.module.scss';
import { getDonations, creditDonation } from '@/services/api/donations';
import IdolDonationModal from '../Modal/IdolDonationModal';
import ModalPortal from '../Modal/components/ModalPortal';
import CreditAlertModal from '../Modal/CreditAlertModal';
import useAsyncWithRetry from '@/hooks/useAsyncWithRetry';
import Loading from '@/components/Loading';
import { useCredit } from '@/contexts/CreditContext';

function DonationListAdaptive() {
  const [donations, setDonations] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [selectedDonation, setSelectedDonation] = useState(null);
  const [isLoadingDonations, loadDonationsError, handleLoadDonations] =
    useAsyncWithRetry(getDonations);
  const { credits, updateCredits } = useCredit();

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

  const handleDonate = async (donationAmount) => {
    if (donationAmount > credits) {
      openAlert();
      return;
    }

    try {
      await creditDonation({
        id: selectedDonation.id,
        data: { amount: donationAmount },
      });

      const newCredits = credits - donationAmount;
      updateCredits(newCredits);

      localStorage.setItem('credits', newCredits.toString());

      closeModal();

      const { list } = await handleLoadDonations();
      setDonations(list);
    } catch (error) {
      console.error('후원 실패!:', error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const { list } = await handleLoadDonations();
      setDonations(list);
    };

    fetchData();
  }, []);

  return (
    <div className={styles['donation-list']}>
      <p className={styles['list-title']}>후원을 기다리는 조공</p>
      <div className={styles['components-container']}>
        <div className={styles['donation-contents']}>
          <div className={styles['components-wrapper']}>
            {isLoadingDonations ? (
              <Loading size={300} />
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
          />
        </ModalPortal>
      )}
      {isAlertOpen && (
        <ModalPortal>
          <CreditAlertModal isModalOpen={isAlertOpen} closeModal={closeAlert} />
        </ModalPortal>
      )}
    </div>
  );
}

export default DonationListAdaptive;
