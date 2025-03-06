import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 50);
  }, [location]); 
  return null;
};

export default ScrollToTop;
