import { useEffect } from 'react';
import styles from './styles.module.scss';

const Toast = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 2000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return <div className={styles['toast']}>{message}</div>;
};

export default Toast;
