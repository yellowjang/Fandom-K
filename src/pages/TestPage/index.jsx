import styles from './styles.module.scss';
import { useEffect } from 'react';
import { postVotes } from '@/services/api/votes';
import useAsync from '@/hooks/useAsync';

function TestPage() {
  const [isLoadingVote, isErrorVote, asyncVote] = useAsync(postVotes);

  const handleVote = async (idolId) => {
    const result = await asyncVote(idolId);
    console.log(result);
  };

  useEffect(() => {
    // //vote
    handleVote(686);
  }, []);

  return (
    <div className={styles['test-page']}>
      <header />
      <main>{/* <MonthlyChart /> */}</main>
      <footer />
    </div>
  );
}

export default TestPage;
