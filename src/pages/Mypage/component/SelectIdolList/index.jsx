import { useState, useRef, useEffect } from 'react';
import IdolCard from '../IdolCard';
import styles from './styles.module.scss';
import arrowLeft from '@/assets/icons/ic_arrow_left.png';
import arrowRight from '@/assets/icons/ic_arrow_right.png';
import plusIcon from '@/assets/icons/Ic_plus.svg';
import { useDraggable } from 'react-use-draggable-scroll';
import IdolCardSkeleton from '../IdolCard/IdolCardSkeleton';

function SelectIdolList({ idols, favoriteIdols, setFavoriteIdols, isLoading }) {
  const containerRef = useRef(null);
  const { events } = useDraggable(containerRef);

  const [selectedIdols, setSelectedIdols] = useState([]);
  const [availableIdols, setAvailableIdols] = useState([]);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);

  const updateArrowVisibility = () => {
    const container = containerRef.current;
    if (container) {
      const containerWidth = container.clientWidth;
      const scrollLeft = container.scrollLeft;
      const scrollWidth = container.scrollWidth;
      const isScrollable = scrollWidth > containerWidth;

      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(
        isScrollable && scrollLeft + containerWidth < scrollWidth
      );
    }
  };

  useEffect(() => {
    const available = idols.filter(
      (idol) => !favoriteIdols.some((favIdol) => favIdol.id === idol.id)
    );
    setAvailableIdols(available);
  }, [idols, favoriteIdols]);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', updateArrowVisibility);
      return () => {
        container.removeEventListener('scroll', updateArrowVisibility);
      };
    }
  }, [availableIdols]);

  useEffect(() => {
    updateArrowVisibility();
  }, [availableIdols]);

  const handleSelect = (idol, isSelected) => {
    if (isSelected) {
      setSelectedIdols((prev) => [...prev, idol]);
    } else {
      setSelectedIdols((prev) => prev.filter((item) => item.id !== idol.id));
    }
  };

  const handleAddToLocalStorage = () => {
    const storedIdols = JSON.parse(localStorage.getItem('selectedIdols')) || [];
    const updatedIdols = [...storedIdols, ...selectedIdols];
    localStorage.setItem('selectedIdols', JSON.stringify(updatedIdols));
    setFavoriteIdols(updatedIdols);

    const remainingIdols = availableIdols.filter(
      (idol) => !selectedIdols.includes(idol)
    );
    setAvailableIdols(remainingIdols);

    setSelectedIdols([]);
  };

  const scrollLeft = () => {
    const container = containerRef.current;
    if (container) {
      container.scrollBy({ left: -container.clientWidth, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    const container = containerRef.current;
    if (container) {
      container.scrollBy({ left: container.clientWidth, behavior: 'smooth' });
    }
  };

  return (
    <div className={styles['select-idol']}>
      <div className={styles['select-idol-title']}>
        <h3>관심 있는 아이돌을 추가해보세요.</h3>
      </div>
      <div className={styles['select-idol-wrapper']}>
        <div className={styles['left-arrow-box']}>
          {showLeftArrow && (
            <button className={styles['left-arrow-btn']} onClick={scrollLeft}>
              <img
                className={styles['arrow-img']}
                src={arrowLeft}
                alt='왼쪽 화살표'
                draggable='false'
              />
            </button>
          )}
        </div>
        <div
          className={styles['idol-list-container']}
          {...events}
          ref={containerRef}
        >
          {isLoading
            ? Array.from({ length: 16 }).map((_, index) => (
                <IdolCardSkeleton key={index} />
              ))
            : availableIdols.map((item) => (
                <IdolCard key={item.id} item={item} onSelect={handleSelect} />
              ))}
        </div>
        <div className={styles['right-arrow-box']}>
          {showRightArrow && (
            <button className={styles['right-arrow-btn']} onClick={scrollRight}>
              <img
                className={styles['arrow-img']}
                src={arrowRight}
                alt='오른쪽 화살표'
                draggable='false'
              />
            </button>
          )}
        </div>
      </div>
      <div className={styles['add-btn']}>
        <button
          className={styles['add-btn-text']}
          onClick={handleAddToLocalStorage}
        >
          <img
            className={styles['plus-icon']}
            src={plusIcon}
            alt='플러스 아이콘'
          />
          <p>추가하기</p>
        </button>
      </div>
    </div>
  );
}

export default SelectIdolList;
