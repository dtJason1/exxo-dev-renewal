import React from 'react';
import '../App.css';
import image_1 from '../image/section_7.png';
import { SectionHeaderLightFirstDivBox,P1DivBOX,Contact } from './headerdiv.js';
import SimpleSlider from './components.js';
import { useScrollHandler } from '../hooks/useScrollHandler.ts';

function Sector_7({ onLogoClick }: { onLogoClick: () => void }) {
  // useScrollHandler(onLogoClick); // 스크롤 완료 후 콜백으로 onLogoClick 실행

  return (
    <section id="section" className="section_1">
      <div className='section_1_content_first'>
          <div className='div7'>
            <img className="section_image" src={image_1} alt="home" />

            <P1DivBOX param={"GO TO @exxo.bio"} delay={500} className={"section_header content last"}> </P1DivBOX>

          </div>

          <div className='div7 contactpage wrapper'>
            <h1 className='section_header section_7'>CONTACT</h1>

            <Contact param={"NAME"}></Contact>
            <div className='footerclass'>
        <div>
          <P1DivBOX delay={1000} className='section_header content start' param={"306, Gasan digital 1-ro 19, Geumcheon-gu, Seoul, 08594, South Korea"}></P1DivBOX>
          <P1DivBOX delay={1000} className='section_header content start' param={"TEL   |   +82 33-747-4465-6   FAX   |   +82 -33-747-1133   E-MAIL   |   sales@daeyangmed.com"}></P1DivBOX>

        </div>
        <P1DivBOX delay={1000} className='section_header content start' param={"©2023 Daeyang Medical Co., Ltd. ALL RIGHTS RESERVED"}></P1DivBOX>

      </div>
          </div>
      </div>

      <div className="section_1_wrapper">


      </div>
    </section>
  );
}

export default Sector_7;



