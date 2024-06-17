import styles from './styles.module.scss';
import checkIcon from '@/assets/icons/ic_idol_check.png';

function IdolCircleImage({ imgUrl, idolName, size = 70, selected }) {
  //   return (

  //     <div className={styles['idol-circle-image']}>
  //       <div
  //         className={styles['image-container']}
  //         style={{ width: size, height: size }}
  //       >
  //         <img
  //           className={styles['image']}
  //           src={imgUrl}
  //           alt={`${idolName} 사진`}
  //         />
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <div className={styles['idol-circle-image']}>
      <div
        className={styles['image-container']}
        style={{ width: size, height: size }}
      >
        <img
          src={imgUrl}
          alt={idolName}
          className={styles['image']}
        />
        {selected && (
          <>
            <div className={styles['check-box']}></div>
            <div className={styles['check-icon-container']}>
              <img
                src={checkIcon}
                alt='체크 아이콘'
                className={styles['check-icon']}
              />
           </div>
          </>
        )}
      </div>
    </div>
  );
}

export default IdolCircleImage;
