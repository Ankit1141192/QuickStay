import React from 'react'
import { roomsDummyData } from '../assets/assets'
import HotelCard from './HotelCard'

const FeatureDestination = () => {
  return (
    <div className="mt-10 px-[10%]"> {/* Top margin and 10% horizontal padding */}
      <div className="flex flex-wrap gap-6 justify-start">
        {roomsDummyData.slice(0, 4).map((room, index) => (
          <HotelCard key={room._id} room={room} index={index} />
        ))}
      </div>
    </div>
  )
}

export default FeatureDestination
