import ChartList from '../ChartList';
import styles from './styles.module.scss';
import Button from '@/components/Button';
import VoteModal from '../../../List/components/Modal/VoteModal';
import chartImg from '@/assets/icons/ic_chart.svg';
import useAsyncWithRetry from '@/hooks/useAsyncWithRetry';
import { useEffect, useState } from 'react';
import { getCharts } from '@/services/api/charts';
import Loading from '@/components/Loading';

const CHART_IDOL_NUM = 10;
const GENDER = {
  M: 'male',
  F: 'female',
};

function MonthlyChart() {
  const [isLoadingChart, loadChartError, handleLoadChart] =
    useAsyncWithRetry(getCharts);
  // const [isLoadingChart, loadChartError, handleLoadChart] = useAsync(getCharts);
  const [isGirlChart, setIsGirlChart] = useState(true);
  const [chartIdols, setChartIdols] = useState([]);
  const [currentGender, setCurrentGender] = useState('female');
  const [cursor, setCusor] = useState(null);

  const handleGender = (e) => {
    setChartIdols([]);
    const selectedGender = e.target.name === 'male-btn' ? 'male' : 'female';
    handleLoadData(selectedGender, CHART_IDOL_NUM);
    setIsGirlChart(selectedGender === 'female');
    setCurrentGender(selectedGender);
  };

  const handleMore = () => {
    const gender = isGirlChart ? GENDER.F : GENDER.M;
    handleLoadMore(gender, CHART_IDOL_NUM);
  };

  const handleLoadData = async (gender, pageSize) => {
    const { idols, nextCursor } = await handleLoadChart(gender, pageSize);
    setChartIdols(idols);
    setCusor(nextCursor);
  };

  const handleLoadMore = async (gender, pageSize) => {
    const { idols, nextCursor } = await handleLoadChart(
      gender,
      pageSize,
      cursor
    );
    setChartIdols((prev) => [...prev, ...idols]);
    setCusor(nextCursor);
  };

  useEffect(() => {
    handleLoadData(GENDER.F, CHART_IDOL_NUM);
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
      {loadChartError && <div>{loadChartError.message}</div>}
      <Button
        className={styles['more-btn']}
        onClick={handleMore}
        disabled={!cursor ? true : false}
      >
        더 보기
      </Button>
    </div>
  );
}

export default MonthlyChart;
