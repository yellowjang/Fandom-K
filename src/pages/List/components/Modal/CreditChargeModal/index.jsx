import { useState, useEffect } from 'react';
import style from './styles.module.scss';
import closeIcon from '@/assets/icons/ic_close.svg';
import creditImg from '@/assets/images/img_diamond.png';
import creditWhiteImg from '@/assets/images/img_diamond_white.png';
import ModalBackground from '../components/ModalBackground';
import Toast from '@/components/Toast';

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
  const [toastMessage, setToastMessage] = useState('');

  const handleChargeAmountClick = (value) => {
    setSelectedValue(value);
  };

  const handleCharge = () => {
    const currentCredits = parseInt(localStorage.getItem('credits')) || 0;
    const newCredits = currentCredits + parseInt(selectedValue);
    localStorage.setItem('credits', newCredits.toString());
    updateCredit(newCredits);
    setToastMessage('충전이 완료되었습니다!');
    closeModal(setSelectedValue(null));
    setSelectedValue(null); // 선택 초기화
  };

  useEffect(() => {
    if (!isModalOpen) {
      setSelectedValue(null); // 모달이 닫힐 때 선택 초기화
    }
  }, [isModalOpen]);

  const closeToast = () => {
    setToastMessage('');
  };

  return (
    <>
      <ModalBackground
        isModalOpen={isModalOpen}
        closeModal={() => closeModal(setSelectedValue(null))}
      >
        <div className={style['container']}>
          <div className={style['header']}>
            <h2>크레딧 충전하기</h2>
            <button onClick={() => closeModal(setSelectedValue(null))}>
              <img src={closeIcon} alt='닫기 아이콘' />
            </button>
          </div>
          <div className={style['main']}>
            <ChargeAmount
              value='100'
              onClick={handleChargeAmountClick}
              selected={selectedValue === '100'}
              selectedValue={selectedValue}
            />
            <ChargeAmount
              value='500'
              onClick={handleChargeAmountClick}
              selected={selectedValue === '500'}
              selectedValue={selectedValue}
            />
            <ChargeAmount
              value='1000'
              onClick={handleChargeAmountClick}
              selected={selectedValue === '1000'}
              selectedValue={selectedValue}
            />
          </div>
          <div className={style['footer']}>
            <img src={creditWhiteImg} alt='크레딧 이미지' />
            <button
              disabled={!selectedValue}
              className={!selectedValue && style['button--disabled']}
              onClick={handleCharge}
            >
              충전하기
            </button>
          </div>
        </div>
      </ModalBackground>

      {toastMessage && <Toast message={toastMessage} onClose={closeToast} />}
    </>
  );
};

export default CreditChargeModal;
