import styles from './styles.module.scss';

function IdolCircleImage({ imgUrl, idolName, size = 70 }) {
  return (
    <div className={styles['idol-circle-image']}>
      <div
        className={styles['image-container']}
        style={{ width: size, height: size }}
      >
        <img
          className={styles['image']}
          src={imgUrl}
          alt={`${idolName} 사진`}
        />
      </div>
    </div>
  );
}

export default IdolCircleImage;
