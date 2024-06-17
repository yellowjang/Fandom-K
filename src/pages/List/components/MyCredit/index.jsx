import { useState, useEffect } from 'react';
import style from './styles.module.scss';
import creditImg from '@/assets/images/img_diamond.png';
import CreditChargeModal from '../Modal/CreditChargeModal';

const MyCredit = () => {
  const [credit, setCredit] = useState('0');
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const currentCredits = localStorage.getItem('credits') || '0';
    setCredit(currentCredits);
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const updateCredit = (newCredit) => {
    setCredit(newCredit);
  };

  return (
    <>
      <section className={style['container']}>
        <div className={style['credit-state']}>
          <p>내 크레딧</p>
          <div className={style['credit-money']}>
            <img src={creditImg} alt='크레딧 이미지' />
            <p>{credit}</p>
          </div>
        </div>
        <button onClick={openModal}>충전하기</button>
      </section>
      <CreditChargeModal
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        updateCredit={updateCredit}
      />
    </>
  );
};

export default MyCredit;
