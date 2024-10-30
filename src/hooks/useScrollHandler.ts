import { useCallback, useEffect, useRef } from 'react';

export function useScrollHandler(onScrollEnd?: () => void ,onScrollToPosition?: (index: number) => void) {
  const scrollInProgress = useRef(false); // 스크롤 중 여부 관리
  const scrollPositions = useRef([0, window.innerHeight, window.innerHeight * 2, window.innerHeight * 3, window.innerHeight * 4, window.innerHeight * 5, window.innerHeight * 6]); // 특정 위치 배열
  const currentIndex = useRef(0); // 현재 위치 인덱스

  const handleWindowWheel = useCallback(
    (event: WheelEvent) => {
      event.preventDefault(); // 기본 스크롤 방지

      if (scrollInProgress.current) return; // 스크롤 중이면 무시
      scrollInProgress.current = true; // 스크롤 시작

      // 스크롤 방향에 따라 다음 위치 인덱스 설정
      if (event.deltaY > 0 && currentIndex.current < scrollPositions.current.length - 1) {
        currentIndex.current += 1;
      } else if (event.deltaY < 0 && currentIndex.current > 0) {
        currentIndex.current -= 1;
      }

      const scrollAmount = scrollPositions.current[currentIndex.current];

      window.scrollTo({
        top: scrollAmount,
        left: 0,
        behavior: 'smooth',
      });

      if (onScrollToPosition && (currentIndex.current === 0 || currentIndex.current === 1)) {
        onScrollToPosition(currentIndex.current);
      }
      // 스크롤 완료 후 콜백 실행
      setTimeout(() => {
        scrollInProgress.current = false;
      }, 1500);
    },
    [onScrollEnd]
  );

  useEffect(() => {
    window.addEventListener('wheel', handleWindowWheel, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWindowWheel);
    };
  }, [handleWindowWheel]);

  useEffect(() => {
    const handleResize = () => {
      scrollPositions.current = [0, window.innerHeight, window.innerHeight * 2, window.innerHeight * 3, window.innerHeight * 4, window.innerHeight * 5, window.innerHeight * 6];
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
}
