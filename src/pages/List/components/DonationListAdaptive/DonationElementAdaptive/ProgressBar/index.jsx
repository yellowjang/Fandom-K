import { motion } from 'framer-motion';
import styles from './styles.module.scss';

function ProgressBar({ targetDonation, receivedDonations }) {
  const progress = Math.min((receivedDonations / targetDonation) * 100, 100);

  return (
    <div className={styles['progress-container']}>
      <motion.div
        className={styles['progress-bar']}
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.5 }}
      />
    </div>
  );
}

export default ProgressBar;
