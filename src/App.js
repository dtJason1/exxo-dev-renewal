import logo from './logo.svg';
import './App.css';
import Header from './components/logobutton.js';
import Home  from './components/home.js';
import {useState, useEffect,handleNavigation, useCallback, useRef} from  'react';
function App() {
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll); //clean up
    };
  }, []);

  const handleScroll = () => {
    console.log('scrolled');
  };

  return (

    <div className="App">

      <Header />
      <Home />
      <Home />
    </div>
  );
}

export default App;



