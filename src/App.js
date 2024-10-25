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

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsAnimationActive(entry.isIntersecting); // Trigger opacity based on section visibility
      },
      { threshold: 0.5 } // Trigger when 50% of Sector_1 is visible
    );

    const currentSector = sectorRef.current;
    if (currentSector) observer.observe(currentSector);

    return () => {
      if (currentSector) observer.unobserve(currentSector);
    };
  }, []);

  return (
    <div className="App">
      <Header isAnimationActive={isAnimationActive} />
      <div ref={sectorRef}>
        <Home onLogoClick={() => setIsAnimationActive(true)} />
      </div>
      <Sector_1 onLogoClick={() => setIsAnimationActive(false)} />

      {[...Array(3)].map((_, index) => (
        <GifTest key={index} />
      ))}
    </div>
  );
}

export default App;