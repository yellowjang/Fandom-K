import BackButton from './components/BackButton';
import styles from './styles.module.scss';

function NotFound() {
  return (
    <div className={styles['not-found']}>
      <header>
        <p>잘못된 페이지 또는 만들기 전 페이지입니다.</p>
        <BackButton />
      </header>
      <main />
      <footer />
    </div>
  );
}

export default NotFound;
