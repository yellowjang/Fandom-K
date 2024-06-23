import { Link } from 'react-router-dom';
import styles from './styles.module.scss';
import logoImage from '@/assets/images/logo/fandom_k_logo.png';

function NotFound() {
  return (
    <div className={styles['container']}>
      <div className={styles['main']}>
        <div className={styles['description']}>
          <p>
            페이지를 찾을 수 없거나, <br />
            경로가 올바르지 않습니다. <br />
            <span>로고</span>나<span> 버튼</span>을 눌러 이동하세요.
          </p>
          <Link to='/list'>
            <img src={logoImage} alt='팬덤 케이' width={700} height={100} />
          </Link>
          <div className={styles['start-button']}>
            <Link to='/'>
              <button>메인으로 이동하기</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
