import styles from './styles.module.scss';
import IdolCircleImage from '@/components/IdolCircleImage';

function ChartListItem({ item, onSelectIdol }) {
  return (
    <>
      <label className={styles['list']}>
        <div className={styles['list-content']}>
          <IdolCircleImage imgUrl={item.profilePicture} idolName={item.name} />
          <h1>{item.rank}</h1>
          <div className={styles['text-content']}>
            <h1>{item.name}</h1>
            <h2>{Number(item.totalVotes).toLocaleString('ko-KR')}표</h2>
          </div>
        </div>
        <input
          type='radio'
          name='idol'
          onChange={() => onSelectIdol(item.id)}
        />
      </label>
    </>
  );
}

function ChartList({ items, onSelectIdol }) {
  return (
    <div className={styles['chart-item']}>
      <div className={styles['list-container']}>
        {items?.map((item) => {
          return <ChartListItem key={item.id} item={item} onSelectIdol={onSelectIdol} />;
        })}
      </div>
    </div>
  );
}

export default ChartList;
