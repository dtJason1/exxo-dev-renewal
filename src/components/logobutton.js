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
    <div className='header'>
      <button className='img-button'><img src={image_1} className='logobutton' alt="my image" onClick={myFunction} /></button>
    </div>
  );
}

export default Header;