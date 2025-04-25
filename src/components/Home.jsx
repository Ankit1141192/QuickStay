import React from 'react'
import Hero from './Hero'
import FeatureDestination from './FeatureDestination'
import ExclusiveOffers from './ExclusiveOffers'
import Testimonial from './Testimonial'
import NewsLetter from './NewsLetter'
import Footer from './Footer'

const Home = () => {
  return (
    <div>
      <Hero/>
      <FeatureDestination/>
      <ExclusiveOffers/>
      <Testimonial/>
      <NewsLetter/>
      <Footer/>
    </div>
  )
}

export default Home
