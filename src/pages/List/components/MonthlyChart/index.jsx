import ChartList from '../ChartList';
import styles from './styles.module.scss';
import Button from '@/components/Button';
import VoteModal from '../../../List/components/Modal/VoteModal';
import chartImg from '@/assets/icons/ic_chart.svg';
import useAsync from '@/hooks/useAsync';
import { useEffect, useState } from 'react';
import { getCharts } from '@/services/api/charts';
import Loading from '@/components/Loading';

function MonthlyChart() {
  const [isLoadingChart, isErrorLoadChart, handleLoadChart] =
    useAsync(getCharts);
  const [isGirlChart, setIsGirlChart] = useState(true);
  const [chartIdols, setChartIdols] = useState([]);
  const [currentGender, setCurrentGender] = useState('female');

  const handleGender = (e) => {
    const selectedGender = e.target.name === 'male-btn' ? 'male' : 'female';
    handleLoadData(selectedGender, 10);
    setIsGirlChart(selectedGender === 'female');
    setCurrentGender(selectedGender);
  };

  const handleLoadData = async (gender, pageSize) => {
    const { idols } = await handleLoadChart(gender, pageSize);
    setChartIdols(idols);
  };

  useEffect(() => {
    handleLoadData('female', 10);
  }, []);

  return (
    <div className={styles['montyly-chart']}>
      <div className={styles['header']}>
        <h1>이달의 차트</h1>
        {isLoadingChart ? (
          <Loading />
        ) : (
          <VoteModal items={chartIdols} gender={currentGender} />
        )}
      </div>
      <div className={styles['gender-tab']}>
        <Button
          name='female-btn'
          className={`${styles['girl-btn']} ${isGirlChart && styles['focus']}`}
          onClick={handleGender}
        >
          이달의 여자 아이돌
        </Button>
        <Button
          name='male-btn'
          className={`${styles['boy-btn']} ${!isGirlChart && styles['focus']}`}
          onClick={handleGender}
        >
          이달의 남자 아이돌
        </Button>
      </div>
      {isLoadingChart ? <Loading /> : <ChartList items={chartIdols} />}
      {isErrorLoadChart && <div>{isErrorLoadChart.message}</div>}
      <Button className={styles['more-btn']}>더 보기</Button>
    </div>
  );
}

export default MonthlyChart;
