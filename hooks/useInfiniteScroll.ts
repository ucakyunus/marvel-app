import { useState, useEffect } from 'react';

const useInfiniteScroll = () => {
  const [bottom, setBottom] = useState<Boolean>(false);

  function handleScroll() {
    const isBottom = window.innerHeight + document.documentElement.scrollTop
      === document.documentElement.offsetHeight;
    setBottom(isBottom);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return bottom;
};

export default useInfiniteScroll;
