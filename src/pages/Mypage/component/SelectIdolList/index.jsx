// import { useState, useRef, useEffect } from 'react';
// import IdolCard from '../IdolCard';
// import styles from './styles.module.scss';
// import arrowLeft from '@/assets/icons/ic_arrow_left.png';
// import arrowRight from '@/assets/icons/ic_arrow_right.png';
// import plusIcon from '@/assets/icons/Ic_plus.svg';

// function SelectIdolList({ idols, favoriteIdols, setFavoriteIdols }) {
//   const containerRef = useRef(null);
//   const [selectedIdols, setSelectedIdols] = useState([]);
//   const [availableIdols, setAvailableIdols] = useState([]);
//   const [showLeftArrow, setShowLeftArrow] = useState(false);
//   const [showRightArrow, setShowRightArrow] = useState(false);

//   const updateArrowVisibility = () => {
//     const container = containerRef.current;
//     if (container) {
//       const containerWidth = container.clientWidth;
//       const scrollLeft = container.scrollLeft;
//       const scrollWidth = container.scrollWidth;
//       const isScrollable = scrollWidth > containerWidth;

//       setShowLeftArrow(scrollLeft > 0);
//       setShowRightArrow(
//         isScrollable && scrollLeft + containerWidth < scrollWidth
//       );
//     }
//   };

//   useEffect(() => {
//     const available = idols.filter(
//       (idol) => !favoriteIdols.some((favIdol) => favIdol.id === idol.id)
//     );
//     setAvailableIdols(available);
//   }, [idols, favoriteIdols]);

//   useEffect(() => {
//     // 초기 로드 시 화살표 표시 여부 설정
//     updateArrowVisibility();
//   }, []);

//   useEffect(() => {
//     // 스크롤 위치가 변경될 때마다 화살표 표시 여부 업데이트
//     const container = containerRef.current;
//     if (container) {
//       container.addEventListener('scroll', updateArrowVisibility);
//     }
//     return () => {
//       if (container) {
//         container.removeEventListener('scroll', updateArrowVisibility);
//       }
//     };
//   }, [availableIdols]);

//   const handleSelect = (idol, isSelected) => {
//     if (isSelected) {
//       setSelectedIdols((prev) => [...prev, idol]);
//     } else {
//       setSelectedIdols((prev) => prev.filter((item) => item.id !== idol.id));
//     }
//   };

//   const handleAddToLocalStorage = () => {
//     const storedIdols = JSON.parse(localStorage.getItem('selectedIdols')) || [];
//     const updatedIdols = [...storedIdols, ...selectedIdols];
//     localStorage.setItem('selectedIdols', JSON.stringify(updatedIdols));
//     setFavoriteIdols(updatedIdols);

//     const remainingIdols = availableIdols.filter(
//       (idol) => !selectedIdols.includes(idol)
//     );
//     setAvailableIdols(remainingIdols);

//     setSelectedIdols([]);
//   };

//   const scrollLeft = () => {
//     const container = containerRef.current;
//     if (container) {
//       container.scrollBy({ left: -container.clientWidth, behavior: 'smooth' });
//     }
//   };

//   const scrollRight = () => {
//     const container = containerRef.current;
//     if (container) {
//       container.scrollBy({ left: container.clientWidth, behavior: 'smooth' });
//     }
//   };

//   return (
//     <div className={styles['select-idol']}>
//       <div className={styles['select-idol-title']}>
//         <h3>관심있는 아이돌을 추가해보세요.</h3>
//       </div>
//       <div className={styles['select-idol-wrapper']}>
//         {showLeftArrow && (
//           <button className={styles['arrow-btn']} onClick={scrollLeft}>
//             <img
//               className={styles['arrow-img']}
//               src={arrowLeft}
//               alt='왼쪽 화살표'
//               draggable='false'
//             />
//           </button>
//         )}
//         <div className={styles['idol-list-container']} ref={containerRef}>
//           {availableIdols.map((item) => (
//             <IdolCard key={item.id} item={item} onSelect={handleSelect} />
//           ))}
//         </div>
//         {showRightArrow && (
//           <button className={styles['arrow-btn']} onClick={scrollRight}>
//             <img
//               className={styles['arrow-img']}
//               src={arrowRight}
//               alt='오른쪽 화살표'
//               draggable='false'
//             />
//           </button>
//         )}
//       </div>
//       <div className={styles['add-btn']}>
//         <button
//           className={styles['add-btn-text']}
//           onClick={handleAddToLocalStorage}
//         >
//           <img
//             className={styles['plus-icon']}
//             src={plusIcon}
//             alt='플러스 아이콘'
//           />
//           <p>추가하기</p>
//         </button>
//       </div>
//     </div>
//   );
// }

// export default SelectIdolList;


import { useState, useRef, useEffect } from 'react';
import IdolCard from '../IdolCard';
import styles from './styles.module.scss';
import arrowLeft from '@/assets/icons/ic_arrow_left.png';
import arrowRight from '@/assets/icons/ic_arrow_right.png';
import plusIcon from '@/assets/icons/Ic_plus.svg';

function SelectIdolList({ idols, favoriteIdols, setFavoriteIdols }) {
  const containerRef = useRef(null);
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
      setShowRightArrow(isScrollable && scrollLeft + containerWidth < scrollWidth);
    }
  };

  useEffect(() => {
    const available = idols.filter(
      (idol) => !favoriteIdols.some((favIdol) => favIdol.id === idol.id)
    );
    setAvailableIdols(available);
  }, [idols, favoriteIdols]);

  useEffect(() => {
    // 스크롤 위치가 변경될 때마다 화살표 표시 여부 업데이트
    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', updateArrowVisibility);
      // Clean up the event listener on unmount
      return () => {
        container.removeEventListener('scroll', updateArrowVisibility);
      };
    }
  }, [availableIdols]);

  useEffect(() => {
    // 초기 로드 시 화살표 표시 여부 설정
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
        <h3>관심있는 아이돌을 추가해보세요.</h3>
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
        <div className={styles['idol-list-container']} ref={containerRef}>
          {availableIdols.map((item) => (
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
