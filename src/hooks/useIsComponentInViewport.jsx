import { useEffect, useRef, useState } from 'react';

const useIsComponentInViewport = (options) => {
  const elementRef = useRef();
  const [isVisible, setIsVisible] = useState(false);

  const callback = (entries) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };

  useEffect(() => {
    const io = new IntersectionObserver(callback, options);
    if (elementRef.current) {
      io.observe(elementRef.current);
    }
    return () => {
      io.disconnect();
    };
  }, [elementRef, options]);

  return [elementRef, isVisible];
};

export default useIsComponentInViewport;
