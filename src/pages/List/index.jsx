import { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import MyCredit from './components/MyCredit';
import DonationList from './components/DonationList';
import DonationListAdaptive from './components/DonationListAdaptive';
import MonthlyChart from './components/MonthlyChart';
import { CreditProvider } from '@/contexts/CreditContext';

function List() {
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth >= 1200);

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth >= 1200);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={styles['list-page']}>
      <header />
      <main>
        <CreditProvider>
          <MyCredit />
          {isWideScreen ? <DonationList /> : <DonationListAdaptive />}
          <MonthlyChart />
        </CreditProvider>
      </main>
      <footer />
    </div>
  );
}

export default List;
