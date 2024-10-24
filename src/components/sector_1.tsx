import React from 'react';
import '../App.css';
import image_1 from "../image/image_1.jpg";
import DivBox from './divbox';
import {useState, useEffect, useCallback, useRef} from  'react';

function Sector_1({onLogoClick}) {
  const scrollInProgress = useRef(false); // 스크롤 중 여부를 관리하는 ref

  const handleWindowWheel = useCallback((event: WheelEvent) => {
    event.preventDefault(); // 기본 스크롤 방지

    if (scrollInProgress.current) return; // 스크롤 중이면 무시
    scrollInProgress.current = true; // 스크롤 시작

    const elem = document.getElementById('section');
    if (elem) {
      console.log(elem)
      const rect = elem.getBoundingClientRect();
      const scrollAmount = event.deltaY > 0
        ? window.pageYOffset + rect.height
        : window.pageYOffset - rect.height;

      window.scrollTo({
        top: scrollAmount,
        left: 0,
        behavior: 'smooth',
      });

      // 스크롤 애니메이션 완료 후 다시 스크롤 가능하게 설정
      setTimeout(() => {
        scrollInProgress.current = false;
        onLogoClick();
      }, 1500); // 스크롤 완료 시간 조정
    }
  }, []);
  // IntersectionObserver로 CSS 애니메이션 트리거

  useEffect(() => {

    window.addEventListener('wheel', handleWindowWheel, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWindowWheel);
    };
  }, [handleWindowWheel]);



    return (
    <section id='section' className='section_1'>
      <div className='home'>  
        <DivBox/>
        <h1>ASDKLFJASDKLFJKLASDJKLFASD</h1>
        <h1>ASDKLFJASDKLFJKLASDJKLFASD</h1>
        <h1>ASDKLFJASDKLFJKLASDJKLFASD</h1>
        <h1>ASDKLFJASDKLFJKLASDJKLFASD</h1>
        <h1>ASDKLFJASDKLFJKLASDJKLFASD</h1>
        <h1>ASDKLFJASDKLFJKLASDJKLFASD</h1>

        <button onClick={onLogoClick}> hello</button>
      </div>
    </section>
    );
}


  
export default Sector_1;