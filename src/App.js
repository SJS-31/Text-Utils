import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

function App() {
  const [mode, setMode] = useState('light');

  const toggleMode =()=>{
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'rgb(9 41 62)';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} about="About Us"/>
    <div className="container">
      <Textform heading="Enter the Text" mode={mode}/>
    </div>
    {/* <About/> */}
    </>
  );
}

export default App;
