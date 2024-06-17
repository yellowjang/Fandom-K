import styles from './styles.module.scss';
import testItem from './mock.json';
import IdolCircleImage from '@/components/IdolCircleImage';

function ChartListItem({ item, isLastLine }) {
  const bottomLineStyle = isLastLine ? undefined : styles['middle-item'];
  return (
    <div className={`${styles['chart-list-item']} ${bottomLineStyle}`}>
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
  // items = testItem;
  return (
    <div className={styles['chart-item']}>
      <div className={styles['list-container']}>
        {items?.map((item, index) => {
          return (
            <ChartListItem
              key={item.id}
              item={item}
              isLastLine={index >= items.length - 2 ? true : false}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ChartList;
