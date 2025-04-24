import React from 'react'
import Navbar from './components/Navbar'
import { useLocation } from 'react-router-dom'
import Hero from './components/Hero';
import HotelCard from './components/HotelCard';
import Home from './components/Home';

const App = () => {
  const isOwnerPath = useLocation().pathname.includes('/owner');

  return (
    <div>
      {!isOwnerPath && <Navbar />}
      <Home/>
    </div>
  )
}

export default App
