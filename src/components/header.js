import '../header.css';
import image_1 from '../image/logo.png';
import React, { useEffect, useRef, useState } from 'react';
import { useScrollHandler } from '../hooks/useScrollHandler.ts';
import { useMediaQuery } from 'react-responsive'

function Header() {
  const isMobile = useMediaQuery({ maxWidth: 800 });

  const [isVisible, setIsVisible] = useState(true);
  const [isFadeOut, setIsFadeOut] = useState(false);
  const [isHeightReduce, setIsHeightReduce] = useState(false);
  const headerDivRef = useRef(null);

  const { touch } = useScrollHandler();

  function greetUser(scrollAmount) {
    const newIndex = Math.floor(scrollAmount / window.innerHeight);
    touch(newIndex);
  }
  // 두 번째 섹션(Sector_1)을 관찰
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting); // 화면에 보이면 사라지게 설정
      },
      { threshold: 0.1 } // 10% 이상 보일 때 트리거
    );

    const target = document.getElementById('sector1');
    if (target) observer.observe(target);

    return () => {
      if (target) observer.unobserve(target);
    };
  }, []);

  useEffect(() => {
    if (!isVisible) {
      // opacity 애니메이션부터 시작
      setIsFadeOut(false);
      const fadeTimeout = setTimeout(() => {
        setIsHeightReduce(false); // height와 margin 애니메이션 시작
      }, 600); // opacity 애니메이션 후 약간의 딜레이 후에 height와 margin 시작
  
      return () => clearTimeout(fadeTimeout);
    } else {
      // visible 상태로 돌아올 때는 height와 margin 먼저 복구
      setIsHeightReduce(true);
      const heightTimeout = setTimeout(() => {
        setIsFadeOut(true); // opacity 복구
      }, 600); // height와 margin 복구 후 약간의 딜레이 후에 opacity 복구
  
      return () => clearTimeout(heightTimeout);
    }
  }, [isVisible]);

// !isFadeOut ? 'visible' : 'fade-out'
  return (
    <div className="header" id="header">
        {isMobile ? (
        // Mobile Layout
        <div className="header-mobile">
          <button
            onClick={() => greetUser(window.innerHeight * 6)}
            className="img-button"
            id="logo"
          >
            <img src={image_1} className="logobutton mobile" alt="Brand logo" />
          </button>

        </div>
      ) : (
        // Desktop Layout
        <div>
          <div
            className={`headerdiv ${isFadeOut ? 'visible' : 'invisible'} ${
              isHeightReduce ? 'induceheight' : 'reduceheight'
            }`}
          >
            <button
              onClick={() => greetUser(window.innerHeight * 6)}
              className="img-button"
              id="logo"
            >
              <img src={image_1} className="logobutton" alt="Brand logo" />
            </button>
          </div>
          <div className="div3 div_3_padding" style={{marginLeft : "0", display : "flex", justifyContent : "center"}}>
            <div className = "div10">
            <button className="img-button anotherbutton" onClick={() => greetUser(0)}>BRAND</button>
            </div>
            <div className = "div10">

            <button className="img-button anotherbutton" onClick={() => greetUser(window.innerHeight * 6)}>B/A</button>
            </div>
            <div className = "div10">

            <button className="img-button anotherbutton" onClick={() => greetUser(window.innerHeight * 7)}>CONTACT</button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}

export default Header;