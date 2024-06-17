import { useLocation } from 'react-router-dom';
import styles from './styles.module.scss';
import { Logo, ProfileImage } from './components';

const useIsVisibleHeader = () => {
  const location = useLocation();
  return location.pathname !== '/';
};

function Header({
  EmptyItemComponent = null,
  profileImageComponent = <ProfileImage />,
  logoComponent = <Logo />,
}) {
  const isVisible = useIsVisibleHeader();

  if (!isVisible) return null;

  return (
    <div className={styles['container']}>
      <header className={styles['header']}>
        <div>{EmptyItemComponent}</div>
        {logoComponent}
        <div>{profileImageComponent}</div>
      </header>
    </div>
  );
}

export default Header;
