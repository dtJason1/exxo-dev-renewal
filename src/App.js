import logo from './logo.svg';
import './App.css';
import Header from './components/logobutton.js';
import Home  from './components/home.tsx';
import Sector_1  from './components/sector_1.tsx';

import ExampleComponent from './components/components.js';
import GifTest from './components/components.js';
import {useState, useEffect,handleNavigation, useCallback, useRef} from  'react';
function App() {
  const logoRef = useRef(null);

  const [isAnimationActive, setIsAnimationActive] = useState(false);

  const toggleAnimation = () => {
    setIsAnimationActive((prev) => !prev);
  };

  return (

    <div className="App">

      <Header isAnimationActive={isAnimationActive} />
      <Home />
      <Sector_1 onLogoClick={toggleAnimation}/>
      <GifTest/>
      <GifTest/>
      <GifTest/>


    </div>
  );
}

export default App;



