import { useState } from 'react';
import styles from './styles.module.scss';
import IdolCircleImage from '../../../../components/IdolCircleImage';
import deleteIcon from '@/assets/icons/ic_delete_black.png';

function FavoriteCard({ item, onSelect }) {
  const handleToggleSelect = () => {
    onSelect(item, false);
  };

  return (
    <div className={styles['favorite-card']}>
      <div className={styles['idol-circle-cantainer']}>
        <IdolCircleImage
          imgUrl={item.profilePicture}
          idolName={item.name}
          size={100}
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
