import { useState, useEffect } from 'react';
import DonationElement from './DonationElement';
import styles from './styles.module.scss';
import arrowLeft from '@/assets/icons/ic_arrow_left.png';
import arrowRight from '@/assets/icons/ic_arrow_right.png';
import { getDonations, creditDonation } from '@/services/api/donations';
import { SLIDE_COUNT } from '@/constants/SlideCount.js';
import IdolDonationModal from '../Modal/IdolDonationModal';
import CreditAlertModal from '../Modal/CreditAlertModal';
import ModalPortal from '../Modal/components/ModalPortal';
import { useCredit } from '@/contexts/CreditContext';
import useAsyncWithRetry from '@/hooks/useAsyncWithRetry';
import DonationElementSkeleton from './DonationElement/DonationElementSkeleton';
import Toast from '@/components/Toast';

function DonationList() {
  const { credits, updateCredits } = useCredit();
  const [donations, setDonations] = useState([]);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [selectedDonation, setSelectedDonation] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [isLoadingGetDonations, loadGetDonationsError, handleGetDonations] =
    useAsyncWithRetry(getDonations);
  const [isLoadingCreditDonation, creditDonationError, handleCreditDonation] =
    useAsyncWithRetry(creditDonation);
  const [toastMessage, setToastMessage] = useState('');

  useEffect(() => {
    const initialCredits = parseInt(localStorage.getItem('credits'), 10) || 0;
    updateCredits(initialCredits);
  }, [updateCredits]);

  useEffect(() => {
    const fetchData = async () => {
      const { list } = await handleGetDonations();
      setDonations(list);
    };

    fetchData();
  }, [handleGetDonations]);

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

    const { list } = await handleGetDonations();
    setDonations(list);
  };

  const nextSlide = () => {
    setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % donations.length);
  };

  const prevSlide = () => {
    setCurrentSlideIndex(
      (prevIndex) => (prevIndex - 1 + donations.length) % donations.length
    );
  };

  const currentDonations = () => {
    if (donations.length <= SLIDE_COUNT) {
      return donations;
    }

    if (currentSlideIndex + SLIDE_COUNT > donations.length) {
      return [
        ...donations.slice(currentSlideIndex, donations.length),
        ...donations.slice(
          0,
          currentSlideIndex + SLIDE_COUNT - donations.length
        ),
      ];
    }

    return donations.slice(currentSlideIndex, currentSlideIndex + SLIDE_COUNT);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentSlideIndex, donations.length]);

  return (
    <div className={styles['donation-list']}>
      <div className={styles['components-container']}>
        <button className={styles['arrow-button']} onClick={prevSlide}>
          <img
            className={styles['arrow-img']}
            src={arrowLeft}
            alt='왼쪽 화살표'
          />
        </button>
        <div className={styles['donation-contents']}>
          <p className={styles['list-title']}>후원을 기다리는 조공</p>
          <div className={styles['components-wrapper']}>
            {isLoadingGetDonations ? (
              <DonationElementSkeleton />
            ) : (
              currentDonations().map((donation) => (
                <DonationElement
                  key={donation.id}
                  donation={donation}
                  openModal={() => openModal(donation)}
                />
              ))
            )}
          </div>
        </div>
        <button className={styles['arrow-button']} onClick={nextSlide}>
          <img
            className={styles['arrow-img']}
            src={arrowRight}
            alt='오른쪽 화살표'
          />
        </button>
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

export default DonationList;
