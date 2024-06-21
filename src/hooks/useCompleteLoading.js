import { useRef, useEffect } from 'react';

function useCompleteLoading(isLoading) {
  const isCompleteLoading = useRef(false);

  useEffect(() => {
    if (!isCompleteLoading.current) {
      isCompleteLoading.current = true;
    }
  }, [isLoading]);

  const isRenderLoading = () => {
    return isLoading && !isCompleteLoading.current;
  };

  return isRenderLoading;
}

export default useCompleteLoading;
