import { useCallback } from 'react';
import useAsync from './useAsync';

function useAsyncWithRetry(asyncFunction, retries = 5) {
  const [pending, error, wrappedFunction] = useAsync(asyncFunction);

  const retryingFunction = useCallback(
    async (...args) => {
      let attempt = 0;
      while (attempt <= retries) {
        try {
          return await wrappedFunction(...args);
        } catch (error) {
          if (attempt === retries) {
            throw error;
          }
          attempt += 1;
        }
      }
    },
    [wrappedFunction, retries]
  );

  return [pending, error, retryingFunction];
}

export default useAsyncWithRetry;
