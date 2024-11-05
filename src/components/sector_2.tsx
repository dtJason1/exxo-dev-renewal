import React from 'react';
import '../App.css';
import { useEffect, useRef } from 'react';

import { useScrollHandler } from '../hooks/useScrollHandler.ts';
import {useScrollAnimation} from '../hooks/useScrollAnimation.ts';
import { P1DivBOX } from './headerdiv.js';
import { useMediaQuery } from 'react-responsive'
import section_1_1 from '../image/exxo_mobile.png';

function AnotherDiVBox({ param, param2 }) {
  const divRef = useScrollAnimation(500);

  return (
    <div ref={divRef} className="div5">
      <div className="section_1_div_header">
        <span style={{marginRight: "10px"}} className="section_1_header ">{param}</span><span className="section_1_header another">{param2}</span>

      </div>
    </div>
  );
}


function Sector_2() {


  const Desktop = ({ children }) => {
    const isTablet = useMediaQuery({ minWidth: 800})
    return isTablet ? children : null
  }
  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 799 })
    return isMobile ? children : null
  }
  //useScrollHandler(); // 스크롤 완료 후 콜백으로 onLogoClick 실행

  return (
    <div>
    <Desktop>
      <section id="section" className="section_1">
        <div className="section_1_wrapper">
          <AnotherDiVBox param="WHAT" param2="IS BELSKIN EXXO EXOSOME ?" />


          <div className='section_2_wrapper'>
            <div className='section_2_videowrapper'>
              <video autoPlay loop muted playsInline className='section_2_videoclass' src="https://s3-figma-videos-production-sig.figma.com/video/TEAM/1202488376770845288/0cb88b68da65eb2a5fa6e3bb7619ee276c23b5dd?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WptEFxr~tSSHFAVINrRXrBGcrjJQrjYuSthdTMGzeSAVeCPgGAZbY2~YZLaEk-EaXCkKzePFT4QXnKfkHOPq3EWPSpxeiN9IXqqsLv4IqiA4pFxh~JrO3cy5Fwn5x4zPeYi~1JhId4xmeBrvrdUQlv5rnE07Ec9Z7but62vIPQCkW8v4m4iCZFIIf6mguacCkcGSHrBz0nzgSYkQTyskyltGoqgliZHZRQYBVVwt3qh7AMb7qefGgjRWZWZhs70eGUyKrKEJQlDbkfOJTkZe46I7X7vE9YIeg6RVheuj-~-BOQXgw8b8F5TowRJwlB4sYJBKsdkS7-wFlwbcSgfjfA__" controls ></video>

            </div>
            <div className='section_2_explainclass'>
              <P1DivBOX delay={500} className='section_header content' param={"Experience a youthful glow with our cutting-edge exosome solutions. Lactobacillus-formula strengthens the skin barrier and promotes regeneration, effectively slowing down the aging process."}></P1DivBOX>
            </div>


            </div>        
        </div>
      </section>
    </Desktop>
    <Mobile>
      <section id="section" className="section_1">
        <div className="section_1_wrapper  section_2">
          <AnotherDiVBox param="WHAT" param2="IS BELSKIN EXXO EXOSOME ?" />
          <div className='section_2_explainclass'>
              <P1DivBOX delay={500} className='section_header content' param={"Experience a youthful glow with our cutting-edge exosome solutions. Lactobacillus-formula strengthens the skin barrier and promotes regeneration, effectively slowing down the aging process."}></P1DivBOX>
            </div>

          <div className='section_2_wrapper'>
            <div className='section_2_videowrapper'>
              <video autoPlay loop muted playsInline className='section_2_videoclass' src="https://s3-figma-videos-production-sig.figma.com/video/TEAM/1202488376770845288/0cb88b68da65eb2a5fa6e3bb7619ee276c23b5dd?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WptEFxr~tSSHFAVINrRXrBGcrjJQrjYuSthdTMGzeSAVeCPgGAZbY2~YZLaEk-EaXCkKzePFT4QXnKfkHOPq3EWPSpxeiN9IXqqsLv4IqiA4pFxh~JrO3cy5Fwn5x4zPeYi~1JhId4xmeBrvrdUQlv5rnE07Ec9Z7but62vIPQCkW8v4m4iCZFIIf6mguacCkcGSHrBz0nzgSYkQTyskyltGoqgliZHZRQYBVVwt3qh7AMb7qefGgjRWZWZhs70eGUyKrKEJQlDbkfOJTkZe46I7X7vE9YIeg6RVheuj-~-BOQXgw8b8F5TowRJwlB4sYJBKsdkS7-wFlwbcSgfjfA__" controls ></video>

            </div>





        </div>
        <div className='section_2_video_explain_wrapper'>
              <div style={{marginRight:"10px"}}>
              <h1 className='section_2_explainclass_header'>
              EXPERIENCE BLESSED SKIN
              </h1>

              <P1DivBOX  delay={500} className='section_header content start' param={"Bleskin exxo skin and hair booster. Discover the Essence of Revolutionary Skincare and Haircare."}></P1DivBOX>

              </div>

              <div className='section_2_video_image_wrapper'>
                <img className="section_image" src={section_1_1} alt="home" />
              </div>

            </div>
            </div>     
      </section>


    </Mobile>

    </div>

  );
}

export default Sector_2;



