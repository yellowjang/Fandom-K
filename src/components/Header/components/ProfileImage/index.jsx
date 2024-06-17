import { Link } from 'react-router-dom';
import profileImage from '@/assets/images/header/profile_img.svg';
import styles from './styles.module.scss';

const ProfileImage = () => (
  <Link to='/mypage'>
    <img
      className={styles['profile']}
      src={profileImage}
      alt='프로필 이미지'
      width={32}
      height={32}
    />
  </Link>
);

export default ProfileImage;
