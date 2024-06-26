import { useEffect } from 'react';
import closeIcon from '@/assets/icons/ic_close.svg';
import creditImg from '@/assets/icons/img_diamond.png';
import style from './styles.module.scss';
import ModalBackground from '../components/ModalBackground';

const CreditAlertModal = ({ isModalOpen, closeModal }) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Enter') {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isModalOpen, closeModal]);

  return (
    <>
      <ModalBackground isModalOpen={isModalOpen} closeModal={closeModal}>
        <div className={style['container']}>
          <div className={style['header']}>
            <button onClick={closeModal}>
              <img src={closeIcon} alt='닫기 아이콘' />
            </button>
          </div>
          <div className={style['main']}>
            <img src={creditImg} alt='크레딧 이미지' />
            <span>
              앗! 투표하기 위한 <span className={style['strong']}>크레딧</span>
              이 부족해요
            </span>
          </div>
          <div className={style['footer']}>
            <button onClick={closeModal}>확인</button>
          </div>
        </div>
      </ModalBackground>
    </>
  );
};

export default CreditAlertModal;
