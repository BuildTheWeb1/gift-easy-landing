'use client';

import { useEffect, useRef, useState } from 'react';

interface ScrollAnimationProps {
  children: React.ReactNode;
  className?: string;
}

export default function ScrollAnimation({ children, className = '' }: ScrollAnimationProps) {
  const ref = useRef<HTMLDivElement>(null);
  // Track if we're on the client side for hydration safety
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Mark as mounted after hydration
    setIsMounted(true);
    
    // Setup intersection observer only on the client
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
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

  // Apply animation classes only after client-side hydration
  // This ensures content is visible during SSR for SEO
  const animationClasses = isMounted ? 'opacity-0 translate-y-10' : '';

  return (
    <div 
      ref={ref} 
      className={`${animationClasses} transition-all duration-700 ease-out ${className}`}
    >
      {children}
    </div>
  );
}
