import{ useState } from 'react';
import IdolCard from '../IdolCard';
import styles from './styles.module.scss';
import arrowLeft from '@/assets/icons/ic_arrow_left.png';
import arrowRight from '@/assets/icons/ic_arrow_right.png';

function SelectIdolList({ idols}) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const SLIDE_COUNT = 16;

  const nextSlide = () => {
    setCurrentSlideIndex(
      (prevIndex) => (prevIndex + 16) % (idols.length - SLIDE_COUNT + 1)
    );
  };

  const prevSlide = () => {
    setCurrentSlideIndex(
      (prevIndex) =>
        (prevIndex - 16 + (idols.length - SLIDE_COUNT + 1)) %
        (idols.length - SLIDE_COUNT + 1)
    );
  };


  

  const currentIdos = idols.slice(
    currentSlideIndex,
    currentSlideIndex + SLIDE_COUNT
  );

  return (
    <div className={styles['select-idol']}>
      <div className={styles['select-idol-title']}>
        <h3>관심있는 아이돌을 추가해보세요.</h3>
      </div>

      <div className={styles['select-idol-wrapper']}>
        <button className={styles['arrow-btn']} onClick={prevSlide}>
          <img
            className={styles['arrow-img']}
            src={arrowLeft}
            alt='왼쪽 화살표'
          />
        </button>
        <div className={styles['idol-list-container']}>
          {currentIdos?.map((item) => {
            return <IdolCard key={item.id} item={item} />;
          })}
        </div>
        <button className={styles['arrow-btn']} onClick={nextSlide}>
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
