'use client';

import { useEffect, useRef, useState } from 'react';

type AnimatedCounterProps = {
  value: number;
  className?: string;
  duration?: number;
};

const AnimatedCounter = ({ value, className, duration = 2000 }: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      if (start === end) return;

      const totalFrames = Math.round(duration / (1000 / 60));
      const increment = end / totalFrames;
      let currentFrame = 0;

      const timer = setInterval(() => {
        currentFrame++;
        start += increment;
        setCount(Math.min(start, end));
        if (currentFrame === totalFrames) {
          clearInterval(timer);
          setCount(end);
        }
      }, 1000 / 60);

      return () => clearInterval(timer);
    }
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className={className}>
      {Math.floor(count)}
    </span>
  );
};

export default AnimatedCounter;
