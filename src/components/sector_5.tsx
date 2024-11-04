import React from 'react';
import '../App.css';
import image_1 from '../image/section_5_1.png';
import image_2 from "../image/exxo-hair.gif";
import { SectionHeaderLightFirstDivBox,P1DivBOX } from './headerdiv.js';

import { useScrollHandler } from '../hooks/useScrollHandler.ts';
import { useMediaQuery } from 'react-responsive'

function Sector_5({ onLogoClick }: { onLogoClick: () => void }) {
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
        <div className='section_3_wrapper' style={{paddingTop: "10vh"}}>
          <div className='section_3_wrapper'>
          <div className='section_5_bordercon'>
            <img className="section_3_image section_5 plus" src={image_1} alt="home" />
            </div>
            <div className='section_1_div_header section_5 '>
              <div className='section_1_div_header anothersection3'>
                <SectionHeaderLightFirstDivBox delay={800} param2 ="EXXO" param="HAIR BOOSTER"> </SectionHeaderLightFirstDivBox>

              </div>
              <div className='section_2_explainclass section_5'>
                <P1DivBOX delay={1000} className='section_header content start' param={"Our advanced exosome solutions create optimal scalp conditions for healthy, confident hair growth."}></P1DivBOX>
                <div className='div2 another'></div>
               <P1DivBOX delay={1000} className='section_header content start' param={"No more hiding or covering up our formula addresses hair loss, promotes fuller hairstyles, and tackles scalp issues, ensuring your hair exudes vitality and confidence."}></P1DivBOX>

              </div>
              <div className='gifdivbox section_3'>
           <img className='homeimage' src= {image_2}></img>

          </div>
            </div>

          </div>



          </div>



    </section>


      </Desktop>
      <Mobile>
      <section id="section" className="section_1">
      <div style={{flexDirection: "column", paddingTop: "10vh"}} className='section_3_wrapper'>
          <div className='section_3_wrapper another'>

            <div className='section_1_div_header section_3 '>
              <div style={{marginBottom:"0px"}} className='section_1_div_header anothersection3'>
              <SectionHeaderLightFirstDivBox delay={800} param2 ="EXXO" param="HAIR BOOSTER"> </SectionHeaderLightFirstDivBox>

              </div>
              <div className='section_2_explainclass section_3'>
              <P1DivBOX delay={1000} className='section_header content start' param={"Our advanced exosome solutions create optimal scalp conditions for healthy, confident hair growth."}></P1DivBOX>
              <div className='div2 another'></div>
              </div>
              <div style={{width: "90%"}} className='gifdivbox section_3'>
           <img className='homeimage' src= {image_2}></img>
           <div style ={{marginTop:"2vh"}}>
            <P1DivBOX delay={1000} className='section_header content start' param={"No more hiding or covering up our formula addresses hair loss, promotes fuller hairstyles, and tackles scalp issues, ensuring your hair exudes vitality and confidence."}></P1DivBOX>

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

export default Sector_5;
