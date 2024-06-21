import { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import MyCredit from './components/MyCredit';
import DonationList from './components/DonationList';
import DonationListAdaptive from './components/DonationListAdaptive';
import MonthlyChart from './components/MonthlyChart';
import {
  disableScroll,
  activateScroll,
} from './components/Modal/components/ModalScroll';
import { CreditProvider } from '@/contexts/CreditContext';

function List() {
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth >= 1200);
  const [isChargeModalOpen, setIsChargeModalOpen] = useState(false);
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);
  const [selectedDonation, setSelectedDonation] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth >= 1200);
    };

    // Initialize the state based on the current window width
    handleResize();

    // Add the event listener
    window.addEventListener('resize', handleResize);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (isChargeModalOpen || isDonationModalOpen) {
      const currentScrollY = disableScroll();

      return () => {
        activateScroll(currentScrollY);
      };
    }
  }, [isChargeModalOpen, isDonationModalOpen]);

  const openChargeModal = () => {
    setIsChargeModalOpen(true);
  };

  const closeChargeModal = () => {
    setIsChargeModalOpen(false);
  };

  const openDonationModal = (donation) => {
    setIsDonationModalOpen(true);
    setSelectedDonation(donation);
  };

  const closeDonationModal = () => {
    setIsDonationModalOpen(false);
    setSelectedDonation(null);
  };

  return (
    <div className={styles['list-page']}>
      <header />
      <main>
        <CreditProvider>
          <MyCredit
            isModalOpen={isChargeModalOpen}
            closeModal={closeChargeModal}
            openModal={openChargeModal}
          />
          {isWideScreen ? (
            <DonationList
              isModalOpen={isDonationModalOpen}
              closeModal={closeDonationModal}
              openModal={openDonationModal}
              selectedDonation={selectedDonation}
            />
          ) : (
            <DonationListAdaptive
              isModalOpen={isDonationModalOpen}
              closeModal={closeDonationModal}
              openModal={openDonationModal}
              selectedDonation={selectedDonation}
            />
          )}
          <MonthlyChart />
        </CreditProvider>
      </main>
      <footer />
    </div>
  );
}

export default List;
