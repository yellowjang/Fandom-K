import style from './styles.module.scss';
import closeIcon from '@/assets/icons/ic_close.svg';
import creditIcon from '@/assets/images/img_diamond.png';
import ModalBackground from '../components/ModalBackground';
import { useState } from 'react';
import CreditAlertModal from '@/pages/List/components/Modal/CreditAlertModal';

const IdolDonationModal = ({
  donationImg,
  donationSubTitle,
  donationTitle,
  isModalOpen,
  closeModal,
  handleDonate,
}) => {
  const [creditValue, setCreditValue] = useState('');
  const [creditValueError, setCreditValueError] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [inputCredit, setInputCredit] = useState('');
  const [isAlertModalOpen, setIsAlertModalOpen] = useState(false);

  const validate = (value) => {
    if (value === '') {
      setIsValid(false);
      return;
    }
    if (+value > +localStorage.getItem('credits')) {
      setCreditValueError('갖고 있는 크레딧보다 더 많이 후원할 수 없어요');
      setIsValid(false);
      return;
    }
    setCreditValueError('');
    setIsValid(true);
  };

  const handleInputChange = (e) => {
    const { value } = e.target;
    setInputCredit(value);
    validate(value);
    setCreditValue(value);
  };

  const handleSubmit = () => {
    handleDonate(parseInt(inputCredit, 10));
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <>
      <ModalBackground isModalOpen={isModalOpen} closeModal={closeModal}>
        <div className={style['container']}>
          <div className={style['header']}>
            <h2>후원하기</h2>
            <button onClick={closeModal}>
              <img src={closeIcon} alt='닫기 아이콘' />
            </button>
          </div>
          <div className={style['main']}>
            <div className={style['card']}>
              <img src={donationImg} alt='아이돌 이미지' />
              <div className={style['text-wrapper']}>
                <span>{donationSubTitle}</span>
                <p>{donationTitle}</p>
              </div>
            </div>
            <div className={style['input-wrapper']}>
              <input
                type='number'
                value={inputCredit}
                placeholder='크레딧 입력'
                onChange={handleInputChange}
                onKeyPress={handleKeyPress} // Handle enter key press
                className={
                  creditValue !== '' && !isValid && style['input-error']
                }
              />
              <img src={creditIcon} alt='크레딧 아이콘' />
            </div>
            <span className={style['error-message']}>{creditValueError}</span>
          </div>
          <div className={style['footer']}>
            <button
              onClick={handleSubmit}
              disabled={!isValid}
              className={!isValid && style['button--disabled']}
            >
              후원하기
            </button>
          </div>
        </div>
      </ModalBackground>

      <CreditAlertModal
        isModalOpen={isAlertModalOpen}
        closeModal={() => setIsAlertModalOpen(false)}
      />
    </>
  );
};

export default IdolDonationModal;
