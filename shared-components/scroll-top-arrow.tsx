import { useState, useEffect, memo } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';

import styles from '../styles/ScrollTopArrow.module.css';

const ScrollTopArrow = () => {
  const [showScroll, setShowScroll] = useState<Boolean>(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return () => {
      window.removeEventListener('scroll', checkScrollTop);
    };
  });

  const scrollTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <FaArrowCircleUp
      className={styles.scrollTop}
      onClick={scrollTop}
      style={{ height: 40, display: showScroll ? 'flex' : 'none' }}
    />
  );
};

export default memo(ScrollTopArrow);
