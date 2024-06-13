import closeIcon from '@/assets/icons/ic_close.svg';
import creditImg from '@/assets/images/img_diamond.png';
import style from './styles.module.scss';
import { useRef } from 'react';

const CreditAlertModal = ({ isModalOpen, closeModal }) => {
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
        <div
          style={{ display: isModalOpen ? 'block' : 'none' }}
          className={style['container']}
        >
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
            <button>확인</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreditAlertModal;
