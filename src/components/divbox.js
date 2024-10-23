import React from 'react';
import '../App.css';
import {useState, useEffect, useCallback, useRef} from  'react';

function DivBox() {
    const divRef = useRef(); // div 참조 생성

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible'); // 보이면 애니메이션 트리거
            } else {
              entry.target.classList.remove('visible'); // 안 보이면 클래스 제거
            }
          });
        },
      );
  
      if (divRef.current) {
        observer.observe(divRef.current); // div 관찰 시작
      }
  
      return () => {
        if (divRef.current) observer.unobserve(divRef.current); // 언마운트 시 해제
      };
    }, []);
    return (
        <div className="div1 animate-on-scroll" ref={divRef}>  
          <div>
            <h1>EXXO CERTIFIED</h1>
            <h1>EXCELLENCE</h1>
          </div>
          <div className="div2">
            <p>Certified by CPNP and FDA, ensuring</p>
            <p>top safety and quality in exosome skincare.</p>
          </div>
        </div>
      );
  }

  export default DivBox;