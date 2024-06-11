import styles from './styles.module.scss';
import logoImage from '../../assets/images/logo/logo.png';
import Description from './components/Description';

function Landing() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.main}>
          <div className={styles.description}>
            <p>
              내가 좋아하는 아이돌을 <br />
              가장 <span>쉽게 덕질</span> 하는 방법
            </p>
            <img src={logoImage} alt='팬덤 케이' width={509} height={97} />
            <div className={styles.start_button}>
              <button>지금 시작하기</button>
            </div>
          </div>
        </div>
        <Description />
      </div>
    </div>
  );
}

export default Landing;
