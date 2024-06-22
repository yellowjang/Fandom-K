import { useEffect, useState } from 'react';
import styles from './styles.module.scss';

const Toast = ({ message, onClose }) => {
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    const duration = 2000;
    const interval = 50;
    const decrement = (interval / duration) * 100;

    const timer = setTimeout(() => {
      onClose();
    }, duration);

    const progressInterval = setInterval(() => {
      setProgress(prev => Math.max(prev - decrement, 0));
    }, interval);

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  }, [onClose]);

  return (
    <div className={styles.toast}>
      {message}
      <div className={styles.progressBar}>
        <div className={styles.progress} style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
};

export default Toast;
