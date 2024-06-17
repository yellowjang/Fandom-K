import React, { useState } from 'react';
import styles from './styles.module.scss';
import closeIcon from '@/assets/icons/ic_close.svg';
import idolImg from '@/assets/images/image.png';

function VoteModal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add('active-modal');
  } else {
    document.body.classList.remove('active-modal');
  }

  return (
    <>
      <button onClick={toggleModal} className={styles['btn-modal']}>
        차트 투표하기
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
              <label className={styles['list']}>
                <div className={styles['list-content']}>
                  <img
                    className={styles['idol-img']}
                    src={idolImg}
                    alt='아이돌 이미지'
                  />
                  <h1>1</h1>
                  <div className={styles['text-content']}>
                    <h1>뉴진스 민지</h1>
                    <h2>204,000표</h2>
                  </div>
                </div>
                <input type='radio' name='credit' value='100' />
              </label>
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
