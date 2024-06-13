import MonthlyChart from './components/MonthlyChart';
import styles from './styles.module.scss';

function NotFound() {
  return (
    <div className={styles['test-page']}>
      <header />
      <main>
        <MonthlyChart />
      </main>
      <footer />
    </div>
  );
}

export default NotFound;
