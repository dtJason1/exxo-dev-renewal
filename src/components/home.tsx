import React from 'react';
import '../App.css';
import image_1 from '../image/image_1.jpg';
import DivBox from './divbox';

function Home({ onLogoClick }: { onLogoClick: () => void }) {

  return (
    <section id="section" style={{height:"100vh"}}>
      <div className="home">
        <DivBox />
        <img className="homeimage home" src={image_1} alt="home" />

      </div>
    </section>
  );
}

export default Home;