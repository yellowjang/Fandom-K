import { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import closeIcon from '@/assets/icons/ic_close.svg';
import chartIcon from '@/assets/icons/ic_chart.svg';
import checkIcon from '@/assets/icons/ic_check.svg';
import backIcon from '@/assets/icons/icj_arrow_left.svg';
import ModalChart from './ModalChart';
import { disableScroll, activateScroll } from '../components/ModalScroll';
import { postVotes } from '@/services/api/votes';
import useAsync from '@/hooks/useAsync';
import Toast from '@/components/Toast';

function VoteModal({ items, gender, setItems }) {
  const [modal, setModal] = useState(false);
  const [selectedIdol, setSelectedIdol] = useState(null);
  const [isLoadingVote, isErrorVote, asyncVote] = useAsync(postVotes);
  const [toastMessage, setToastMessage] = useState('');

  const toggleModal = () => {
    setModal(!modal);
    setCredit(localStorage.getItem('credits'));
  };

  const genderCheck = gender === 'female' ? '여자' : '남자';

  useEffect(() => {
    if (modal) {
      const currentScrollY = disableScroll();
      return () => {
        activateScroll(currentScrollY);
      };
    }
  }, [modal]);

  const [credit, setCredit] = useState('0');

  useEffect(() => {
    const currentCredits = localStorage.getItem('credits') || '0';
    setCredit(currentCredits);
  }, [credit]);

  const handleVote = async () => {
    if (selectedIdol) {
      if (credit >= 1000) {
        await asyncVote(selectedIdol);
        const updatedCredits = credit - 1000;
        localStorage.setItem('credits', updatedCredits);
        setCredit(updatedCredits);
        setToastMessage('투표가 완료되었습니다!');
        setSelectedIdol(null);
        toggleModal();
        window.location.reload();
      } else {
        alert('크레딧 부족');
      }
    }
  };

  const handleSelectIdol = (idolId) => {
    setSelectedIdol(idolId);
  };

  const closeToast = () => {
    setToastMessage('');
  };

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const widthMaxMobile = 767;

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
              <h2>이달의 {genderCheck} 아이돌</h2>
              <button onClick={toggleModal}>
                <img
                  src={windowWidth > widthMaxMobile ? closeIcon : backIcon}
                  alt='닫기 아이콘'
                />
              </button>
            </header>
            <main>
              <div className={styles['list-container']}>
                <ModalChart items={items} onSelectIdol={handleSelectIdol} />
              </div>
            </main>
            <footer>
              <button onClick={handleVote} disabled={!selectedIdol}>
                투표하기
              </button>
              <span>
                투표하는 데 <span>1000 크레딧</span>이 소모됩니다.
              </span>
            </footer>
          </div>
        </div>
      )}

      {toastMessage && <Toast message={toastMessage} onClose={closeToast} />}
    </>
  );
}

export default VoteModal;
