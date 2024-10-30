import React from 'react';
import '../App.css';
import image_1 from '../image/section_5_1.png';
import image_2 from "../image/exxo-hair.gif";
import { SectionHeaderLightFirstDivBox,P1DivBOX } from './headerdiv.js';
import SimpleSlider from './components.js';
import { useScrollHandler } from '../hooks/useScrollHandler.ts';

function Sector_6({ onLogoClick }: { onLogoClick: () => void }) {
  // useScrollHandler(onLogoClick); // 스크롤 완료 후 콜백으로 onLogoClick 실행

  return (
    <section id="section" className="section_1">
      <div className="section_1_wrapper">

        <SectionHeaderLightFirstDivBox delay={500} param2 ="BEFORE AND AFTER RESULTS"> </SectionHeaderLightFirstDivBox>
        <div className='section_2_explainclass section_6'>
          <P1DivBOX delay={500} className='section_header content' param={"Discover the amazing transformation with EXXO. See the impressive before and after results!"}></P1DivBOX>

           
          </div>
          <div className='section_6_wrapper'>

          <SimpleSlider></SimpleSlider>

          </div>
      </div>
    </section>
  );
}

export default Sector_6;



