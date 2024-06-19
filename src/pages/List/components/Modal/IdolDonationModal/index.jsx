import style from './styles.module.scss';
import closeIcon from '@/assets/icons/ic_close.svg';
import creditIcon from '@/assets/images/img_diamond.png';
import ModalBackground from '../components/ModalBackground';

const IdolDonationModal = ({
  donationImg,
  donationSubTitle,
  donationTitle,
  isModalOpen,
  closeModal,
}) => {
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
              <input type='number' placeholder='크레딧 입력' />
              <img src={creditIcon} alt='크레딧 아이콘' />
            </div>
          </div>
          <div className={style['footer']}>
            <button>충전하기</button>
          </div>
        </div>
      </ModalBackground>
    </>
  );
};

export default IdolDonationModal;
