import React from 'react';
import '../App.css';
import image_1 from "../image/logo.png";



function divBox(){
  return(
    <div>
      <h1>EXXO BIO</h1>

    </div>
  );
}

function Header() {
  const myFunction = () => {
    console.log("hello");
  };  
  return (
    <div className='header div3'>
      <button className='img-button'><img src={image_1} className='logobutton' alt="my image" onClick={myFunction} /></button>
      <div className='div3' >
        <button class='img-button anotherbutton'>BRAND</button>
        <button className='img-button anotherbutton'>SKIN</button>
        <button className='img-button anotherbutton'>HAIR</button>
        <button className='img-button anotherbutton'>B/A</button>
        <button className='img-button anotherbutton'>CONTACT</button>

      </div>
    </div>
  );
}

export default Header;