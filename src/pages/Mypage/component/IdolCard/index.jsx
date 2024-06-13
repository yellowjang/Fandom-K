import styles from './styles.module.scss';
import Picture from '../../../../assets/images/asmrz_danaka.png'


function IdolCard({item}) {
    return(
        <div className={styles['idol-card']}>
            <div className={styles['idol-image-container']}>
            <img src={item.profilePicture} className={styles['idol-image']} alt="아이돌사진" />
            </div>
            <div className={styles['idol-info-container']}>
                <h3 className={styles['group']}>{item.group}</h3>
                <h3 className={styles['name']}>{item.name}</h3>
            </div>
        </div>
        
    
    )
}

export default IdolCard;