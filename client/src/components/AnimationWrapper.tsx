import React, { useEffect, useState, useRef } from 'react';

interface AnimationWrapperProps {
  children: React.ReactNode;
  delay?: number;
}

export const AnimationWrapper: React.FC<AnimationWrapperProps> = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`transition-all duration-1000 ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8'
      }`}
    >
      {children}
    </div>
  );
};

interface CounterProps {
  target: number;
  duration?: number;
  className?: string;
}

export const Counter: React.FC<CounterProps> = ({ target, duration = 2000, className }) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef<HTMLSpanElement>(null);
  const animationRef = useRef<number>();
  const isFirstRender = useRef(true);

  const animateCount = () => {
    let start = 0;
    const increment = target / (duration / 16); // 60fps

    const updateCount = () => {
      start += increment;
      setCount(Math.ceil(start));
      
      if (start < target) {
        animationRef.current = requestAnimationFrame(updateCount);
      } else {
        setCount(target);
      }
    };

    // Cancel any existing animation
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }

    setCount(0); // Reset to 0 before starting new animation
    animationRef.current = requestAnimationFrame(updateCount);
  };

  useEffect(() => {
    // Don't animate on first render (let AnimationWrapper handle initial animation)
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCount();
          }
        });
      },
      {
        threshold: 0.4, // Trigger when 10% of the element is visible
      }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [target, duration]);

  return (
    <span ref={counterRef} className={className}>
      {count}+
    </span>
  );
};