import React from 'react';
import '../App.css';
import { SectionHeaderLightFirstDivBox,P1DivBOX } from './headerdiv.js';
import SimpleSlider from './components.js';
import { useScrollHandler } from '../hooks/useScrollHandler.ts';
import { useMediaQuery } from 'react-responsive'

function Sector_6({ onLogoClick }: { onLogoClick: () => void }) {
  // useScrollHandler(onLogoClick); // 스크롤 완료 후 콜백으로 onLogoClick 실행
  const Desktop = ({ children }) => {
    const isTablet = useMediaQuery({ minWidth: 800})
    return isTablet ? children : null
  }
  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 799 })
    return isMobile ? children : null
  }
  return (
    <div>
      <Desktop>
      <section id="section" className="section_1">
      <div className="section_1_wrapper">

        <SectionHeaderLightFirstDivBox delay={500} param2 ="BEFORE AND AFTER RESULTS"> </SectionHeaderLightFirstDivBox>
        <div className='section_2_explainclass section_6'>
          <P1DivBOX delay={500} className='section_header content' param={"Discover the amazing transformation with EXXO."}></P1DivBOX>
          <P1DivBOX delay={500} className='section_header content' param={"See the impressive before and after results!"}></P1DivBOX>

           
          </div>
          <div className='section_6_wrapper'>

          <SimpleSlider></SimpleSlider>

          </div>
      </div>
    </section>

    </Desktop>
    <Mobile>
    <section id="section" className="section_1">
      <div className="section_1_wrapper">

        <SectionHeaderLightFirstDivBox delay={500} param2 ="BEFORE AND AFTER RESULTS"> </SectionHeaderLightFirstDivBox>
        <div className='section_2_explainclass section_6' style={{maxWidth: "90vw"}}>
          <P1DivBOX delay={500} className='section_header content' param={"Discover the amazing transformation with EXXO."}></P1DivBOX>
          <P1DivBOX delay={500} className='section_header content' param={"See the impressive before and after results!"}></P1DivBOX>

           
          </div>
          <div className='section_6_wrapper'>

          <SimpleSlider></SimpleSlider>

          </div>
      </div>
    </section>



    </Mobile>

    </div>

  );
}

export default Sector_6;



