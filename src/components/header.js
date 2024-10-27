import '../App.css';
import image_1 from '../image/logo.png';
import React, { useEffect, useRef } from 'react';

function Header({ isAnimationActive }) {
  const logoButtonRef = useRef(null);

  const handleLogoClick = () => {
    console.log('hello');
  };

  useEffect(() => {
    const logoButton = logoButtonRef.current;

    const handleTransitionEnd = () => {
      // opacity가 0이 된 후에 height를 줄이는 클래스 추가
      if (!isAnimationActive) {
        logoButton.classList.add('height-zero');
        logoButton.classList.add('display-none');
      }
    };

    // opacity 트랜지션이 끝날 때 실행
    logoButton.addEventListener('transitionend', handleTransitionEnd);

    // isAnimationActive가 true일 때 height 초기화
    if (isAnimationActive) {
      logoButton.classList.remove('height-zero');
    }

    return () => {
      logoButton.removeEventListener('transitionend', handleTransitionEnd);
    };
  }, [isAnimationActive]);

  return (
    <div className="header" id="header">
      <div>
        <div>
        <button
        ref={logoButtonRef}
        className={`img-button div3 animate-on-header-opacity ${
          isAnimationActive ? 'visible' : 'invisible'
        }`}
        id="logo"
      >
        <img
          src={image_1} // 이미지 경로가 맞는지 확인하세요.
          className="logobutton"
          alt="Brand logo"
          onClick={handleLogoClick}
        />
      </button>
          
        </div>

      <div className="div3 div_3_padding">
        <button className="img-button anotherbutton">BRAND</button>
        <button className="img-button anotherbutton">B/A</button>
        <button className="img-button anotherbutton">CONTACT</button>
      </div>



      </div>

    </div>
  );
}

export default Header;
