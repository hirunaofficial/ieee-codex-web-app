'use client'

import { useState, useEffect, useRef } from 'react';

export default function CountUpAnimation({ 
  end, 
  duration = 2000,
  prefix = '',
  suffix = '',
  easing = 'easeOutExpo',
  delay = 0
}) {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const animationRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  // Easing functions
  const easings = {
    linear: t => t,
    easeInQuad: t => t * t,
    easeOutQuad: t => t * (2 - t),
    easeInOutQuad: t => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t,
    easeInCubic: t => t * t * t,
    easeOutCubic: t => (--t) * t * t + 1,
    easeInOutCubic: t => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1,
    easeOutExpo: t => t === 1 ? 1 : 1 - Math.pow(2, -10 * t),
    easeInOutExpo: t => t === 0 ? 0 : t === 1 ? 1 : t < 0.5 ? Math.pow(2, 10 * (t - 0.5)) / 2 : (2 - Math.pow(2, -10 * (t - 0.5))) / 2,
  };

  // Format the count for display
  const formatCount = (count) => {
    if (Number.isInteger(count)) {
      return count;
    }
    return count.toFixed(1);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          // Start animation after delay
          setTimeout(() => {
            setHasAnimated(true);
            
            let startTime;
            const animateCount = (timestamp) => {
              if (!startTime) startTime = timestamp;
              const elapsed = timestamp - startTime;
              const progress = Math.min(elapsed / duration, 1);
              
              // Apply easing function
              const easedProgress = easings[easing](progress);
              setCount(easedProgress * end);
              
              if (progress < 1) {
                animationRef.current = requestAnimationFrame(animateCount);
              } else {
                setCount(end); // Ensure we end at exactly the target value
              }
            };
            
            animationRef.current = requestAnimationFrame(animateCount);
          }, delay);
        }
      },
      { threshold: 0.1 }
    );

    // Only observe if the element reference exists
    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      // Cancel any ongoing animation frame
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      
      // Only unobserve if the element reference exists
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [end, duration, easing, delay, hasAnimated]);

  return (
    <span ref={elementRef} className="relative inline-block">
      {prefix}{formatCount(count)}{suffix}
      <span className="absolute -inset-1 rounded-lg bg-blue-500 opacity-0 filter blur-sm 
        animate-pulse-slow" style={{ animationDelay: `${delay}ms` }}></span>
    </span>
  );
}