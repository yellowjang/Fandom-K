
import { useState, useRef, useEffect } from 'react';
import IdolCard from '../IdolCard';
import styles from './styles.module.scss';
import arrowLeft from '@/assets/icons/ic_arrow_left.png';
import arrowRight from '@/assets/icons/ic_arrow_right.png';
import plusIcon from '@/assets/icons/Ic_plus.svg';

function SelectIdolList({ idols, favoriteIdols, setFavoriteIdols}) {
  // const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  // const SLIDE_COUNT = 16;
  const containerRef = useRef(null);
  const [selectedIdols, setSelectedIdols] = useState([]);
  const [availableIdols, setAvailableIdols] = useState([]);

  useEffect(() => {
    const available = idols.filter(idol => !favoriteIdols.some(favIdol => favIdol.id === idol.id));
    setAvailableIdols(available);
  }, [idols, favoriteIdols]);

  const handleSelect = (idol, isSelected) => {
    if (isSelected) {
      setSelectedIdols(prev => [...prev, idol]);
    } else {
      setSelectedIdols(prev => prev.filter(item => item.id !== idol.id));
    }
  };


  const handleAddToLocalStorage = () => {
    const storedIdols = JSON.parse(localStorage.getItem('selectedIdols')) || [];
    const updatedIdols = [...storedIdols, ...selectedIdols];
    localStorage.setItem('selectedIdols', JSON.stringify(updatedIdols));

    setFavoriteIdols(updatedIdols);

  
    const remainingIdols = availableIdols.filter(idol => !selectedIdols.includes(idol));
    setAvailableIdols(remainingIdols);
  
    setSelectedIdols([]);
  };

  const nextSlide = () => {
    // setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % Math.ceil(availableIdols.length / SLIDE_COUNT));
    containerRef.current.scrollLeft += containerRef.current.offsetWidth;
  };

  const prevSlide = () => {
    // setCurrentSlideIndex((prevIndex) => (prevIndex - 1 + Math.ceil(availableIdols.length / SLIDE_COUNT)) % Math.ceil(availableIdols.length / SLIDE_COUNT));
    containerRef.current.scrollLeft -= containerRef.current.offsetWidth;
  };

  return (
    <div className={styles['select-idol']}>
      <div className={styles['select-idol-title']}>
        <h3>관심있는 아이돌을 추가해보세요.</h3>
      </div>
      <div className={styles['select-idol-wrapper']}>
        <button className={styles['arrow-btn']} onClick={prevSlide}>
          <img className={styles['arrow-img']} src={arrowLeft} alt='왼쪽 화살표' draggable='false'/>
        </button>
        <div className={styles['idol-list-container']} ref={containerRef}>
          {availableIdols.map((item) => (
            <IdolCard key={item.id} item={item} onSelect={handleSelect} />
          ))}
        </div>
        <button className={styles['arrow-btn']} onClick={nextSlide}>
          <img className={styles['arrow-img']} src={arrowRight} alt='오른쪽 화살표'draggable='false' />
        </button>
      </div>
      <div className={styles['add-btn']}>

        <button className={styles['add-btn-text']} onClick={handleAddToLocalStorage}>
         <img className={styles['plus-icon']} src={plusIcon} alt='플러스 아이콘'/>
         <p>추가하기</p>
        </button>
        
      </div>
    </div>
  );
}

export default SelectIdolList;
