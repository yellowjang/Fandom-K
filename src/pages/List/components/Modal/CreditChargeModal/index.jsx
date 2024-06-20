import { useState } from 'react';
import style from './styles.module.scss';
import closeIcon from '@/assets/icons/ic_close.svg';
import creditImg from '@/assets/images/img_diamond.png';
import creditWhiteImg from '@/assets/images/img_diamond_white.png';
import ModalBackground from '../components/ModalBackground';
import Toast from '@/components/Toast';

const ChargeAmout = ({ value, onClick }) => {
  return (
    <label className={style['charge-amount']}>
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
  const [toastMessage, setToastMessage] = useState('');

  const handleChargeAmountClick = (value) => {
    setSelectedValue(value);
  };

  const handleCharge = () => {
    if (selectedValue) {
      const currentCredits = parseInt(localStorage.getItem('credits')) || 0;
      const newCredits = currentCredits + parseInt(selectedValue);
      localStorage.setItem('credits', newCredits);
      updateCredit(newCredits);
      setToastMessage('충전이 완료되었습니다!');
      closeModal();
    } else {
      alert('충전할 금액을 선택해주세요.');
    }
  };

  const closeToast = () => {
    setToastMessage('');
  };

  return (
    <>
      <ModalBackground isModalOpen={isModalOpen} closeModal={closeModal}>
        <div className={style['container']}>
          <div className={style['header']}>
            <h2>크레딧 충전하기</h2>
            <button onClick={closeModal}>
              <img src={closeIcon} alt='닫기 아이콘' />
            </button>
          </div>
          <div className={style['main']}>
            <ChargeAmout value='100' onClick={handleChargeAmountClick} />
            <ChargeAmout value='500' onClick={handleChargeAmountClick} />
            <ChargeAmout value='1000' onClick={handleChargeAmountClick} />
          </div>
          <div className={style['footer']}>
            <img src={creditWhiteImg} alt='크레딧 이미지' />
            <button onClick={handleCharge}>충전하기</button>
          </div>
        </div>
      </ModalBackground>
      {toastMessage && <Toast message={toastMessage} onClose={closeToast} />}
    </>
  );
};

export default CreditChargeModal;
