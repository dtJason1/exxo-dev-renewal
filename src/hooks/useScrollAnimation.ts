import { useEffect, useRef } from 'react';

export function useScrollAnimation(delay = 1000) {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              if (entry.target) entry.target.classList.add('visible');
            }, delay); // Apply the delay here
          } else {
            if (entry.target) entry.target.classList.remove('visible');
          }
        });
      },
      { threshold: 0.2 }
    );

    const currentElement = ref.current;
    if (currentElement) observer.observe(currentElement);

    return () => {
      if (currentElement) observer.unobserve(currentElement);
    };
  }, [delay]);

  return ref;
}

export default useScrollAnimation;