// import styles from './styles.module.scss';
// import logoImage from '@/assets/images/logo/logo.png';
// import { useState, useEffect } from 'react';
// import FavoriteCard from '../FavoriteCard';

// function FavoriteIdol() {

//   const [favoriteIdols, setFavoriteIdols] = useState([]);

//   useEffect(() => {
//     const storedIdols = JSON.parse(localStorage.getItem('selectedIdols')) || [];
//     setFavoriteIdols(storedIdols);
//   }, []);

//   const handleSelect = (idol, isSelected) => {
//     const updatedIdols = isSelected
//       ? [...favoriteIdols, idol]
//       : favoriteIdols.filter(item => item.id !== idol.id);
//     setFavoriteIdols(updatedIdols);
//     localStorage.setItem('selectedIdols', JSON.stringify(updatedIdols));
//   };

//   return (
//     <div className={styles['favorite-idol']}>
//       <div className={styles['favorite-idol-title']}>
//         <h3>내가관심있는 아이돌</h3>
//       </div>

//       <div className={styles['favorite-card-container']}>
//       {favoriteIdols.map((item) => (
//         <FavoriteCard key={item.id} item={item} onSelect={handleSelect}/>
//       ))}
//       </div>
//       <div className={styles['favorite-add-info']}>
//       <img
//           src={logoImage}
//           className={styles['logo-image']}
//           alt='로고이미지'
//           width='120px'
//           height='23'
//         />
//         <h3>좋아하는 아이돌을 추가해주세요</h3>
//       </div>

//       <div className={styles['bottom-line']}></div>
//     </div>
//   );
// }

// export default FavoriteIdol;

import styles from './styles.module.scss';
import logoImage from '@/assets/images/logo/logo.png';
import FavoriteCard from '../FavoriteCard';


function FavoriteIdol({ favoriteIdols, onSelect }) {

  return (
    <div className={styles['favorite-idol']}>
      <div className={styles['favorite-idol-title']}>
        <h3>내가 관심있는 아이돌</h3>
      </div>

      <div className={styles['favorite-card-container']}>
        {favoriteIdols.map((item) => (
          <FavoriteCard key={item.id} item={item} onSelect={onSelect} />
        ))}
      </div>
      <div className={styles['favorite-add-info']}>
        <img
          src={logoImage}
          className={styles['logo-image']}
          alt='로고 이미지'
          width='120px'
          height='23'
        />
        <h3>좋아하는 아이돌을 추가해주세요</h3>
      </div>

      <div className={styles['bottom-line']}></div>
    </div>
  );
}

export default FavoriteIdol;
