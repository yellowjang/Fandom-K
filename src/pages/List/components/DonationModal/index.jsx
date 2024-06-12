import styles from './styles.module.scss';
import donationWonpil from '../../../../assets/images/donation/day6_wonpil.jpg';
import creditIcon from '../../../../assets/images/img_diamond.png';
import deleteIcon from '../../../../assets/icons/ic_delete.png';
function DonationModal() {
  return (
    <div className={styles['donation-container']}>
      <div className={styles['top-line']}>
        <p className={styles['modal-title']}>후원하기</p>
        <img
          className={styles['delete-icon']}
          src={deleteIcon}
          alt='창닫기 버튼'
        />
      </div>
      <div className={styles['ad-contents']}>
        <img
          className={styles['donation-img']}
          src={donationWonpil}
          alt='원필후원하기'
        />
        <div className={styles['text-container']}>
          <p className={styles['ad-place']}>강남역 광고</p>
          <p className={styles['ad-name']}>민지 2023 첫 광고</p>
        </div>
      </div>
      <div className={styles['input-box']}>
        <input className={styles['input']} placeholder='크레딧 입력'></input>
        <img
          className={styles['credit-icon']}
          src={creditIcon}
          alt='크레딧 아이콘'
        />
      </div>
      <button className={styles['button']}>후원하기</button>
    </div>
  );
}

export default DonationModal;
