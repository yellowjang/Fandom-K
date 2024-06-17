import style from './styles.module.scss';
import { useRef } from 'react';

const ModalBackground = ({ isModalOpen, closeModal, children }) => {
  const modalBackgroundRef = useRef();
  return (
    <>
      <div
        style={{ display: isModalOpen ? 'block' : 'none' }}
        className={style['modal-background']}
        ref={modalBackgroundRef}
        onClick={(e) => {
          if (e.target === modalBackgroundRef.current) {
            closeModal();
          }
        }}
      >
        {children}
      </div>
    </>
  );
};

export default ModalBackground;
