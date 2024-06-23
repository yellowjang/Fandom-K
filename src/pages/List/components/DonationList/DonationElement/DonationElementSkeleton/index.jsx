import styles from './styles.module.scss';

function DonationElementSkeleton() {
  return (
    <>
      {[...Array(4)].map((_, index) => (
        <div key={index} className={styles['donation-element']}>
          <div className={styles['image-box']}>
            <div className={styles['gradation']}></div>
            <div
              className={`${styles['donation-img']} ${styles['skeleton']}`}
            />
            <button className={styles['skeleton-button']}></button>
          </div>
          <div className={styles['donation-contents']}>
            <div className={styles['title-wrapper']}>
              <div
                className={`${styles['subtitle']} ${styles['skeleton-text']} ${styles['short']}`}
              />
              <div
                className={`${styles['title']} ${styles['skeleton-text']} ${styles['long']}`}
              />
            </div>
            <div className={styles['current-credit-box']}>
              <div className={styles['credit-line']}>
                <div className={styles['current-credit']}>
                  <div
                    className={`${styles['skeleton-text']} ${styles['skeleton-text-small']} ${styles['credit-amount']}`}
                  />
                </div>
                <div
                  className={`${styles['date-left']} ${styles['skeleton-text-small']} ${styles['skeleton']} ${styles['date']}`}
                />
              </div>
              <div
                className={`${styles['progress-bar']} ${styles['skeleton-progress-bar']}`}
              />
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default DonationElementSkeleton;
