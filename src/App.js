import logo from './logo.svg';
import './App.css';
import Header from './components/header.js';
import Home from './components/home.tsx';
import Sector_1 from './components/sector_1.tsx';
import Sector_2 from './components/sector_2.tsx';
import Sector_3 from './components/sector_3.tsx';
import Sector_4 from './components/sector_4.tsx';
import Sector_5 from './components/sector_5.tsx';
import Sector_6 from './components/sector_6.tsx';
import Sector_7 from './components/sector_7.tsx';

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
        setIsAnimationActive(true);
      } 
      // `Home`보다 위로 스크롤 시 애니메이션 비활성화 유지
      else if (homeBottom > 0) {
        setIsAnimationActive(false);
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
      <Header />
      <div ref={homeRef} id="sector1">
        <Home onLogoClick={() => null} />
      </div>
      <div ref={sectorRef}  >
        <Sector_1 onLogoClick={() => null} />
      </div>
      
      <Sector_2></Sector_2>
      <Sector_3></Sector_3>
      <Sector_4></Sector_4>
      <Sector_5></Sector_5>
      <Sector_6></Sector_6>
      <Sector_7></Sector_7>

    </div>
  );
}

export default App;