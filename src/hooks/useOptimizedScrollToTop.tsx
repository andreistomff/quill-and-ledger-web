
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useOptimizedScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Use requestAnimationFrame for better performance
    const scrollToTop = () => {
      requestAnimationFrame(() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'instant' // Faster than 'smooth' for route changes
        });
      });
    };

    scrollToTop();
  }, [pathname]);
};

export default useOptimizedScrollToTop;
