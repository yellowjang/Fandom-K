import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import closeIcon from '@/assets/icons/ic_close.svg';
import chartIcon from '@/assets/icons/ic_chart.svg';
import checkIcon from '@/assets/icons/ic_check.svg';
import ChartList from './ChartList';

function VoteModal({ items }) {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.documentElement.style.overflow = 'hidden';
  } else {
    document.documentElement.style.overflow = '';
  }

  return (
    <>
      <button onClick={toggleModal} className={styles['btn-modal']}>
        <img src={chartIcon} alt='그래프 이미지' />
        <p>차트 투표하기</p>
      </button>

      {modal && (
        <div className={styles['modal']}>
          <div
            onClick={toggleModal}
            className={styles['overlay']}
            aria-hidden='true'
          ></div>
          <div className={styles['modal-content']}>
            <header>
              <h2>이달의 여자 아이돌</h2>
              <button onClick={toggleModal}>
                <img src={closeIcon} alt='닫기 아이콘' />
              </button>
            </header>
            <main>
              <div className={styles['list-container']}>
                <ChartList items={items} />
              </div>
            </main>
            <footer>
              <button>투표하기</button>
              <span>
                투표하는 데 <span>1000 크레딧</span>이 소모됩니다.
              </span>
            </footer>
          </div>
        </div>
      )}
    </>
  );
}

export default VoteModal;
