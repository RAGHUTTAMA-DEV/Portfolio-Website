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
function App() {
  // Remove unused count state if not needed
  // const [count, setCount] = useState(0);

  return (
    <div>
      <Preloader />
      <CustumCursor />
      <ParticleBackground />
      <ScrollProgressIndicator/>
      <BrowserRouter>
      <Navbar />
      </BrowserRouter>
      {/* Main Content */}
      <main className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Raghuttama's  Portfolio</h1>
        <p className="text-lg text-gray-600 mb-8">
          Explore my projects, experience, and more!
          <BrowserRouter>
          <Button variant='secondary'>Learn More</Button ></BrowserRouter>
          

          
        </p>
        {/* Add more sections/components here as needed */}
        
      </main>
    </div>
  );
}

export default App;