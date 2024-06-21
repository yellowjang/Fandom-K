import React, { useEffect, useState } from 'react';
import useAsyncWithRetry from './useAsyncWithRetry';
import { getDonations } from '@/services/api/donations';

function Progressbar() {
  const [pending, error, retryingFunction] = useAsyncWithRetry(getDonations, 5);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await retryingFunction();
        const targetDonation = data.targetDonation;
        const receivedDonations = data.receivedDonations;
        setProgress((receivedDonations / targetDonation) * 100);
      } catch (err) {
        console.error('데이터 가져오기 실패:', err);
      }
    }

    fetchData();
  }, [retryingFunction]);

  if (pending) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <div style={{ width: '100%', backgroundColor: '#e0e0e0' }}>
        <div
          style={{
            width: `${progress}%`,
            backgroundColor: '#76c7c0',
            height: '24px',
          }}
        />
      </div>
      <p>{`Progress: ${progress.toFixed(2)}%`}</p>
    </div>
  );
}

export default Progressbar;
