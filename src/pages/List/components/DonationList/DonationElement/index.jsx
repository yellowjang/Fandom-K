import styles from './styles.module.scss';
import creditImg from '@/assets/images/img_diamond.png';

function DonationElement({ donation, openModal }) {
  const calculateDaysLeft = (deadline) => {
    const deadlineDate = new Date(deadline);
    const today = new Date();
    const timeDiff = deadlineDate - today;
    const daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    return daysLeft > 0 ? `${daysLeft}일 남음` : '기한 만료';
  };

  return (
    <div className={styles['donation-element']}>
      <div className={styles['image-box']}>
        <div className={styles['gradation']}></div>
        <img
          className={styles['donation-img']}
          src={donation.idol.profilePicture}
          alt='후원광고사진'
        />
        <button onClick={() => openModal(donation)}>후원하기</button>
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
              {calculateDaysLeft(donation.deadline)}
            </p>
          </div>
          <div className={styles['progress-bar']}>progress-bar</div>
        </div>
      </div>
    </div>
  );
}

export default DonationElement;
