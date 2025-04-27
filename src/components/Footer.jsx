import React from 'react'
import { assets } from '../assets/assets'
import About from '../components/pages/About'
import HelpCenter from './HelpCenter'

const Footer = () => {
  return (
    <div className='bg-[#F6F9FC] text-gray-500/80 pt-8 px-6 md:px-16 lg:px-24 xl:px-32'>
    <div className='flex flex-wrap justify-between gap-12 md:gap-6'>
        <div className='max-w-80'>
       
                  <a className="flex items-center gap-2">
                      <img
                          src={assets.home1}
                          alt="logo"
                          className="h-11 invert-0 transition-all duration-300"
                      />
                      <span className="text-3xl font-bold text-black transition-colors duration-300">
                          Stayver
                      </span>
                  </a>

            <p className='text-sm'>
                Stayver is your trusted partner for unforgettable travel experiences. We offer a curated selection of luxurious accommodations, ensuring you find the perfect place to stay. Our commitment to quality and service sets us apart, making your journey seamless and memorable. Explore the world with Stayver and indulge in the finest hospitality.
            </p>
            <div className='flex items-center gap-3 mt-4'>
                {/* Instagram */}
                <a href="https://www.instagram.com/mr__unique_ankitkumar4954/"><img src={assets.instagramIcon}  alt="instagram-icon" className="w-6 h-6 transition-all duration-200 group-hover:translate-x-1 filter invert"/></a>
                
                {/* Facebook */}
                <a href="https://www.facebook.com/profile.php?id=100036953027628"><img src={assets.facebookIcon} alt="facebook-icon" className="w-6 h-6 transition-all duration-200 group-hover:translate-x-1 filter invert"/></a>
                {/* Twitter */}
                <img src={assets.twitterIcon} alt="twitter-icon" className="w-6 h-6 transition-all duration-200 group-hover:translate-x-1 filter invert"/>

                {/* LinkedIn */}
                <a href="https://www.linkedin.com/in/ankit1141/"><img src={assets.linkendinIcon} alt="linkedin-icon" className="w-6 h-6 transition-all duration-200 group-hover:translate-x-1 filter invert"/></a>
            </div>
        </div>

        <div>
            <p className='font-playfair text-lg text-gray-800'>COMPANY</p>
            <ul className='mt-3 flex flex-col gap-2 text-sm'>
                <li><a href="About">About</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Press</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Partners</a></li>
            </ul>
        </div>

        <div>
            <p className='font-playfair text-lg text-gray-800'>SUPPORT</p>
            <ul className='mt-3 flex flex-col gap-2 text-sm'>
                <li><a href="HelpCenter">Help Center</a></li>
                <li><a href="./SafetyInformation">Safety Information</a></li>
                <li><a href="#">Cancellation Options</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Accessibility</a></li>
            </ul>
        </div>

        <div className='max-w-80'>
            <p className='font-playfair text-lg text-gray-800'>STAY UPDATED</p>
            <p className='mt-3 text-sm'>
                Subscribe to our newsletter for inspiration and special offers.
            </p>
            <div className='flex items-center mt-4'>
                <input type="text" className='bg-white rounded-l border border-gray-300 h-9 px-3 outline-none' placeholder='Your email' />
                <button className='flex items-center justify-center bg-black h-9 w-9 aspect-square rounded-r'>
                    {/* Arrow icon */}
                   <img src={assets.arrowIcon} alt="arrow-icon" className="w-4 h-4 transition-all duration-200 group-hover:translate-x-1 filter invert"/>
                </button>
            </div>
        </div>
    </div>
    <hr className='border-gray-300 mt-8' />
    <div className='flex flex-col md:flex-row gap-2 items-center justify-between py-5'>
        <p>© {new Date().getFullYear()} Stayver. All rights reserved. developed by Ankit</p>
        <ul className='flex items-center gap-4'>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Terms</a></li>
            <li><a href="#">Sitemap</a></li>
        </ul>
    </div>
</div>
  )
}

export default Footer
