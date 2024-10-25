import { useCallback, useEffect, useRef } from 'react';

export function useScrollHandler(onScrollEnd?: () => void) {
  const scrollInProgress = useRef(false); // 스크롤 중 여부 관리

  const handleWindowWheel = useCallback((event: WheelEvent) => {
    event.preventDefault(); // 기본 스크롤 방지

    if (scrollInProgress.current) return; // 스크롤 중이면 무시
    scrollInProgress.current = true; // 스크롤 시작

    const elem = document.getElementById('section');
    if (elem) {
      const rect = elem.getBoundingClientRect();
      const scrollAmount =
        event.deltaY > 0
          ? window.pageYOffset + rect.height
          : window.pageYOffset - rect.height;

      window.scrollTo({
        top: scrollAmount,
        left: 0,
        behavior: 'smooth',
      });
      if (onScrollEnd) onScrollEnd(); // 콜백 함수 실행
  
      // 스크롤 완료 후 콜백 실행
      setTimeout(() => {
        scrollInProgress.current = false;
      }, 1500);
    }
  }, [onScrollEnd]);

  useEffect(() => {
    window.addEventListener('wheel', handleWindowWheel, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWindowWheel);
    };
  }, [handleWindowWheel]);
}
