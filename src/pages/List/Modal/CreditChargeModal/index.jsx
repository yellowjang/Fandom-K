import style from './styles.module.scss';
import closeIcon from '@/assets/icons/ic_close.svg';
import creditImg from '@/assets/images/img_diamond.png';
import creditWhiteImg from '@/assets/images/img_diamond_white.png';
import { useRef } from 'react';

const CreditChargeModal = ({ isModalOpen, closeModal }) => {
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
            <h2>크레딧 충전하기</h2>
            <button onClick={closeModal}>
              <img src={closeIcon} alt='닫기 아이콘' />
            </button>
          </div>
          <div className={style['main']}>
            <label className={style['card']}>
              <div>
                <img
                  className={style['credit-img']}
                  src={creditImg}
                  alt='크레딧 이미지'
                />
                <span>100</span>
              </div>
              <input type='radio' name='credit' value='100' />
            </label>
            <label className={style['card']}>
              <div>
                <img
                  className={style['credit-img']}
                  src={creditImg}
                  alt='크레딧 이미지'
                />
                <span>500</span>
              </div>
              <input type='radio' name='credit' value='500' />
            </label>
            <label className={style['card']}>
              <div>
                <img
                  className={style['credit-img']}
                  src={creditImg}
                  alt='크레딧 이미지'
                />
                <span>1000</span>
              </div>
              <input type='radio' name='credit' value='1000' />
            </label>
          </div>
          <div className={style['footer']}>
            <img src={creditWhiteImg} alt='크레딧 이미지' />
            <button>충전하기</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreditChargeModal;
