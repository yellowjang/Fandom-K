import ChartList from '../ChartList';
import styles from './styles.module.scss';
import Button from '@/components/Button';
import VoteModal from '../../../List/components/Modal/VoteModal';
import useAsyncWithRetry from '@/hooks/useAsyncWithRetry';
import { useEffect, useState, useRef } from 'react';
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

  const [isGirlChart, setIsGirlChart] = useState(true);
  const [chartIdolsList, setChartIdolsList] = useState([]);
  const [currentGender, setCurrentGender] = useState('female');
  const [cursor, setCusor] = useState(null);
  const endOfListRef = useRef(null);

  const handleGender = (e) => {
    setChartIdolsList([]);
    setCusor(null);
    if (e.target.name === 'male-btn') {
      setIsGirlChart(false);
      handleLoadData(GENDER.M, CHART_IDOL_NUM, null, []);
    } else {
      setIsGirlChart(true);
      handleLoadData(GENDER.F, CHART_IDOL_NUM, null, []);
    }
    const selectedGender = e.target.name === 'male-btn' ? GENDER.M : GENDER.F;
    setCurrentGender(selectedGender);
  };

  const handleMore = () => {
    const gender = isGirlChart ? GENDER.F : GENDER.M;
    handleLoadData(gender, CHART_IDOL_NUM, cursor, chartIdolsList);
  };

  const handleLoadData = async (gender, pageSize, cursor, chartIdolsList) => {
    const { idols, nextCursor } = await handleLoadChart(
      gender,
      pageSize,
      cursor
    );
    corretRank(idols, chartIdolsList);
    setChartIdolsList((prev) => [...prev, idols]);
    setCusor(() => nextCursor);
    checkHasNextCusor(gender, pageSize, nextCursor);
  };

  const corretRank = (currentIdols, chartIdolsList) => {
    if (chartIdolsList.length !== 0) {
      if (
        chartIdolsList.at(-1).at(-1).totalVotes === currentIdols[0].totalVotes
      ) {
        currentIdols.forEach((element) => {
          element.rank += chartIdolsList.at(-1).at(-1).rank - 1;
        });
      } else {
        currentIdols.forEach((element) => {
          element.rank += chartIdolsList.at(-1).at(-1).rank;
        });
      }
    }
  };

  const checkHasNextCusor = async (gender, pageSize, cursor) => {
    const { nextCursor } = await handleLoadChart(gender, pageSize, cursor);
    nextCursor ?? setCusor(nextCursor);
  };

  useEffect(() => {
    handleLoadData(GENDER.F, CHART_IDOL_NUM, null, chartIdolsList);
  }, []);

  useEffect(() => {
    if (!isLoadingChart && endOfListRef.current) {
      endOfListRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [isLoadingChart]);

  return (
    <div className={styles['montyly-chart']}>
      <div className={styles['header']}>
        <h1>이달의 차트</h1>
        <VoteModal items={chartIdolsList.flat()} gender={currentGender} />
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
      <div>
        {chartIdolsList.map((element, index) => (
          <ChartList
            items={element}
            key={index}
            isMiddle={index ? true : false}
          />
        ))}
      </div>
      {isLoadingChart && <Loading />}
      {loadChartError && <div>{loadChartError.message}</div>}
      <div ref={endOfListRef} />
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
