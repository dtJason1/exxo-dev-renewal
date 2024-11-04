import React, { useState } from 'react';
import '../App.css';
import image_1 from '../image/section_4_1.png';
import image_2 from "../image/section_4_2.png";

import { useScrollHandler } from '../hooks/useScrollHandler.ts';
import {MoonBox} from './divbox.js'
import {MoonBox2} from './divbox.js'
import { SectionHeaderLightFirstDivBox,P1DivBOX } from './headerdiv.js';

function Sector_4({ onLogoClick }: { onLogoClick: () => void }) {
  const [isMoonBox1Complete, setIsMoonBox1Complete] = useState(false);

  // useScrollHandler(onLogoClick); // 스크롤 완료 후 콜백으로 onLogoClick 실행
  return (
    <section id="section" className="section_1 pink">
      <div className="section_1_wrapper">
        <h1 className='section_1_header'>PATENTED 100%</h1>
          <div className='padding' > </div>
          <h1 className='section_1_header plus'>PURE GROW FACTORS</h1>
          <div style={{marginTop: "2vh"}} >

            <MoonBox onAnimationEnd={() => setIsMoonBox1Complete(true)} />
            {<MoonBox2  />}
    
          </div>
          <div className= "section_5_div5">
          <P1DivBOX delay={1000} className='section_header content' param={"A patented effective ingredient containing approximately 270 times more 'Fibronectine', 'Pro-collagen type-l', precursor of collagen, and 'Laminin, a tissue and cell adhesive, compared to conventional culture mediums."}></P1DivBOX>
          </div>
{/*         
        <div className='section_4_wrapper'>

          <div className='section_4_redmoon'> 
            <img src= {image_2}></img>
            <h1 className='section_4_redmoontext'>TGF-B</h1>
          </div>
          <div className='section_4_redmoon'> 
            <img src= {image_2}></img>
            <h1 className='section_4_redmoontext'>SDF-1</h1>
          </div>              
          <div className='section_4_redmoon'> 
            <img src= {image_2}></img>
            <h1 className='section_4_redmoontext'>VEGF</h1>
          </div>               
          <div className='section_4_redmoon'> 
            <img src= {image_2}></img>
            <h1 className='section_4_redmoontext'>HGF</h1>
          </div>
          <div className='section_4_redmoon'> 
            <img src= {image_2}></img>
            <h1 className='section_4_redmoontext'>BEGF</h1>
          </div>
          <div className='section_4_redmoon'> 
            <img src= {image_2}></img>
            <h1 className='section_4_redmoontext'>EGF</h1>
          </div>
        </div>             */}
      </div>
    </section>
  );
}

export default Sector_4;
