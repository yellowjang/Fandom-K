import styles from './styles.module.scss';

function IdolCardSkeleton() {
  return (
    <div className={styles['idol-card']}>
      <div className={styles['idol-image-container']}>
        <div className={styles['image-skeleton']}></div>
      </div>
      <div className={styles['idol-info-container']}>
        <div className={styles['name-skeleton']}></div>
        <div className={styles['group-skeleton']}></div>
      </div>
    </div>
  );
}

export default IdolCardSkeleton;
