import React from 'react';
import '../App.css';
import image_1 from '../image/section_7.png';
import { SectionHeaderLightFirstDivBox,P1DivBOX,Contact } from './headerdiv.js';
import SimpleSlider from './components.js';
import { useScrollHandler } from '../hooks/useScrollHandler.ts';
import { useMediaQuery } from 'react-responsive'

function Sector_7({ onLogoClick }: { onLogoClick: () => void }) {
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
        <div className='section_1_content_first'>
            <div className='div7'>
              <img className="section_image" src={image_1} alt="home" />
              <P1DivBOX param={"GO TO @exxo.bio"} delay={500} className={"section_header content last"}> </P1DivBOX>
            </div>

            <div className='div7 contactpage wrapper'>
              <h1 className='section_header section_7'>CONTACT</h1>

              <Contact param={"NAME"}></Contact>
            </div>
        </div>

        <div className="section_1_wrapper">


        </div>
      </section>
    </Desktop>
    <Mobile>
    <section id="section" className="section_1" style={{height:"100vh"}}>
        <div className='section_1_content_first'>
            <div className='div7' style={{width: "100%" , height: "auto"}}>
              <img className="section_image" src={image_1} alt="home" />
              <P1DivBOX param={"GO TO @exxo.bio"} delay={500} className={"section_header content last"}> </P1DivBOX>
            </div>

            <div className='div7 contactpage wrapper' style={{marginTop : "0"}}>
              <h1 className='section_header section_7'>CONTACT</h1>

              <Contact param={"NAME"}></Contact>
            </div>
        </div>

        <div className="section_1_wrapper">


        </div>
      </section>


    </Mobile>

    </div>


  );
}

export default Sector_7;



