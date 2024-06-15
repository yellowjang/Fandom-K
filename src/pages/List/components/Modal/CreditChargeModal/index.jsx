import { useState } from 'react';
import style from './styles.module.scss';
import closeIcon from '@/assets/icons/ic_close.svg';
import creditImg from '@/assets/images/img_diamond.png';
import creditWhiteImg from '@/assets/images/img_diamond_white.png';
import ModalBackground from '../components/ModalBackground';

const CreditCard = ({ value, onClick }) => {
  return (
    <label className={style['card']}>
      <div>
        <img
          className={style['credit-img']}
          src={creditImg}
          alt='크레딧 이미지'
        />
        <span>{value}</span>
      </div>
      <input
        type='radio'
        name='credit'
        value={value}
        onClick={() => onClick(value)}
      />
    </label>
  );
};

const CreditChargeModal = ({ isModalOpen, closeModal, updateCredit }) => {
  const [selectedValue, setSelectedValue] = useState(null);

  const handleCreditCardClick = (value) => {
    setSelectedValue(value);
  };

  const handleCharge = () => {
    if (selectedValue) {
      const currentCredits = parseInt(localStorage.getItem('credits')) || 0;
      const newCredits = currentCredits + parseInt(selectedValue);
      localStorage.setItem('credits', newCredits);
      updateCredit(newCredits);
      alert(`크레딧이 충전되었습니다. 현재 크레딧: ${newCredits}`);
      closeModal();
    } else {
      alert('충전할 금액을 선택해주세요.');
    }
  };

  return (
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
          <CreditCard value='100' onClick={handleCreditCardClick} />
          <CreditCard value='500' onClick={handleCreditCardClick} />
          <CreditCard value='1000' onClick={handleCreditCardClick} />
        </div>
        <div className={style['footer']}>
          <img src={creditWhiteImg} alt='크레딧 이미지' />
          <button onClick={handleCharge}>충전하기</button>
        </div>
      </div>
    </ModalBackground>
  );
};

export default CreditChargeModal;
