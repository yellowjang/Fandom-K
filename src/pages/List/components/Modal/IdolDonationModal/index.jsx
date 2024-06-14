import style from './styles.module.scss';
import closeIcon from '@/assets/icons/ic_close.svg';
import idolImg from '@/assets/images/img_idol.png';
import creditIcon from '@/assets/images/img_diamond.png';
import { useRef } from 'react';

const IdolDonationModal = ({ isModalOpen, closeModal }) => {
  const modalBackgroundRef = useRef();
  return (
    <>
      <div
        style={{ display: isModalOpen ? 'block' : 'none' }}
        className={style.modal_background}
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
            <h2>후원하기</h2>
            <button onClick={closeModal}>
              <img src={closeIcon} alt='닫기 아이콘' />
            </button>
          </div>
          <div className={style['main']}>
            <div className={style['card']}>
              <img src={idolImg} alt='아이돌 이미지' />
              <div className={style['text-wrapper']}>
                <span>강남역 광고</span>
                <p>민지 2023 첫 광고</p>
              </div>
            </div>
            <div className={style['input-wrapper']}>
              <input type='number' placeholder='크레딧 입력' />
              <img src={creditIcon} alt='크레딧 아이콘' />
            </div>
          </div>
          <div className={style['footer']}>
            <button>충전하기</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default IdolDonationModal;
