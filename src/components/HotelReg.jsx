import React from 'react'
import { assets } from '../assets/assets'

const HotelReg = () => {
  return (
    <div className='fixed top-0 button-0 left-0 right-0 z-100 flex items-ceneter
    justify-center bg-black'>
        <form className='flex bg-white toundedx-x[ max=w-4xl max=md:mx-2'>
            <img src={assets.regImage} alt="reg-image" className='w-1/2  rounded-xl hidden md:block'/>
            <div>
                <img src ={assets.closeIcon} alt="Close icon" className='absolute top-4 right-4 w-6 h-6 cursor-pointer' />
                <p className='text-2xl font-semibold mt-6'>Register Your Hotel</p>

            </div>
        </form>
      
    </div>
  )
}

export default HotelReg
