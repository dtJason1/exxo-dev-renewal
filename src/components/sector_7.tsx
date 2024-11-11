import React from 'react';
import '../App.css';
import image_1 from '../image/section_7.png';
import image_2 from '../image/Mask group.png'
import { SectionHeaderLightFirstDivBox,P1DivBOX,Contact,P1DivBOXLink } from './headerdiv.js';
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
    <div className='footerclass_width'>
    <Desktop>

      <section id="section" className="section_1">
        <div className='section_1_content_first last'>
            <div className='div7'>
              <img className="section_image" src={image_1} alt="home" />
              <P1DivBOXLink param={"GO TO @exxo.bio"} link="https://instagram.com/exxo.bio"  delay={500} className={"section_header content last"}> </P1DivBOXLink>
            </div>

            <div className='div7 contactpage wrapper'>
              <h1 className='section_header section_7'>CONTACT</h1>

              <Contact param={"NAME"}></Contact>
            </div>
            <div className='footerclass' style={{display:"flex", flexDirection: "row", marginTop : "2vh", alignItems: "flex-end"}}>
            <div style={{marginTop: "2vh"}}>
              <P1DivBOX delay={1000} className='section_header content start' param={"147 Donghwagongdan-ro Munmak-eup Wonju-si Gangwon-do Korea 26365"}></P1DivBOX>
              <P1DivBOX delay={1000} className='section_header content start' param={"TEL   |   +82 33-747-4465-6   FAX   |   +82 -33-747-1133   E-MAIL   |   sales@daeyangmed.com"}></P1DivBOX>

            </div>
            <P1DivBOX delay={1000} className='section_header content start' param={"©2024 Daeyang Medical Co., Ltd. ALL RIGHTS RESERVED"}></P1DivBOX>

          </div>
        </div>

        <div className="section_1_wrapper">


        </div>
      </section>
    </Desktop>
    <Mobile>
    <section id="section" className="section_1" style={{height:"100vh", paddingTop: "3vh"}}>
        <div className='section_1_content_first last'>
            <div className='div7' style={{width: "100%" , height: "auto"}}>
              <img className="section_image" src={image_2} alt="home" />
              <P1DivBOXLink param={"GO TO @exxo.bio"} link="https://instagram.com/exxo.bio"  delay={500} className={"section_header content last"}> </P1DivBOXLink>
            </div>
            <h1 className='section_header section_7' style={{marginTop:"10px"}}>CONTACT</h1>

            <div className='div7 contactpage wrapper' style={{marginTop : "2vh"}}>

              <Contact param={"NAME"}></Contact>
              <div className="footerclass" style={{ opacity: 1, marginLeft:0}}>
         <div>
           <P1DivBOX
             delay={1000}
             className="section_header content start"
             param={"147 Donghwagongdan-ro Munmak-eup Wonju-si Gangwon-do Korea 26365"}
           ></P1DivBOX>
           <P1DivBOX
             delay={1000}
             className="section_header content start"
             param={"TEL | +82 33-747-4465-6 FAX | +82 -33-747-1133 E-MAIL | sales@daeyangmed.com"}
           ></P1DivBOX>
         </div>
         <P1DivBOX
           delay={1000}
           className="section_header content start"
           param={"©2024 Daeyang Medical Co., Ltd. ALL RIGHTS RESERVED"}
         ></P1DivBOX>
       </div>
            </div>
 
        </div>

      </section>


    </Mobile>

    </div>


  );
}

export default Sector_7;



