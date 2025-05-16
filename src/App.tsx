import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Preloader from './components/PreLoader';
import CustumCursor from './components/CustumCursor';
import Navbar from './components/Navbar';
import ParticleBackground from './components/particleDrop';
import { BrowserRouter } from 'react-router-dom';
import ScrollProgressIndicator from './components/SCrollProgress';
import Button from './components/Button';
import { nothin } from './Layout/Components/nothing';
import Main from './Layout/main'
function App() {
  // Remove unused count state if not needed
  // const [count, setCount] = useState(0);

  return (
    <div>
    
      <BrowserRouter><Main children={undefined} {...nothin}/></BrowserRouter>
    </div>
  );
}

export default App;