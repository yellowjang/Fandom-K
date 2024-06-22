import { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import IdolCircleImage from '../../../../components/IdolCircleImage';

function IdolCard({ item, onSelect }) {
  const [isSelected, setIsSelected] = useState(false);
  const [size, setSize] = useState(window.innerWidth <= 767 ? 98 : 128);

  const handleToggleSelect = () => {
    setIsSelected(!isSelected);
    onSelect(item, !isSelected);
  };

  const updateSize = () => {
    if (window.innerWidth <= 767) {
      setSize(98);
    } else {
      setSize(128);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', updateSize);
    return () => {
      window.removeEventListener('resize', updateSize);
    };
  }, []);

  return (
    <div className={styles['idol-card']}>
      <button
        className={styles['idol-click-container']}
        onClick={handleToggleSelect}
      >
        <IdolCircleImage
          imgUrl={item.profilePicture}
          idolName={item.name}
          size={size}
          selected={isSelected}
          outlineWidth='2px'
        />
      </button>

      <div className={styles['idol-info-container']}>
        <h3 className={styles['name']}>{item.name}</h3>
        <h3 className={styles['group']}>{item.group}</h3>
      </div>
    </div>
  );
}

export default IdolCard;
