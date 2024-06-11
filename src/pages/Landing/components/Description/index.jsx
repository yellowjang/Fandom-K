import styles from './styles.module.scss';
import homeImage1 from '../../../../assets/images/landing/home-1.png';
import homeImage2 from '../../../../assets/images/landing/home-2.png';
import homeImage3 from '../../../../assets/images/landing/home-3.png';

function Description() {
  return (
    <>
      <section className={`${styles.container} ${styles.background_image_1}`}>
        <div className={styles.wrapper}>
          <div className={styles.description}>
            <span>후원하기</span>
            <p>
              좋아하는 아이돌에게
              <br />
              쉽게 조공해보세요
            </p>
            <img src={homeImage1} alt='모바일 캡처' width={320} height={693} />
          </div>
        </div>
      </section>
      <section className={`${styles.container} ${styles.background_image_2}`}>
        <div className={styles.wrapper}>
          <div className={styles.description}>
            <span>후원하기</span>
            <p>
              좋아하는 아이돌에게
              <br />
              쉽게 조공해보세요
            </p>
            <img src={homeImage2} alt='모바일 캡처' width={320} height={693} />
          </div>
        </div>
      </section>
      <section className={`${styles.container} ${styles.background_image_3}`}>
        <div className={styles.wrapper}>
          <div className={styles.description}>
            <span>후원하기</span>
            <p>
              좋아하는 아이돌에게
              <br />
              쉽게 조공해보세요
            </p>
            <img src={homeImage3} alt='모바일 캡처' width={320} height={693} />
          </div>
        </div>
      </section>
    </>
  );
}

export default Description;
