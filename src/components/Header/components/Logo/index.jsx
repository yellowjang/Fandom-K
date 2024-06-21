import { Link } from "react-router-dom";
import styles from './styles.module.scss';
import logo from '@/assets/images/logo/logo.png';

const Logo = () => (
  <Link to='/list'>
    <img className={styles['logo']} src={logo} alt='팬덤 케이' />
  </Link>
);

export default Logo;