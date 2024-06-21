import { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import FavoriteIdol from './component/FavoriteIdol';
import SelectIdolList from './component/SelectIdolList';
import { getIdols } from '@/services/api/idols';
import useAsyncWithRetry from '@/hooks/useAsyncWithRetry';

function Mypage() {
  const [idols, setIdols] = useState([]);
  const [favoriteIdols, setFavoriteIdols] = useState([]);

  const [isLoadingIdols, loadIdolsError, handleLoadIdols] =
    useAsyncWithRetry(getIdols);

  useEffect(() => {
    const fetchData = async () => {
      const { list } = await handleLoadIdols({ pageSize: 100 });
      setIdols(list);
    };

    const storedIdols = JSON.parse(localStorage.getItem('selectedIdols')) || [];
    setFavoriteIdols(storedIdols);

    fetchData();
  }, []);

  const handleSelect = (idol, isSelected) => {
    const updatedIdols = isSelected
      ? [...favoriteIdols, idol]
      : favoriteIdols.filter((item) => item.id !== idol.id);
    setFavoriteIdols(updatedIdols);
    localStorage.setItem('selectedIdols', JSON.stringify(updatedIdols));
  };

  return (
    <div className={styles['mypage']}>
      <div className={styles['mypage-wrapper']}>
        <FavoriteIdol
          favoriteIdols={favoriteIdols}
          setFavoriteIdols={setFavoriteIdols}
          onSelect={handleSelect}
        />
        <SelectIdolList
          idols={idols}
          favoriteIdols={favoriteIdols}
          onSelect={handleSelect}
        />
      </div>
    </div>
  );
}

export default Mypage;
