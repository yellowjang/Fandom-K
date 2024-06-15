import IdolCard from '../IdolCard';
import styles from './styles.module.scss';
import arrowLeft from '@/assets/buttons/pagination_arrow_left.png';
import arrowRight from '@/assets/buttons/pagination_arrow_right.png';

function SelectIdolList({ idols }) {
  return (
    <div className={styles['select-idol']}>
      <div className={styles['select-idol-title']}>
        <h3>관심있는 아이돌을 추가해보세요.</h3>
      </div>

      <div className={styles['select-idol-wrapper']}>
        <button className={styles['arrow-btn']}>
          <img
            className={styles['arrow-img']}
            src={arrowLeft}
            alt='왼쪽 화살표'
          />  
        </button>
        <div className={styles['idol-list-container']}>
          {idols?.map((item) => {
            return <IdolCard key={item.id} item={item} />;
          })}
        </div>
        <button className={styles['arrow-btn']}>
          <img
            className={styles['arrow-img']}
            src={arrowRight}
            alt='오른쪽 화살표'
          />
        </button>
      </div>
      <div className={styles['add-btn']}>
        <p className={styles['plus-text']}>+</p>
        <button className={styles['add-btn-text']}>추가하기</button>
      </div>
    </div>
  );
}

export default SelectIdolList;



