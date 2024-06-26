import styles from './styles.module.scss';
import creditImg from '@/assets/icons/img_diamond.png';
import ProgressBar from './ProgressBar';
import { motion } from 'framer-motion';

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
  const isGoalReached = donation.receivedDonations >= donation.targetDonation;

  const elementVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className={styles['donation-element']}
      variants={elementVariants}
      initial='initial'
      animate='animate'
    >
      <div className={styles['image-box']}>
        <div
          className={`${styles['gradation']} ${isExpired || isGoalReached ? styles['expired'] : ''}`}
        ></div>
        <motion.img
          className={`${styles['donation-img']} ${isExpired || isGoalReached ? styles['darkened'] : ''}`}
          src={donation.idol.profilePicture}
          alt='후원광고사진'
          whileHover={{ scale: 1.1 }}
        />
        {(isExpired || isGoalReached) && (
          <div className={styles['centered-message']}>
            {isExpired ? '기간 만료' : '🎉 목표 달성 🎉'}
          </div>
        )}
        <motion.button
          onClick={() => openModal(donation)}
          disabled={isExpired || isGoalReached}
          className={
            isExpired || isGoalReached ? styles['disabled-button'] : ''
          }
          whileHover={{ scale: 1.05 }}
        >
          {isExpired ? '기한 만료' : isGoalReached ? '목표 달성' : '후원하기'}
        </motion.button>
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
    </motion.div>
  );
}

export default DonationElement;
