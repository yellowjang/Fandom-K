import { useEffect, useState } from 'react';
import styles from './styles.module.scss';

const Toast = ({ message, onClose }) => {
  const [progress, setProgress] = useState(100);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const duration = 2000;
    const interval = 50;
    const decrement = (interval / duration) * 100;

    const timer = setTimeout(() => {
      onClose();
    }, duration);

    const progressInterval = setInterval(() => {
      setProgress((prev) => Math.max(prev - decrement, 0));
    }, interval);

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  }, [onClose]);

  const handleClick = () => {
    setIsClosing(true);
    setTimeout(onClose, 500);
  };

  return (
    <div
      style={{ cursor: 'pointer' }}
      aria-hidden='true'
      onClick={handleClick}
      className={`${styles['toast']} ${isClosing && styles['toast-closing']}`}
    >
      {message}
      <div className={styles.progressBar}>
        <div className={styles.progress} style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
};

export default Toast;
