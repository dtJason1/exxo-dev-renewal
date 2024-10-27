import React from 'react';
import '../App.css';
import DivBox from './divbox';
import '../App.css';
import section_1_1 from '../image/section_1_1.png';

import { useScrollHandler } from '../hooks/useScrollHandler.ts';

function Sector_1({ onLogoClick }: { onLogoClick: () => void }) {
  useScrollHandler(onLogoClick); // 스크롤 완료 후 콜백으로 onLogoClick 실행

  return (
    <section id="section" className="section_1">
      <div className="section_1_wrapper">
        <div className='section_1_div_header'>
          <h1 className='section_1_header'>HYBRID EXSOME</h1>
          <div className='padding' > </div>
          <h1 className='section_1_header another'>BLESKIN EXXO</h1>
        </div>
        <div className='section_1_content'>
          <div className='section_1_content_first'>
            <img className="section_1_image" src={section_1_1} alt="home" />
          </div>
          <div className='section_1_content_anothersecond'>
            <div className='section_1_content_second'>
              <div className='section_1_imagecover'>

              </div>
              <div>
              <div className='div4'>
                  <h1 className='section_header anotherheader'>SKIN SET</h1>

                </div>
                                
                <h1 className='section_header content'>Strengthens The Skin Barrier</h1>
                <h1 className='section_header content'>Promotes Collagen Synthesis</h1>
                <h1 className='section_header content'>Promotes Skin Regeneration</h1>
              </div>
            </div>
            <div className='section_1_content_second'>
              <div className='section_1_imagecover'>

              </div>
              <div>
                <div className='div4'>
                  <h1 className='section_header anotherheader'>SKIN SET</h1>

                </div>
                
                <h1 className='section_header content'>Strengthens The Skin Barrier</h1>
                <h1 className='section_header content'>Promotes Collagen Synthesis</h1>
                <h1 className='section_header content'>Promotes Skin Regeneration</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sector_1;
