
import styles from './styles.module.scss';
import FavoriteIdol from './component/FavoriteIdol';
import SelectIdolList from './component/SelectIdolList';

function Mypage() {
    return(
        <div className={styles['mypage']}>
            {/* <Header /> */}
            <div className={styles['mypage-wrapper']}>
            <FavoriteIdol />
            <SelectIdolList />
            </div>
        </div>
    )
}

export default Mypage;
