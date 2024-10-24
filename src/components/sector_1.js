import React, { useState, useEffect } from 'react';
import '../App.css'; // Ensure you have the correct path to your CSS file
import image_1 from "../image/exxo-hair.gif";

import image_2 from "../image/exxo-skin.gif";

function GifTest(){

  return (
    <section id='section'>

      <div className='home'>
        <div className='gifdivbox'>
          <img className='homeimage' src= {image_1}></img>

        </div>
        <div className='gifdivbox'>
           <img className='homeimage' src= {image_2}></img>

        </div>


      </div>
    </section>
  );

}
export default GifTest;  