
import { useCountUp } from "@/hooks/useCountUp";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  className?: string;
}

export function AnimatedCounter({ end, suffix = "", className = "" }: AnimatedCounterProps) {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const { count, startAnimation } = useCountUp({
    end,
    duration: 2000,
    startOnMount: false,
  });

  useEffect(() => {
    if (inView) {
      startAnimation();
    }
  }, [inView, startAnimation]);

  return (
    <div ref={ref} className={className}>
      {count.toLocaleString()}{suffix}
    </div>
  );
}
