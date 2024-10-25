import React from 'react';
import '../App.css';
import image_1 from '../image/logo.png';

function Header({ isAnimationActive }) {
  const handleLogoClick = () => {
    console.log('hello');
  };

  return (
    <div className="header" id="header">
      <button
        className={`img-button div3 animate-on-header-opacity ${
          isAnimationActive ? 'visible' : 'invisible'
        }`}
        id="logo"
      >
        <img
          src={image_1}
          className="logobutton"
          alt="Brand logo"
          onClick={handleLogoClick}
        />
      </button>
      <div className="div3">
        <button className="img-button anotherbutton">BRAND</button>
        <button className="img-button anotherbutton">SKIN</button>
        <button className="img-button anotherbutton">HAIR</button>
        <button className="img-button anotherbutton">B/A</button>
        <button className="img-button anotherbutton">CONTACT</button>
      </div>
    </div>
  );
}

export default Header;