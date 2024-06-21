import { useEffect, useState } from 'react';
import DonationElement from './DonationElement';
import styles from './styles.module.scss';
import arrowLeft from '@/assets/icons/ic_arrow_left.png';
import arrowRight from '@/assets/icons/ic_arrow_right.png';
import { getDonations } from '@/services/api/donations';
import { SLIDE_COUNT } from '@/constants/SlideCount.js';

import IdolDonationModal from '../Modal/IdolDonationModal';
import ModalPortal from '../Modal/components/ModalPortal';

import useAsyncWithRetry from '@/hooks/useAsyncWithRetry';
import Loading from '@/components/Loading';

function DonationList({
  isModalOpen,
  closeModal,
  openModal,
  selectedDonation,
}) {
  const [donations, setDonations] = useState([]);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isLoadingDonations, loadDonationsError, handleLoadDonations] =
    useAsyncWithRetry(getDonations);

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
    const fetchData = async () => {
      const { list } = await handleLoadDonations();
      setDonations(list);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentSlideIndex, donations.length]);

  // if (isLoadingDonations) {
  //   return <Loading size={300} />;
  // }

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
              <Loading size={300} />
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
          />
        </ModalPortal>
      )}
    </div>
  );
}

export default DonationList;
