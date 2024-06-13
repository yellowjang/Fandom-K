import styles from './styles.module.scss';
import Picture from '../../../../assets/images/asmrz_danaka.png'

function IdolCard() {
    return(
        <div className={styles['idol-card']}>
            <img src={Picture} className={styles['idol-card-img']} alt="아이돌사진" />
            <div className={styles['idol-info']}>
                <h3>이름</h3>
                <h3>그룹명</h3>
            </div>
        </div>
        
    
    )
}

export default IdolCard;