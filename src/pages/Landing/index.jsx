import { Link } from 'react-router-dom';
import styles from './styles.module.scss';
import logoImage from '../../assets/images/logo/logo.png';
import Description from './components/Description';
import AnimatedComponent from './components/AnimatedComponent';
import {
  mainAnimation,
  descriptionAnimation,
  logoAnimation,
  buttonAnimation,
} from '@/constants/animationSettings';

function Landing() {
  return (
    <div className={styles['container']}>
      <AnimatedComponent animation={mainAnimation}>
        <div className={styles['main']}>
          <div className={styles['description']}>
            <AnimatedComponent animation={descriptionAnimation}>
              <p>
                내가 좋아하는 아이돌을 <br />
                가장 <span>쉽게 덕질</span> 하는 방법
              </p>
            </AnimatedComponent>
            <Link to='/list'>
              <AnimatedComponent animation={logoAnimation}>
                <img src={logoImage} alt='팬덤 케이' width={509} height={97} />
              </AnimatedComponent>
            </Link>
            <AnimatedComponent animation={buttonAnimation}>
              <div className={styles['start-button']}>
                <Link to='/list'>
                  <button>지금 시작하기</button>
                </Link>
              </div>
            </AnimatedComponent>
          </div>
        </div>
      </AnimatedComponent>
      <Description />
    </div>
  );
}

export default Landing;
