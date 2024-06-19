import { useState, useEffect } from 'react';
import style from './styles.module.scss';
import creditImg from '@/assets/images/img_diamond.png';
import CreditChargeModal from '../Modal/CreditChargeModal';
import ModalPortal from '../Modal/components/ModalPortal';

const MyCredit = ({ isModalOpen, closeModal, openModal }) => {
  const [credit, setCredit] = useState('0');

  useEffect(() => {
    const currentCredits = localStorage.getItem('credits') || '0';
    setCredit(currentCredits);
  }, []);

  const updateCredit = (newCredit) => {
    setCredit(newCredit);
  };

  return (
    <>
      <div className={style['container']}>
        <div className={style['credit-state']}>
          <p>내 크레딧</p>
          <div className={style['credit-money']}>
            <img src={creditImg} alt='크레딧 이미지' />
            <p>{credit}</p>
          </div>
        </div>
        <button onClick={openModal}>충전하기</button>
      </div>
      <ModalPortal>
        <CreditChargeModal
          isModalOpen={isModalOpen}
          closeModal={closeModal}
          updateCredit={updateCredit}
        />
      </ModalPortal>
    </>
  );
};

export default MyCredit;
