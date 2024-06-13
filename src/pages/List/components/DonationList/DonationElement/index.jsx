import styles from './styles.module.scss';
import donationWonpil from '@/assets/images/donation/day6_wonpil.jpg';
import creditImg from '@/assets/images/img_diamond.png';
function DonationElement() {
  return (
    <div className={styles['donation-element']}>
      <div className={styles['image-box']}>
        <div className={styles['gradation']}></div>
        <img
          className={styles['donation-img']}
          src={donationWonpil}
          alt='후원광고사진'
        />
        <button>후원하기</button>
      </div>
      <div className={styles['donation-contents']}>
        <div className={styles['title-wrapper']}>
          <p className={styles['subtitle']}>수지구청역 광고(subtitle)</p>
          <p className={styles['title']}>데이식스 원필 지하철 광고(title)</p>
        </div>
        <div className={styles['current-credit-box']}>
          <div>
            <div className={styles['credit-line']}>
              <div className={styles['current-credit']}>
                <img
                  className={styles['credit-img']}
                  src={creditImg}
                  alt='크레딧 이미지'
                />
                <p>6,000 현재 크레딧 수</p>
              </div>
              <p className={styles['date-left']}>남은 기한</p>
            </div>
          </div>
          <div className={styles['progress-bar']}>progress-bar</div>
        </div>
      </div>
    </div>
  );
}

export default DonationElement;
