import React from 'react';
import styles from './styles.module.scss';
import creditImg from '@/assets/images/img_diamond.png';
import ProgressBar from './ProgressBar';

function DonationElement({ donation, openModal }) {
  const calculateDaysLeft = (deadline) => {
    const deadlineDate = new Date(deadline);
    const today = new Date();
    const timeDiff = deadlineDate - today;
    const daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    return daysLeft;
  };

  const daysLeft = calculateDaysLeft(donation.deadline);
  const isExpired = daysLeft <= 0;

  return (
    <div className={styles['donation-element']}>
      <div className={styles['image-box']}>
        <div className={`${styles['gradation']} ${isExpired ? styles['expired'] : ''}`}></div>
        <img
          className={`${styles['donation-img']} ${isExpired ? styles['darkened'] : ''}`}
          src={donation.idol.profilePicture}
          alt='후원광고사진'
        />
        <button
          onClick={() => openModal(donation)}
          disabled={isExpired}
          className={isExpired ? styles['expired-button'] : ''}
        >
          {isExpired ? '기한 만료' : '후원하기'}
        </button>
      </div>
      <div className={styles['donation-contents']}>
        <div className={styles['title-wrapper']}>
          <p className={styles['subtitle']}>{donation.subtitle}</p>
          <p className={styles['title']}>{donation.title}</p>
        </div>
        <div className={styles['current-credit-box']}>
          <div className={styles['credit-line']}>
            <div className={styles['current-credit']}>
              <img
                className={styles['credit-img']}
                src={creditImg}
                alt='크레딧 이미지'
              />
              <p>{donation.receivedDonations.toLocaleString()}</p>
            </div>
            <p className={styles['date-left']}>
              {daysLeft > 0 ? `${daysLeft}일 남음` : '기한 만료'}
            </p>
          </div>
          <ProgressBar
            targetDonation={donation.targetDonation}
            receivedDonations={donation.receivedDonations}
          />
        </div>
      </div>
    </div>
  );
}

export default DonationElement;
