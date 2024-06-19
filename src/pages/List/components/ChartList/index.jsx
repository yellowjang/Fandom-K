import styles from './styles.module.scss';
import IdolCircleImage from '@/components/IdolCircleImage';

function ChartListItem({ item }) {
  return (
    <div className={styles['chart-list-item']}>
      <div className={styles['info']}>
        <IdolCircleImage imgUrl={item.profilePicture} idolName={item.name} />
        <p className={styles['rank']}>{item.rank}</p>
        <h1 className={styles['name']}>{item.name}</h1>
      </div>
      <p className={styles['vote']}>
        {Number(item.totalVotes).toLocaleString('ko-KR')}표
      </p>
    </div>
  );
}

function ChartList({ items }) {
  return (
    <div className={styles['chart-item']}>
      <div className={styles['list-container']}>
        {items?.map((item) => {
          return <ChartListItem key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
}

export default ChartList;
