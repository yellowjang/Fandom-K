import ChartList from '../ChartList';
import styles from './styles.module.scss';
import Button from '@/components/Button';
import chartImg from '@/assets/icons/ic_chart.svg';
import { useState } from 'react';
import VoteModal from '../../../List/components/Modal/VoteModal';

function MonthlyChart() {
  const [isGirlChart, setIsGirlChart] = useState(true);

  return (
    <div className={styles['montyly-chart']}>
      <div className={styles['header']}>
        <h1>이달의 차트</h1>
        <VoteModal />
      </div>
      <div className={styles['gender-tab']}>
        <Button
          className={`${styles['girl-btn']} ${isGirlChart && styles['focus']}`}
        >
          이달의 여자 아이돌
        </Button>
        <Button
          className={`${styles['boy-btn']} ${!isGirlChart && styles['focus']}`}
        >
          이달의 남자 아이돌
        </Button>
      </div>
      <ChartList />
      <Button className={styles['more-btn']}>더 보기</Button>
    </div>
  );
}

export default MonthlyChart;
