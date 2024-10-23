import logo from './logo.svg';
import './App.css';
import Header from './components/logobutton.js';
import Home  from './components/home.tsx';
import ExampleComponent from './components/components.js';
import GifTest from './components/components.js';
import {useState, useEffect,handleNavigation, useCallback, useRef} from  'react';
function App() {

  return (

    <div className="App">

      <Header />
      <Home />
      <GifTest/>
      <Home />
      <Home />
      <Home />
      <Home />
      <Home />

    </div>
  );
}

export default App;



