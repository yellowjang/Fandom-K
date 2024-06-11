import { Link } from 'react-router-dom';
import styles from './styles.module.scss';
import logo from '../../assets/images/logo/logo.png';
import profileImage from '../../assets/images/header/profile_img.svg';

function Header() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div></div>
        <Link to='/list'>
          <img
            className={styles.logo}
            src={logo}
            alt='팬덤 케이'
          />
        </Link>
        <Link>
          <img
            className={styles.profile}
            src={profileImage}
            alt='프로필 이미지'
            width={32}
            height={32}
          />
        </Link>
      </header>
    </div>
  );
}

export default Header;
