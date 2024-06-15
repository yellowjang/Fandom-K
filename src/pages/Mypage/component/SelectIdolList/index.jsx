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

      <div className={styles['idol-list-container']}>
        {items?.map((item) => {
          return <IdolCard key={item.id} item={item} />;
        })}
      </div>
      <div className={styles['add-btn']}>
        <p className={styles['plus-text']}>+</p>
        <button className={styles['add-btn-text']}>추가하기</button>
      </div>
    </div>
  );
}

export default SelectIdolList;
