import styles from './styles.module.scss';

function IdolCircleImage({ imgUrl, idolName, size = 70 }) {
  return (
    <div className={styles['idol-circle-image']}>
      <div
        className={styles['image-container']}
      >
        <img
          className={styles['image']}
          src={imgUrl}
          alt={`${idolName} 사진`}
          style={{ width: size, height: size }}
        />
      </div>
    </div>
  );
}

export default IdolCircleImage;
