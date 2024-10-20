import logo from './logo.svg';
import './App.css';
import MyButton from './components/logobutton.js';

function App() {
  return (
    
    <div className="App">
      <MyButton />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
