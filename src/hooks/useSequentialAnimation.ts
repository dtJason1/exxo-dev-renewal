import { useEffect, useRef } from 'react';

export function useSequentialAnimation(items, delay = 200, trigger) {
  const itemRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('visible');
            }, index * delay);
          } else {
            entry.target.classList.remove('visible');
          }
        });
      },
      { threshold: 0.2 }
    );

    // Observe each item in the array
    itemRefs.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    // Cleanup the observer on unmount or dependency change
    return () => {
      itemRefs.current.forEach((item) => {
        if (item) observer.unobserve(item);
      });
    };
  }, [delay, trigger]); // Add `trigger` as a dependency to reinitialize

  return itemRefs;
}