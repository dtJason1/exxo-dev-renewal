import React from 'react';
import '../App.css';
import image_1 from '../image/image_1.jpg';
import DivBox from './divbox';
import { useScrollHandler } from '../hooks/useScrollHandler.ts';

function Home({ onLogoClick }: { onLogoClick: () => void }) {
  //useScrollHandler(onLogoClick); // 스크롤 완

  return (
    <section id="section">
      <div className="home">
        <DivBox />
        <img className="homeimage" src={image_1} alt="home" />
      </div>
    </section>
  );
}

export default Home;