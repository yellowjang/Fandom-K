import { useState, useEffect } from 'react';
import style from './styles.module.scss';
import closeIcon from '@/assets/icons/ic_close.svg';
import creditImg from '@/assets/images/img_diamond.png';
import creditWhiteImg from '@/assets/images/img_diamond_white.png';
import ModalBackground from '../components/ModalBackground';

const ChargeAmount = ({ value, selected, onClick }) => {
  return (
    <label
      className={`${style['charge-amount']} ${selected ? style['selected'] : ''}`}
    >
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
        checked={selected}
        onChange={() => onClick(value)}
      />
    </label>
  );
};

const CreditChargeModal = ({ isModalOpen, closeModal, updateCredit }) => {
  const [selectedValue, setSelectedValue] = useState(null);

  const handleChargeAmountClick = (value) => {
    setSelectedValue(value);
  };

  const handleCharge = () => {
    if (selectedValue) {
      const currentCredits = parseInt(localStorage.getItem('credits')) || 0;
      const newCredits = currentCredits + parseInt(selectedValue);
      localStorage.setItem('credits', newCredits.toString());
      updateCredit(newCredits);
      alert(`크레딧이 충전되었습니다. 현재 크레딧: ${newCredits}`);
      closeModal();
      setSelectedValue(null); // 선택 초기화
    } else {
      alert('충전할 금액을 선택해주세요.');
    }
  };

  useEffect(() => {
    if (!isModalOpen) {
      setSelectedValue(null); // 모달이 닫힐 때 선택 초기화
    }
  }, [isModalOpen]);

  return (
    <ModalBackground isModalOpen={isModalOpen} closeModal={closeModal}>
      <div className={style['container']}>
        <div className={style['header']}>
          <h2>크레딧 충전하기</h2>
          <button onClick={closeModal}>
            <img src={closeIcon} alt='닫기 아이콘' />
          </button>
        </div>
        <div className={style['main']}>
          <ChargeAmount
            value='100'
            selected={selectedValue === '100'}
            onClick={handleChargeAmountClick}
          />
          <ChargeAmount
            value='500'
            selected={selectedValue === '500'}
            onClick={handleChargeAmountClick}
          />
          <ChargeAmount
            value='1000'
            selected={selectedValue === '1000'}
            onClick={handleChargeAmountClick}
          />
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
