import style from './styles.module.scss';
import { useRef, useEffect } from 'react';

const ModalBackground = ({ isModalOpen, closeModal, children }) => {
  const modalBackgroundRef = useRef();

  useEffect(() => {
    if (isModalOpen) {
      modalBackgroundRef.current.focus();
    }
  }, [isModalOpen]);

  const handleClick = (e) => {
    if (modalBackgroundRef.current && modalBackgroundRef.current === e.target) {
      closeModal();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  };

  return (
    <div
      style={{ display: isModalOpen ? 'block' : 'none' }}
      className={style['modal-background']}
      ref={modalBackgroundRef}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={-1}
      role='presentation'
    >
      {children}
    </div>
  );
};

export default ModalBackground;
