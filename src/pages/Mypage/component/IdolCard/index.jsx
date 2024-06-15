import styles from './styles.module.scss';
import IdolCircleImage from '../../../../components/IdolCircleImage';

function IdolCard({ item }) {
  return (
    <div className={styles['idol-card']}>
      {/* <div className={styles['idol-image-container']}>
        <img
          src={item.profilePicture}
          className={styles['idol-image']}
          alt='아이돌사진'
        />
      </div> */}
      <IdolCircleImage
        imgUrl={item.profilePicture}
        idolName={item.name}
        size={128}
      />

      <div className={styles['idol-info-container']}>
        <h3 className={styles['group']}>{item.group}</h3>
        <h3 className={styles['name']}>{item.name}</h3>
      </div>
    </div>
  );
}

export default IdolCard;
