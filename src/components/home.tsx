import React from 'react';
import '../App.css';
import image_1 from "../image/image_1.jpg";
import DivBox from './divbox';
import {useState, useEffect, useCallback, useRef} from  'react';

function Home() {
  const [canScroll, setCanScroll] = useState<boolean>(true); 
  const scrollInProgress = useRef(false); // 스크롤 중 여부를 관리하는 ref

  const handleWindowWheel = useCallback((event: WheelEvent) => {
    event.preventDefault(); // 기본 스크롤 방지

    if (scrollInProgress.current) return; // 스크롤 중이면 무시
    scrollInProgress.current = true; // 스크롤 시작

    const elem = document.getElementById('section');
    if (elem) {
      const rect = elem.getBoundingClientRect();
      const scrollAmount = event.deltaY > 0
        ? window.pageYOffset + rect.height
        : window.pageYOffset - rect.height;

      window.scrollTo({
        top: scrollAmount,
        left: 0,
        behavior: 'smooth',
      });

      // 스크롤 애니메이션 완료 후 다시 스크롤 가능하게 설정
      setTimeout(() => {
        scrollInProgress.current = false;
      }, 1500); // 스크롤 완료 시간 조정
    }
  }, []);
  // IntersectionObserver로 CSS 애니메이션 트리거

  useEffect(() => {
    window.addEventListener('wheel', handleWindowWheel, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWindowWheel);
    };
  }, [handleWindowWheel]);

    return (
    <section id='section'>
      <div className='home'>  
        <DivBox/>
        <img className='homeimage' src={image_1} />
      </div>
    </section>
    );
}


  
export default Home;