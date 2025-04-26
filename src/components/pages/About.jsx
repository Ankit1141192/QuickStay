import React from 'react';
import { assets } from '../../assets/assets'; // Adjust the path as necessary

const About = () => {
  return (
    <div className="min-h-screen bg-white py-12 px-6 mt-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* Left Image Section */}
        <div className="md:w-1/2">
          <img 
            src="/src/assets/pexabey2.jpg" 
            alt="Stayvar Hotel"
            className="rounded-3xl shadow-xl object-cover"
          />
        </div>

        {/* Right Text Section */}
        <div className="md:w-1/2">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Welcome to Stayvar Hotel
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            At Stayvar Hotel, we believe in crafting unforgettable experiences. Located at the heart of the city, Stayvar offers luxury accommodations, world-class amenities, and personalized service designed to make you feel at home.
          </p>
          <p className="text-gray-600 text-lg mb-6">
            Whether you're here for a relaxing getaway, a business trip, or a grand celebration, our dedicated team ensures every moment is memorable. Come, stay with us, and experience the art of hospitality.
          </p>

                  <button className="mt-2 flex items-center gap-1 text-sm font-medium text-gray-600 border border-gray-400 px-4 py-2 rounded-full hover:gap-2 transition-all group">
                      Discover Experiences
                      <img
                          src={assets.arrowIcon}
                          alt="arrow-icon"
                          className="w-4 h-4 transition-all duration-200 group-hover:translate-x-1"
                      />
                  </button>

          
        </div>

      </div>
    </div>
  );
};

export default About;
