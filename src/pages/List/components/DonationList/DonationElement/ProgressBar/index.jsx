import React from 'react';
import styles from './styles.module.scss';

function ProgressBar({ targetDonation, receivedDonations }) {
  const progress = Math.min((receivedDonations / targetDonation) * 100, 100);

  return (
    <div className={styles['progress-container']}>
      <div
        className={styles['progress-bar']}
        style={{
          width: `${progress}%`,
        }}
      />
      <p className={styles['progress-text']}>{`${progress.toFixed(0)}%`}</p>
    </div>
  );
}

export default ProgressBar;
