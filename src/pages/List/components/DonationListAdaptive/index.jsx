import { useEffect, useState } from 'react';
import DonationElement from './DonationElementAdaptive';
import styles from './styles.module.scss';
import { getDonations } from '@/services/api/donations';

import IdolDonationModal from '../Modal/IdolDonationModal';
import ModalPortal from '../Modal/components/ModalPortal';

import useAsyncWithRetry from '@/hooks/useAsyncWithRetry';


function DonationListAdaptive({
  isModalOpen,
  closeModal,
  openModal,
  selectedDonation,
}) {
  const [donations, setDonations] = useState([]);
  const [isLoadingDonations, loadDonationsError, handleLoadDonations] =
    useAsyncWithRetry(getDonations, 5);

  useEffect(() => {
    const fetchData = async () => {
      const { list } = await handleLoadDonations();
      setDonations(list);
    };

    fetchData();
  }, []);

  return (
    <div className={styles['donation-list']}>
      <div className={styles['components-container']}>
        <div className={styles['donation-contents']}>
          <p className={styles['list-title']}>후원을 기다리는 조공</p>
          <div className={styles['components-wrapper']}>
            {donations.map((donation) => (
              <DonationElement
                key={donation.id}
                donation={donation}
                openModal={() => openModal(donation)}
              />
            ))}
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
          />
        </ModalPortal>
      )}
    </div>
  );
}

export default DonationListAdaptive;
