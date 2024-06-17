import ChartList from '../ChartList';
import styles from './styles.module.scss';
import Button from '@/components/Button';
import chartImg from '@/assets/icons/ic_chart.svg';
import { useEffect, useState } from 'react';
import { getCharts } from '@/services/api/charts';

function MonthlyChart() {
  const [isGirlChart, setIsGirlChart] = useState(true);
  const [chartIdols, setChartIdols] = useState([]);

  const handleGender = (e) => {
    if (e.target.name === 'mail-btn') {
      handleLoadData('male', 10);
      setIsGirlChart(false);
    } else {
      handleLoadData('female', 10);
      setIsGirlChart(true);
    }
  };

  const handleLoadData = async (gender, pageSize) => {
    const { idols } = await getCharts(gender, pageSize);
    setChartIdols(idols);
  };

  useEffect(() => {
    handleLoadData('female', 10);
  }, []);

  return (
    <div className={styles['montyly-chart']}>
      <div className={styles['header']}>
        <h1>이달의 차트</h1>
        <Button className={styles['vote-btn']}>
          <img src={chartImg} alt='그래프 이미지' />
          <p>차트 투표하기</p>
        </Button>
      </div>
      <div className={styles['gender-tab']}>
        <Button
          name='femail-btn'
          className={`${styles['girl-btn']} ${isGirlChart && styles['focus']}`}
          onClick={handleGender}
        >
          이달의 여자 아이돌
        </Button>
        <Button
          name='mail-btn'
          className={`${styles['boy-btn']} ${!isGirlChart && styles['focus']}`}
          onClick={handleGender}
        >
          이달의 남자 아이돌
        </Button>
      </div>
      <ChartList items={chartIdols} />
      <Button className={styles['more-btn']}>더 보기</Button>
    </div>
  );
}

export default MonthlyChart;
