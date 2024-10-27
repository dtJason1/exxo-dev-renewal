import logo from './logo.svg';
import './App.css';
import Header from './components/header.js';
import Home from './components/home.tsx';
import Sector_1 from './components/sector_1.tsx';
import GifTest from './components/components';
import { useState, useRef, useCallback, useEffect } from 'react';

function App() {
  const [isAnimationActive, setIsAnimationActive] = useState(true); // Header animation state
  const sectorRef = useRef(); // Ref for Sector_1
  const homeRef = useRef(null); // Home 요소 참조

  useEffect(() => {
    const handleScroll = () => {
      const homeBottom = homeRef.current?.getBoundingClientRect().bottom;
      const sectorTop = sectorRef.current?.getBoundingClientRect().top;

      // `Sector_1`이 화면에 보일 때만 애니메이션 활성화
      if (sectorTop <= window.innerHeight * 0.8) {
        setIsAnimationActive(false);
      } 
      // `Home`보다 위로 스크롤 시 애니메이션 비활성화 유지
      else if (homeBottom > 0) {
        setIsAnimationActive(true);
      }
    };

    // 스크롤 이벤트 리스너 등록
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className="App">
      <Header isAnimationActive={isAnimationActive} />
      <div ref={homeRef}>
        <Home onLogoClick={() => null} />
      </div>
      <div ref={sectorRef}>
        <Sector_1 onLogoClick={() => null} />
      </div>
      {[...Array(3)].map((_, index) => (
        <GifTest key={index} />
      ))}
    </div>
  );
}

export default App;