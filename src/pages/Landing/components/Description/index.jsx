import styles from './styles.module.scss';
import homeImage1 from '../../../../assets/images/landing/home-1.png';
import homeImage2 from '../../../../assets/images/landing/home-2.png';
import homeImage3 from '../../../../assets/images/landing/home-3.png';

function Description() {
  return (
    <>
      <section
        className={`${styles['container']} ${styles['background-image-1']}`}
      >
        <div className={styles['wrapper']}>
          <div className={styles['description']}>
            <div className={styles['description-title']}>
              <span>후원하기</span>
              <p>
                좋아하는 아이돌에게
                <br />
                쉽게 조공해보세요
              </p>
            </div>
            <img src={homeImage1} alt='모바일 캡처' width={320} height={693} />
          </div>
        </div>
      </section>
      <section
        className={`${styles['container']} ${styles['background-image-2']}`}
      >
        <div className={styles['wrapper']}>
          <div className={styles['description']}>
            <div className={`${styles['description-title']} ${styles['even']}`}>
              <span>이달의 아티스트</span>
              <p>
                내 아티스트에게 1등의
                <br />
                영예를 선물하세요
              </p>
            </div>
            <img src={homeImage2} alt='모바일 캡처' width={320} height={693} />
          </div>
        </div>
      </section>
      <section
        className={`${styles['container']} ${styles['background-image-3']}`}
      >
        <div className={styles['wrapper']}>
          <div className={styles['description']}>
            <div className={styles['description-title']}>
              <span>나만의 아티스트</span>
              <p>
                좋아하는 아티스트들의
                <br />
                소식을 모아보세요
              </p>
            </div>
            <img src={homeImage3} alt='모바일 캡처' width={320} height={693} />
          </div>
        </div>
      </section>
    </>
  );
}

export default Description;
