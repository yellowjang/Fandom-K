import { useState } from 'react';
import style from './styles.module.scss';
import closeIcon from '@/assets/icons/ic_close.svg';
import creditIcon from '@/assets/icons/img_diamond.png';
import ModalBackground from '../components/ModalBackground';
import Toast from '@/components/Toast';

const IdolDonationModal = ({
  donationImg,
  donationSubTitle,
  donationTitle,
  isModalOpen,
  closeModal,
  handleDonate,
  setToastMessage,
}) => {
  const [inputCredit, setInputCredit] = useState('');
  const [creditValueError, setCreditValueError] = useState('');
  const [isValid, setIsValid] = useState(false);
  // const [toastMessage, setToastMessage] = useState('');

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
    validate(value);
    setInputCredit(value);
  };

  const handleSubmit = async () => {
    if (isValid) {
      try {
        setIsValid(false);
        await handleDonate(parseInt(inputCredit, 10));
        setToastMessage('후원이 완료되었습니다!');
      } catch (error) {
        console.error('후원 실패!:', error);
        throw new Error(error);
      }
    }
  };

  const handleKeyPress = (e) => {
    if (!/^[0-9]$/.test(e.key)) {
      e.preventDefault();
    }
    if (e.key === 'Enter' && isValid) {
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
                placeholder='크레딧 입력'
                value={inputCredit}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
                className={
                  inputCredit !== '' && !isValid
                    ? style['input-error']
                    : undefined
                }
              />
              <img src={creditIcon} alt='크레딧 아이콘' />
            </div>
            <span className={style['error-message']}>{creditValueError}</span>
          </div>
          <div className={style['footer']}>
            <button
              disabled={!isValid}
              className={!isValid ? style['button--disabled'] : undefined}
              onClick={handleSubmit}
            >
              후원하기
            </button>
          </div>
        </div>
      </ModalBackground>

      {toastMessage && <Toast message={toastMessage} onClose={closeToast} />}
    </>
  );
};

export default IdolDonationModal;
