import IdolCard from '../IdolCard';
import idolItem from './mock.json';
import styles from './styles.module.scss';

function SelectIdolList({ items }) {
  items = idolItem;
  return (
    <div className={styles['selcet-idol']}>
      <div className={styles['seltct-idol-title']}>
        <h3>관심있는 아이돌을 추가해보세요.</h3>
      </div>

      <div className={styles['list-container']}>
        {items?.map((item) => {
          return <IdolCard key={item.id} item={item} />;
        })}
      </div>

      <div>
        <button></button>
      </div>
    </div>
  );
}

export default SelectIdolList;
