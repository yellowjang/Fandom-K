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
import { disableScroll, activateScroll } from '../Modal/components/ModalScroll';

function DonationList() {
  const { credits, updateCredits } = useCredit();
  const [donations, setDonations] = useState([]);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [selectedDonation, setSelectedDonation] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [isLoadingDonations, loadDonationsError, handleLoadDonations] =
    useAsyncWithRetry(getDonations);

  useEffect(() => {
    const initialCredits = parseInt(localStorage.getItem('credits'), 10) || 0;
    updateCredits(initialCredits);
  }, [updateCredits]);

  useEffect(() => {
    const fetchData = async () => {
      const { list } = await handleLoadDonations();
      setDonations(list);
    };

    fetchData();
  }, [handleLoadDonations]);

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
            {isLoadingDonations ? (
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

export default DonationList;
