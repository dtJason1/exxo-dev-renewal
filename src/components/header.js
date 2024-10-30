import '../header.css';
import image_1 from '../image/logo.png';
import React, { useEffect, useRef, useState } from 'react';

function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [isFadeOut, setIsFadeOut] = useState(false);
  const [isHeightReduce, setIsHeightReduce] = useState(false);
  const headerDivRef = useRef(null);
  function greetUser(scrollAmount) {
    window.scrollTo({
      top: scrollAmount,
      left: 0,
      behavior: 'smooth',
    });  }
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
      <div>
        <div className={`headerdiv ${!isFadeOut ? 'invisible' : 'visible'} ${!isHeightReduce ? 'reduceheight':'induceheight'}`}>
        <button
        onClick={() => greetUser(window.innerHeight)}
        className={'img-button'}
        id="logo"
      >
        <img
          src={image_1} // 이미지 경로가 맞는지 확인하세요.
          className="logobutton"
          alt="Brand logo"
        />
      </button>
        </div>
        <div className="div3 div_3_padding">
          <button className="img-button anotherbutton" onClick={() => greetUser(0)}>BRAND</button>
          <button className="img-button anotherbutton"onClick={() => greetUser(window.innerHeight)}>B/A</button>
          <button className="img-button anotherbutton"onClick={() => greetUser(window.innerHeight*5)}>CONTACT</button>
        </div>
      </div>

    </div>
  );
}

export default Header;