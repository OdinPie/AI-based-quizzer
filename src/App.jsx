import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './shared/navbar/Navbar'
function App() {
  const [count, setCount] = useState(0)
  const [noshoulder, setnoShoulder] = useState(false);
  const location = useLocation();
  const noShoulder = location.pathname.includes('/quiz-page');

  
  return (
    <>
      {noShoulder || <Navbar></Navbar>}
      <Outlet></Outlet>
    </>
  )
}

export default App
