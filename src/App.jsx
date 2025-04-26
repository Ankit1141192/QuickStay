import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'

import Home from './components/Home';
import Footer from './components/Footer';
import AllRooms from './components/pages/AllRooms';
import RoomDetails from './components/pages/RoomDetails';
import Experiences from './components/pages/Experiences';
import About from './components/pages/About';

const App = () => {
  const isOwnerPath = useLocation().pathname.includes('/owner');

  return (
    <div>
      {!isOwnerPath && <Navbar />}
      <div className='min-h-[70vh]'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<AllRooms/>} />
          <Route path="/rooms/:id" element={<RoomDetails/>} />
          <Route path="/experience" element={<Experiences/>} />
          <Route path='/about' element={<About />} />
        </Routes>
      </div>
      <Footer/>
    
    </div>
  )
}

export default App
