import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Preloader from './components/PreLoader'
import CustumCursor from './components/CustumCursor'

function App() {
  const [count, setCount] = useState(0)

  return (
     <div>
      <CustumCursor />
     </div>
  )
}

export default App
