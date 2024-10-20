import React from 'react';
import '../App.css';
import image_1 from "../image/image_1.jpg";
import DivBox from './divbox';

function Home() {
    return (
    <section>
      <div className='home'>  
        <DivBox/>
        <img className='homeimage' src={image_1} /> 
        
      </div>
    </section>
    );
  }
  
  export default Home;