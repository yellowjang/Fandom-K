import { useState, useEffect, useContext } from 'react';
import style from './styles.module.scss';
import closeIcon from '@/assets/icons/ic_close.svg';
import creditImg from '@/assets/icons/img_diamond.png';
import creditWhiteImg from '@/assets/icons/img_diamond_white.png';
import ModalBackground from '../components/ModalBackground';
import Toast from '@/components/Toast';
import { CreditContext } from '@/contexts/CreditContext';

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

const CreditChargeModal = ({ isModalOpen, closeModal }) => {
  const { updateCredits } = useContext(CreditContext);
  const [selectedValue, setSelectedValue] = useState(null);
  const [toastMessage, setToastMessage] = useState('');

  const handleChargeAmountClick = (value) => {
    setSelectedValue(value);
  };

  const handleCharge = () => {
    const currentCredits = parseInt(localStorage.getItem('credits')) || 0;
    const newCredits = currentCredits + parseInt(selectedValue);
    localStorage.setItem('credits', newCredits.toString());
    updateCredits(newCredits);
    setToastMessage('충전이 완료되었습니다!');
    closeModal(setSelectedValue(null));
    setSelectedValue(null);
  };

  useEffect(() => {
    if (!isModalOpen) {
      setSelectedValue(null);
    }
  }, [isModalOpen]);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'Enter' && selectedValue) {
        handleCharge();
      }
    };

    if (isModalOpen) {
      window.addEventListener('keydown', handleKeyPress);
    } else {
      window.removeEventListener('keydown', handleKeyPress);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [isModalOpen, selectedValue]);

  const closeToast = () => {
    setToastMessage('');
  };

  return (
    <>
      <ModalBackground
        isModalOpen={isModalOpen}
        closeModal={() => closeModal()}
      >
        <div className={style['container']}>
          <div className={style['header']}>
            <h2>크레딧 충전하기</h2>
            <button onClick={() => closeModal()}>
              <img src={closeIcon} alt='닫기 아이콘' />
            </button>
          </div>
          <div className={style['main']}>
            <ChargeAmount
              value='100'
              onClick={handleChargeAmountClick}
              selected={selectedValue === '100'}
            />
            <ChargeAmount
              value='500'
              onClick={handleChargeAmountClick}
              selected={selectedValue === '500'}
            />
            <ChargeAmount
              value='1000'
              onClick={handleChargeAmountClick}
              selected={selectedValue === '1000'}
            />
          </div>
          <div className={style['footer']}>
            <img src={creditWhiteImg} alt='크레딧 이미지' />
            <button
              disabled={!selectedValue}
              className={selectedValue ? '' : style['button--disabled']}
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
