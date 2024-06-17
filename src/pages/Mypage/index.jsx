import { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import FavoriteIdol from './component/FavoriteIdol';
import SelectIdolList from './component/SelectIdolList';
import { getIdols } from '@/services/api/idols';

function Mypage() {
  const [idols, setIdols] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { list } = await getIdols({ pageSize: 100 });
      setIdols(list);
    };

    fetchData();
  }, []);

  return (
    <div className={styles['mypage']}>
      <div className={styles['mypage-wrapper']}>
        <FavoriteIdol />
        <SelectIdolList ket={idols.id} idols={idols} />
      </div>
    </div>
  );
}

export default Mypage;

