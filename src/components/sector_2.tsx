import React from 'react';
import '../App.css';
import { useEffect, useRef } from 'react';

import { useScrollHandler } from '../hooks/useScrollHandler.ts';
import {useScrollAnimation} from '../hooks/useScrollAnimation.ts';
import { P1DivBOX } from './headerdiv.js';

function AnotherDiVBox({ param, param2 }) {
  const divRef = useScrollAnimation(500);

  return (
    <div ref={divRef} className="div5">
      <div className="section_1_div_header">
        <h1 className="section_1_header">{param}</h1>
        <div className="padding"></div>
        <h1 className="section_1_header another">{param2}</h1>
      </div>
    </div>
  );
}


function Sector_2() {
  //useScrollHandler(); // 스크롤 완료 후 콜백으로 onLogoClick 실행

  return (
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
  );
}

export default Sector_2;



