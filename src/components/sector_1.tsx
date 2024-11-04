import React from 'react';
import '../App.css';
import DivBox from './divbox';
import '../App.css';
import section_1_1 from '../image/section_1_1.jpg';
import section_1_2 from '../image/section_1_2.png';
import section_1_3 from '../image/section_1_3.png';
import { useMediaQuery } from 'react-responsive'

import { useScrollHandler } from '../hooks/useScrollHandler.ts';
import SectionHeaderHeavyFirstDivBox from './headerdiv.js';
import { SectionHeaderLightFirstDivBox,P1DivBOX } from './headerdiv.js';

function Sector_1({ onLogoClick }: { onLogoClick: () => void }) {
  //useScrollHandler(onLogoClick); // 스크롤 완료 후 콜백으로 onLogoClick 실행
  const Desktop = ({ children }) => {
    const isTablet = useMediaQuery({ minWidth: 900})
    return isTablet ? children : null
  }
  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 899 })
    return isMobile ? children : null
  }
  return (
    <div>

    <Desktop>
      <section id="section" className="section_1">
        <div className="section_1_wrapper">
          <SectionHeaderHeavyFirstDivBox param="HYBRID EXXOSOME " param2="BLESKIN EXXO" delay={1200} ></SectionHeaderHeavyFirstDivBox>
          <div className='section_1_content'>
            <div className='section_1_content_first'>
              <img className="section_image" src={section_1_1} alt="home" />
            </div>
            <div className='section_1_content_anothersecond'>
              <div className='section_1_content_second'>
                <div className='section_1_imagecover'>
                  <img className="section_image none" src={section_1_2} alt="home" />

                </div>
                <div>
                <div className='div4'>
                    <h1 className='section_header anotherheader'>SKIN SET</h1>

                  </div>
                  <P1DivBOX delay={500} className='section_header content section_1' param={"Strengthens The Skin Barrier"}></P1DivBOX>
                  <P1DivBOX delay={500} className='section_header content section_1' param={"Promotes Collagen Synthesis"}></P1DivBOX>
                  <P1DivBOX delay={500} className='section_header content section_1' param={"Promotes Skin Regeneration"}></P1DivBOX>
                

                </div>
              </div>
              <div className='section_1_content_second'>
                <div className='section_1_imagecover'>
                <div className='section_1_imagecover'>
                  <img className="section_image none" src={section_1_3} alt="home" />

                </div>
                </div>
                <div>
                  <div className='div4'>
                    <h1 className='section_header anotherheader'>HAIR SET</h1>

                  </div>
                  <P1DivBOX delay={500} className='section_header content section_1' param={"Stimulates Hair Growth"}></P1DivBOX>
                  <P1DivBOX delay={500} className='section_header content section_1' param={"Protect Hair Folicie"}></P1DivBOX>
                  <P1DivBOX delay={500} className='section_header content section_1' param={"Enhancing Hair Density"}></P1DivBOX>

                  {/* <h1 className='section_header content'>Stimulates Hair Growth</h1>
                  <h1 className='section_header content'>Protect Hair Folicie</h1>
                  <h1 className='section_header content'>Enhancing Hair Density</h1> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </Desktop>
    <Mobile>
    <section id="section" className="section_1">
        <div className="section_1_wrapper">
          <SectionHeaderHeavyFirstDivBox param=" HYBRID EXXOSOME" param2="BLESKIN EXXO" delay={1200} ></SectionHeaderHeavyFirstDivBox>
          <div className='section_1_content'>
            <div className='section_1_content_anothersecond'>
              <div className='section_1_content_second'>
                <div className='section_1_imagecover'>
                  <img className="section_image none" src={section_1_2} alt="home" />

                </div>
                <div>
                <div className='div4'>
                    <h1 className='section_header anotherheader'>SKIN SET</h1>

                  </div>
                  <P1DivBOX delay={500} className='section_header content section_1' param={"Strengthens The Skin Barrier"}></P1DivBOX>
                  <P1DivBOX delay={500} className='section_header content section_1' param={"Promotes Collagen Synthesis"}></P1DivBOX>
                  <P1DivBOX delay={500} className='section_header content section_1' param={"Promotes Skin Regeneration"}></P1DivBOX>
                

                </div>
              </div>
              <div className='section_1_content_second'>
                <div className='section_1_imagecover'>
                <div className='section_1_imagecover'>
                  <img className="section_image none" src={section_1_3} alt="home" />

                </div>
                </div>
                <div>
                  <div className='div4'>
                    <h1 className='section_header anotherheader'>HAIR SET</h1>

                  </div>
                  <P1DivBOX delay={500} className='section_header content section_1' param={"Stimulates Hair Growth"}></P1DivBOX>
                  <P1DivBOX delay={500} className='section_header content section_1' param={"Protect Hair Folicie"}></P1DivBOX>
                  <P1DivBOX delay={500} className='section_header content section_1' param={"Enhancing Hair Density"}></P1DivBOX>

                  {/* <h1 className='section_header content'>Stimulates Hair Growth</h1>
                  <h1 className='section_header content'>Protect Hair Folicie</h1>
                  <h1 className='section_header content'>Enhancing Hair Density</h1> */}
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

export default Sector_1;
