import styles from './styles.module.scss';
import React from 'react';
import IdolCircleImage from '@/components/IdolCircleImage';

function ChartListItem({ item, orderDelayTime, isMiddle }) {
  return (
    <div
      className={
        styles['chart-list-item'] +
        ' ' +
        (isMiddle ? styles['middle-item'] : undefined)
      }
      style={{ animationDelay: `${orderDelayTime * 0.1}s` }}
    >
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

const ChartList = React.memo(({ items, isMiddle }) => {
  const orderDelayArray = Array.from(new Array(items.length), (x, i) => i + 1);
  orderDelayArray.sort(() => Math.random() - 0.5);

  return (
    <div className={styles['chart-item']}>
      <div className={styles['list-container']}>
        {items?.map((item, index) => {
          return (
            <ChartListItem
              key={item.id}
              item={item}
              orderDelayTime={orderDelayArray[index]}
              isMiddle={isMiddle}
            />
          );
        })}
      </div>
    </div>
  );
});

ChartList.displayName = 'ChartList';

export default ChartList;
