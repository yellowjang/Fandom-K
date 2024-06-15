import style from './styles.module.scss';
import closeIcon from '@/assets/icons/ic_close.svg';
import creditImg from '@/assets/images/img_diamond.png';
import creditWhiteImg from '@/assets/images/img_diamond_white.png';
import ModalBackground from '../components/ModalBackground';

const CreditCard = ({ value }) => {
  return (
    <>
      <label className={style['card']}>
        <div>
          <img
            className={style['credit-img']}
            src={creditImg}
            alt='크레딧 이미지'
          />
          <span>{value}</span>
        </div>
        <input type='radio' name='credit' value='100' />
      </label>
    </>
  );
};

const CreditChargeModal = ({ isModalOpen, closeModal }) => {
  return (
    <>
      <ModalBackground isModalOpen={isModalOpen} closeModal={closeModal}>
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
            <CreditCard value='100' />
            <CreditCard value='500' />
            <CreditCard value='1000' />
          </div>
          <div className={style['footer']}>
            <img src={creditWhiteImg} alt='크레딧 이미지' />
            <button>충전하기</button>
          </div>
        </div>
      </ModalBackground>
    </>
  );
};

export default CreditChargeModal;
