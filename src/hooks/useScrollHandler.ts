import { useCallback, useEffect, useState } from 'react';

export function useScrollHandler() {
  const [scrollInProgress, setScrollInProgress] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollPositions, setScrollPositions] = useState<number[]>([]); // 배열 타입을 number[]로 지정

  useEffect(() => {
    const calculateScrollPositions = () => 
      Array.from({ length: 8 }, (_, index) => window.innerHeight * index);
    setScrollPositions(calculateScrollPositions());
  }, []);

  const setIndexAndScroll = useCallback((index: number) => {
    setScrollInProgress(true);
    setCurrentIndex(index);
    window.scrollTo({
      top: scrollPositions[index],
      left: 0,
      behavior: 'smooth',
    });
    setTimeout(() => {
      setScrollInProgress(false);
    }, 1500);
  }, [scrollPositions]);

  const handleWindowWheel = useCallback(
    (event: WheelEvent) => {
      event.preventDefault();
      if (scrollInProgress) return;

      if (event.deltaY > 0 && currentIndex < scrollPositions.length - 1) {
        setIndexAndScroll(currentIndex + 1);
      } else if (event.deltaY < 0 && currentIndex > 0) {
        setIndexAndScroll(currentIndex - 1);
      }
    },
    [scrollInProgress, currentIndex, setIndexAndScroll]
  );

  useEffect(() => {
    window.addEventListener('wheel', handleWindowWheel, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWindowWheel);
    };
  }, [handleWindowWheel]);

  useEffect(() => {
    const handleResize = () => {
      const calculateScrollPositions = () => 
        Array.from({ length: 8 }, (_, index) => window.innerHeight * index);
      setScrollPositions(calculateScrollPositions());    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return { setIndexAndScroll };
}
