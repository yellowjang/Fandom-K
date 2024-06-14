import { useEffect, useState } from 'react';
import DonationElement from './DonationElement';
import styles from './styles.module.scss';
import arrowLeft from '@/assets/buttons/pagination_arrow_left.png';
import arrowRight from '@/assets/buttons/pagination_arrow_right.png';
import { getDonations } from '@/services/api/donations';

function DonationList() {
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { list } = await getDonations();
      setDonations(list);
    };

    fetchData();
  }, []);

  return (
    <>
      <div className={styles['donation-list']}>
        <div className={styles['components-container']}>
          <button className={styles['arrow-button']}>
            <img
              className={styles['arrow-img']}
              src={arrowLeft}
              alt='왼쪽 화살표'
            />
          </button>
          <div className={styles['donnation-contents']}>
            <p className={styles['list-title']}>후원을 기다리는 조공</p>

            <div className={styles['components-wrapper']}>
              {donations.reverse().map((donation) => (
                <DonationElement key={donation.id} donation={donation} />
              ))}
            </div>
          </div>
          <button className={styles['arrow-button']}>
            <img
              className={styles['arrow-img']}
              src={arrowRight}
              alt='오른쪽 화살표'
            />
          </button>
        </div>
      </div>
    </>
  );
}

export default DonationList;
