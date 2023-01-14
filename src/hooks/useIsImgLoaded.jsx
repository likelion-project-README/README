import { useEffect, useState } from 'react';
import useIsComponentInViewport from './useIsComponentInViewport';

const useIsImgLoaded = () => {
  const [elementRef, isVisible] = useIsComponentInViewport({
    rootMargin: '500px',
  });

  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    if (isVisible) {
      setIsLoaded(true);
    }
  }, [isVisible]);

  return [elementRef, isLoaded];
};

export default useIsImgLoaded;
