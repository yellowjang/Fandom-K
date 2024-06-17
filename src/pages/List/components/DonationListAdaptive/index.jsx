import { useEffect, useState } from 'react';
import DonationElement from './DonationElementAdaptive';
import styles from './styles.module.scss';
import { getDonations } from '@/services/api/donations';

function DonationListAdaptive() {
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { list } = await getDonations();
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
              <DonationElement key={donation.id} donation={donation} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DonationListAdaptive;
