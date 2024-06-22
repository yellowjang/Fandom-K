import React, { useState } from 'react';
import styles from './styles.module.scss';
import IdolCircleImage from '@/components/IdolCircleImage';

function ChartListItem({ item, onSelectIdol, selectedIdolId }) {
  const isSelected = item.id === selectedIdolId;

  return (
    <>
      <label className={styles['list']}>
        <div className={styles['list-content']}>
          <IdolCircleImage
            imgUrl={item.profilePicture}
            idolName={item.name}
            selected={isSelected}
          />
          <h1>{item.rank}</h1>
          <div className={styles['text-content']}>
            <h1>{item.name}</h1>
            <h2>{Number(item.totalVotes).toLocaleString('ko-KR')}표</h2>
          </div>
        </div>
        <input
          type='radio'
          name='idol'
          onChange={() => onSelectIdol(item.id)}
          checked={isSelected}
        />
      </label>
    </>
  );
}

function ModalChart({ items, onSelectIdol }) {
  const [selectedIdolId, setSelectedIdolId] = useState(null);

  const handleSelectIdol = (id) => {
    setSelectedIdolId(id);
    if (onSelectIdol) {
      onSelectIdol(id);
    }
  };

  return (
    <div className={styles['chart-item']}>
      <div className={styles['list-container']}>
        {items?.map((item) => {
          return (
            <ChartListItem
              key={item.id}
              item={item}
              onSelectIdol={handleSelectIdol}
              selectedIdolId={selectedIdolId}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ModalChart;
