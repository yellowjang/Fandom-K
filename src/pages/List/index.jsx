import { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import MyCredit from './components/MyCredit';
import DonationList from './components/DonationList';
import DonationListAdaptive from './components/DonationListAdaptive';
import MonthlyChart from './components/MonthlyChart';

function List() {
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth >= 1200);

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth >= 1200);
    };

    // Initialize the state based on the current window width
    handleResize();

    // Add the event listener
    window.addEventListener('resize', handleResize);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={styles['list-page']}>
      <header />
      <main>
        <MyCredit />
        {isWideScreen ? <DonationList /> : <DonationListAdaptive />}
        <MonthlyChart />
      </main>
      <footer />
    </div>
  );
}

export default List;
