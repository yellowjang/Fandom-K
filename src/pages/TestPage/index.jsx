import styles from './styles.module.scss';
// import MonthlyChart from './components/MonthlyChart';

function TestPage() {
  return (
    <div className={styles['test-page']}>
      <header />
      <main>{/* <MonthlyChart /> */}</main>
      <footer />
    </div>
  );
}

export default TestPage;
