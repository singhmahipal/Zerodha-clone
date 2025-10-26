import React from 'react'
import Awards from './Awards.js'
import Hero from './Hero.js'
import Stats from './Stats.js'
import Pricing from './Pricing.js'
import Education from './Education.js'
import Openaccount from '../Openaccount.js'
import Navbar from '../Navbar.js'
import Footer from '../Footer.js'

const HomePage = () => {
  return (
    <>
        <Navbar />
        <Hero />
        <Awards />
        <Stats />
        <Pricing />
        <Education />
        <Openaccount />
        <Footer />
    </>
  )
}

export default HomePage