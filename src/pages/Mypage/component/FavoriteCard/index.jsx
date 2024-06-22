import { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import IdolCircleImage from '../../../../components/IdolCircleImage';
import deleteIcon from '@/assets/icons/ic_delete_black.png';

function FavoriteCard({ item, onSelect }) {

  const [size, setSize] = useState(window.innerWidth <= 767 ? 80 : 100);

  const handleToggleSelect = () => {
    onSelect(item, false);
  };


  const updateSize = () => {
    if (window.innerWidth <= 767) {
      setSize(70);
    } else {
      setSize(100);
    }
  };

  useEffect(() => {
    updateSize(); // Initial call to set size based on current window size
    window.addEventListener('resize', updateSize);
    return () => {
      window.removeEventListener('resize', updateSize);
    };
  }, []);

  return (
    <div className={styles['favorite-card']}>
      <div className={styles['idol-circle-cantainer']}>
        <IdolCircleImage
          imgUrl={item.profilePicture}
          idolName={item.name}
          size={size}
          outlineWidth='2px'
        />
        <button
          className={styles['delete-icon-container']}
          onClick={handleToggleSelect}
        >
          <img
            src={deleteIcon}
            className={styles['delete-icon-img']}
            alt='삭제버튼'
          />
        </button>
      </div>
      <div className={styles['favorite-card-info-container']}>
        <h3 className={styles['name']}>{item.name}</h3>
        <h3 className={styles['group']}>{item.group}</h3>
      </div>
    </div>
  );
}

export default FavoriteCard;
