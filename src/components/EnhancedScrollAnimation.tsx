'use client';

import { useEffect, useRef, useState } from 'react';

type AnimationType = 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'zoom-in' | 'zoom-out' | 'flip';

interface EnhancedScrollAnimationProps {
  children: React.ReactNode;
  className?: string;
  animation?: AnimationType;
  delay?: number; // delay in ms
  duration?: number; // duration in ms
  threshold?: number; // intersection threshold (0-1)
  once?: boolean; // animate only once or every time it enters viewport
}

export default function EnhancedScrollAnimation({
  children,
  className = '',
  animation = 'fade-up',
  delay = 0,
  duration = 700,
  threshold = 0.1,
  once = false // Default to false so it animates every time
}: EnhancedScrollAnimationProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Set visibility based on intersection
        setIsVisible(entry.isIntersecting);
        
        // If once is true and the element is intersecting, stop observing
        if (once && entry.isIntersecting) {
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: threshold,
        rootMargin: '0px'
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [once, threshold]);

  // Get animation classes based on animation type
  const getAnimationClasses = () => {
    if (!isMounted) return ''; // No animation classes during SSR
    
    const baseClasses = 'transition-all ease-out';
    
    if (!isVisible) {
      switch (animation) {
        case 'fade-up':
          return `${baseClasses} opacity-0 translate-y-10`;
        case 'fade-down':
          return `${baseClasses} opacity-0 -translate-y-10`;
        case 'fade-left':
          return `${baseClasses} opacity-0 translate-x-10`;
        case 'fade-right':
          return `${baseClasses} opacity-0 -translate-x-10`;
        case 'zoom-in':
          return `${baseClasses} opacity-0 scale-95`;
        case 'zoom-out':
          return `${baseClasses} opacity-0 scale-105`;
        case 'flip':
          return `${baseClasses} opacity-0 rotate-y-90`;
        default:
          return `${baseClasses} opacity-0`;
      }
    }
    
    return `${baseClasses} opacity-100 translate-y-0 translate-x-0 scale-100 rotate-y-0`;
  };

  const animationStyle = {
    transitionDelay: `${delay}ms`,
    transitionDuration: `${duration}ms`,
  };

  return (
    <div 
      ref={ref} 
      className={`${getAnimationClasses()} ${className}`}
      style={animationStyle}
    >
      {children}
    </div>
  );
}
