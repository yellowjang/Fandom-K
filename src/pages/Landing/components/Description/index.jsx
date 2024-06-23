import styles from './styles.module.scss';
import homeImage1 from '@/assets/images/landing/home-1.png';
import homeImage2 from '@/assets/images/landing/home-2.png';
import homeImage3 from '@/assets/images/landing/home-3.png';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const sections = [
  {
    id: 1,
    title: '후원하기',
    description: ['좋아하는 아이돌에게', '쉽게 조공해보세요'],
    image: homeImage1,
    backgroundClass: 'background-image-1',
  },
  {
    id: 2,
    title: '이달의 아티스트',
    description: ['내 아티스트에게 1등의', '영예를 선물하세요'],
    image: homeImage2,
    backgroundClass: 'background-image-2',
    even: true,
  },
  {
    id: 3,
    title: '나만의 아티스트',
    description: ['좋아하는 아티스트들의', '소식을 모아보세요'],
    image: homeImage3,
    backgroundClass: 'background-image-3',
  },
];

function Description() {
  return (
    <>
      {sections.map((section) => (
        <Section key={section.id} section={section} />
      ))}
    </>
  );
}

function Section({ section }) {
  const [hasAnimated, setHasAnimated] = useState(false);

  return (
    <motion.section
      className={`${styles['container']} ${styles[section.backgroundClass]}`}
      initial={{ opacity: 0, y: 50 }}
      animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
      onViewportEnter={() => setHasAnimated(true)}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className={styles['background']}
        initial={{ opacity: 0 }}
        animate={hasAnimated ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
      >
        <div className={styles['wrapper']}>
          <div className={styles['description']}>
            <motion.div
              className={`${styles['description-title']} ${section.even ? styles['even'] : ''}`}
              initial={{ opacity: 0, x: -50 }}
              animate={hasAnimated ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <span>{section.title}</span>
              <p>
                {section.description.map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </p>
            </motion.div>
            <motion.img
              src={section.image}
              alt='모바일 캡처'
              width={320}
              height={693}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={hasAnimated ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
            />
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}

export default Description;
