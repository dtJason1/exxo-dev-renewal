import React, { useState, useEffect } from 'react';
import '../App.css';
import image_1 from '../image/image_1.jpg';
import image_2 from '../image/image_2.jpg';
import image_3 from '../image/image_3.jpg';

import DivBox, {DivBox2} from './divbox';

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % 4);
    }, 3000); // 3초마다 이동

    return () => clearInterval(interval);
  }, []);

  const handleTransitionEnd = () => {
    if (currentIndex === 3) {
      // 복제된 섹션에서 첫 번째 섹션으로 즉시 이동
      setIsAnimating(false);
      setCurrentIndex(0);
    } else {
      setIsAnimating(true);
    }
  };

  return (
    <div
      className="carousel"
      style={{
        display: 'flex',
        transition: isAnimating ? 'transform 0.3s ease-in-out' : 'none',
        transform: `translateX(-${currentIndex * 100}vw)`
      }}
      onTransitionEnd={handleTransitionEnd}
    >
      <section id="section1" style={{ height: '100vh', flexShrink: 0, width: '100vw' }}>
        <div className="home">
          <DivBox />
          <img className="homeimage home" src={image_1} alt="home" />
        </div>
      </section>
      <section id="section2" style={{ height: '100vh', flexShrink: 0, width: '100vw' }}>
        <div className="home">
          <DivBox />
          <img className="homeimage home" src={image_2} alt="home" />
        </div>
      </section>
      <section id="section2" style={{ height: '100vh', flexShrink: 0, width: '100vw' }}>
        <div className="home">
          <DivBox2 />
          <img className="homeimage home" src={image_3} alt="home" />
        </div>
      </section>
      {/* 첫 번째 섹션 복제 */}
      <section id="section1-clone" style={{ height: '100vh', flexShrink: 0, width: '100vw' }}>
        <div className="home">
          <DivBox />
          <img className="homeimage home" src={image_1} alt="home" />
        </div>
      </section>
    </div>
  );
}

export default Home;
