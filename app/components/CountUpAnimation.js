'use client';

import { useState, useEffect, useRef } from 'react';

export default function CountUpAnimation({ 
  end, 
  duration = 2000,
  prefix = '',
  suffix = '',
  easing = 'easeOutExpo',
  delay = 0,
  repeat = false // New prop to control re-animation
}) {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const animationRef = useRef(null);
  const observerRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  // Easing functions
  const easings = {
    linear: t => t,
    easeOutExpo: t => t === 1 ? 1 : 1 - Math.pow(2, -10 * t),
  };

  const formatCount = (count) => {
    return Number.isInteger(count) ? count : count.toFixed(1);
  };

  const startAnimation = () => {
    let startTime = null;

    const animateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const easedProgress = easings[easing](progress);
      setCount(easedProgress * end);

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animateCount);
      } else {
        setCount(end);
        if (repeat) setHasAnimated(false);
      }
    };

    animationRef.current = requestAnimationFrame(animateCount);
  };

  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (!hasAnimated || repeat) {
            setTimeout(() => {
              startAnimation();
              setHasAnimated(true);
            }, delay);
          }
        }
      });
    };

    observerRef.current = new IntersectionObserver(observerCallback, {
      threshold: 0.5,
    });

    if (elementRef.current) {
      observerRef.current.observe(elementRef.current);
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      if (observerRef.current && elementRef.current) {
        observerRef.current.unobserve(elementRef.current);
      }
    };
  }, [end, duration, easing, delay, repeat, hasAnimated]);

  return (
    <span ref={elementRef} className="relative inline-block">
      {prefix}{formatCount(count)}{suffix}
      <span
        className="absolute -inset-1 rounded-lg bg-blue-500 opacity-0 filter blur-sm animate-pulse-slow"
        style={{ animationDelay: `${delay}ms` }}
      ></span>
    </span>
  );
}