
import { useState, useEffect } from 'react';

interface UseCountUpProps {
  end: number;
  duration?: number;
  start?: number;
  startOnMount?: boolean;
}

export function useCountUp({ 
  end, 
  duration = 2000, 
  start = 0, 
  startOnMount = true 
}: UseCountUpProps) {
  const [count, setCount] = useState(start);
  const [isAnimating, setIsAnimating] = useState(false);

  const startAnimation = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    const increment = (end - start) / (duration / 16); // 60fps
    let current = start;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        // setIsAnimating(false);
        // clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);

    return () => clearInterval(timer);
  };

  useEffect(() => {
    if (startOnMount) {
      const timeout = setTimeout(startAnimation, 300);
      return () => clearTimeout(timeout);
    }
  }, [startOnMount]);

  return { count, startAnimation, isAnimating };
}
