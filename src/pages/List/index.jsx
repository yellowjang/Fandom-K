import styles from './styles.module.scss';
import MyCredit from './components/MyCredit';
import DonationList from './components/DonationList';
import MonthlyChart from './components/MonthlyChart';

function List() {
  return (
    <div className={styles['list-page']}>
      <header />
      <main>
        <MyCredit />
        <DonationList />
        <MonthlyChart />
      </main>
      <footer />
    </div>
  );
}

export default List;
