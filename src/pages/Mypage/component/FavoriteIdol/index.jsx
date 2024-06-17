import styles from './styles.module.scss';
import logoImage from '@/assets/images/logo/logo.png';

function FavoriteIdol() {
  return (
    <div className={styles['favorite-idol']}>
      <div className={styles['favorite-idol-title']}>
        <h3>내가관심있는 아이돌</h3>
      </div>
      <div className={styles['favorite-add-info']}>
      <img
          src={logoImage}
          className={styles['logo-image']}
          alt='로고이미지'
          width='120px'
          height='23'
        />
        <h3>좋아하는 아이돌을 추가해주세요</h3>
      </div>

      <div className={styles['bottom-line']}></div>
    </div>
  );
}

export default FavoriteIdol;
