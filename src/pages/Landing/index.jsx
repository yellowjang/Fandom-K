import { motion } from 'framer-motion';
import styles from './styles.module.scss';
import logoImage from '../../assets/images/logo/logo.png';
import Description from './components/Description';
import { Link } from 'react-router-dom';

function Landing() {
  return (
    <div className={styles['container']}>
      <motion.div
        className={styles['main']}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className={styles['description']}>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            내가 좋아하는 아이돌을 <br />
            가장 <span>쉽게 덕질</span> 하는 방법
          </motion.p>
          <Link to='/list'>
            <motion.img
              src={logoImage}
              alt='팬덤 케이'
              width={509}
              height={97}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
            />
          </Link>
          <motion.div
            className={styles['start-button']}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <Link to='/list'>
              <button>지금 시작하기</button>
            </Link>
          </motion.div>
        </div>
      </motion.div>
      <Description />
    </div>
  );
}

export default Landing;
