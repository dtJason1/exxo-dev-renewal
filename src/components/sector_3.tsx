import React from 'react';
import '../App.css';
import image_1 from '../image/section_2_1.png';
import image_2 from "../image/exxo-skin.gif";
import { useMediaQuery } from 'react-responsive'

import { useScrollHandler } from '../hooks/useScrollHandler.ts';
import { SectionHeaderLightFirstDivBox,P1DivBOX } from './headerdiv.js';
function Sector_3({ onLogoClick }: { onLogoClick: () => void }) {
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

        <SectionHeaderLightFirstDivBox delay={500} param2 ="WHAT" param="BLESSKIN EXXO?"> </SectionHeaderLightFirstDivBox>

        <div className='section_3_wrapper'>
          <div className='section_3_wrapper another'>

            <div className='section_1_div_header section_3 '>
              <div className='section_1_div_header anothersection3'>
              <SectionHeaderLightFirstDivBox delay={800} param2 ="EXXO" param="SKIN BOOSTER"> </SectionHeaderLightFirstDivBox>

              </div>
              <div className='section_2_explainclass section_3'>
              <P1DivBOX delay={1000} className='section_header content start' param={"Experience a youthful glow with our cutting-edge exosome solutions. Lactobacillus-formula strengthens the skin barrier and promotes regeneration, effectively slowing down the aging process."}></P1DivBOX>
              <div className='div2 another'></div>
              <P1DivBOX delay={1000} className='section_header content start' param={"With high concentrations of adipose-derived stem cell culture and PDRN, our solution maximizes skin rejuvenation for a revitalized"}></P1DivBOX>

              </div>
              <div className='gifdivbox section_3'>
           <img className='homeimage' src= {image_2}></img>

          </div>
            </div>
            <div className='section_3_bordercon'>
            <img className="section_image section_3_image" src={image_1} alt="home" />
            </div>
          </div>



          </div>

        </div>


    </section>

    </Desktop>
    <Mobile>
    <section id="section" className="section_1">
      <div className="section_1_wrapper">

        <SectionHeaderLightFirstDivBox delay={500} param2 ="WHAT" param="BLESSKIN EXXO?"> </SectionHeaderLightFirstDivBox>

        <div style={{flexDirection: "column"}} className='section_3_wrapper'>
          <div className='section_3_wrapper another'>

            <div className='section_1_div_header section_3 '>
              <div style={{marginBottom:"0px"}} className='section_1_div_header anothersection3'>
              <SectionHeaderLightFirstDivBox delay={800} param2 ="EXXO" param="SKIN BOOSTER"> </SectionHeaderLightFirstDivBox>

              </div>
              <div className='section_2_explainclass section_3'>
              <P1DivBOX delay={1000} className='section_header content start' param={"Experience a youthful glow with our cutting-edge exosome solutions. Lactobacillus-formula strengthens the skin barrier and promotes regeneration, effectively slowing down the aging process."}></P1DivBOX>
              <div className='div2 another'></div>
              </div>
              <div style={{width: "90%"}} className='gifdivbox section_3'>
           <img className='homeimage' src= {image_2}></img>
           <div style ={{marginTop:"2vh"}}>
            <P1DivBOX delay={1000} className='section_header content start' param={"With high concentrations of adipose-derived stem cell culture and PDRN, our solution maximizes skin rejuvenation for a revitalized"}></P1DivBOX>

           </div>

          </div>
            </div>

          </div>



          </div>

        </div>


    </section>


    </Mobile>
    </div>

  );
}

export default Sector_3;
