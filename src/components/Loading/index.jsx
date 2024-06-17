import styles from './styles.module.scss';
import loadingImg from '@/assets/images/img_loading.png';
import loadingTextImg from '@/assets/images/img_loading_text.png';

function Loading({ size }) {
  return (
    <div className={styles['loading']}>
      <img
        src={loadingImg}
        alt='로딩 이미지'
        className={styles['loading-img']}
        width={size}
        height={size}
      />
      <img
        src={loadingTextImg}
        alt='로딩 텍스트 이미지'
        className={styles['loading-text']}
        width={size}
        height={size}
      />
      {/* <p className={styles['loading-text']}>Loading...</p> */}
    </div>
  );
}

export default Loading;
