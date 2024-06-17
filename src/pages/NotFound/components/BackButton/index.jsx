import styles from './styles.module.scss';
import Button from '@/components/Button';
import turnBackImg from '@/assets/icons/ic_turn_back.svg';
import { Link } from 'react-router-dom';

function BackButton() {
  return (
    <Link to='/'>
      <div className={styles['back-button']}>
        <Button className={styles['inner-button']}>
          <p>목록으로 돌아가기</p>
          <img src={turnBackImg} alt='되돌아가기 이미지' />
        </Button>
      </div>
    </Link>
  );
}

export default BackButton;
