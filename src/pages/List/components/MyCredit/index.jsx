import { useContext, useState, useEffect } from 'react';
import style from './styles.module.scss';
import creditImg from '@/assets/images/img_diamond.png';
import CreditChargeModal from '../Modal/CreditChargeModal';
import ModalPortal from '../Modal/components/ModalPortal';
import { CreditContext } from '@/contexts/CreditContext';
import CountUp from 'react-countup';
import { disableScroll, activateScroll } from '../Modal/components/ModalScroll';

const MyCredit = () => {
  const { credits, updateCredits } = useContext(CreditContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (isModalOpen) {
      const currentScrollY = disableScroll();

      return () => {
        activateScroll(currentScrollY);
      };
    }
  }, [isModalOpen]);

  return (
    <>
      <div className={style['container']}>
        <div className={style['credit-state']}>
          <p>내 크레딧</p>
          <div className={style['credit-money']}>
            <img src={creditImg} alt='크레딧 이미지' />
            <div className={style['credit-number']}>
              <CountUp start={0} end={credits} duration={1.5} separator=',' />
            </div>
            {/* <p>{credits}</p> */}
          </div>
        </div>
        <button onClick={openModal}>충전하기</button>
      </div>
      <ModalPortal>
        <CreditChargeModal
          isModalOpen={isModalOpen}
          closeModal={closeModal}
          updateCredits={updateCredits}
        />
      </ModalPortal>
    </>
  );
};

export default MyCredit;
