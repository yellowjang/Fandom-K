
import { useState } from 'react';
import styles from './styles.module.scss';
import IdolCircleImage from '../../../../components/IdolCircleImage';

function IdolCard({ item, onSelect }) {
  const [isSelected, setIsSelected] = useState(false);

  const handleToggleSelect = () => {
    setIsSelected(!isSelected);
    onSelect(item, !isSelected); 
  };

  return (
    <div className={styles['idol-card']}>
      <button className={styles['idol-click-container']} onClick={handleToggleSelect}>
        <IdolCircleImage
          imgUrl={item.profilePicture}
          idolName={item.name}
          size={128}
          selected={isSelected}
          outlineWidth='2px'
        />
      </button>

      <div className={styles['idol-info-container']}>
        <h3 className={styles['group']}>{item.group}</h3>
        <h3 className={styles['name']}>{item.name}</h3>
      </div>
    </div>
  );
}

export default IdolCard;
