import React from 'react'
import Awards from './Awards.js'
import Hero from './Hero.js'
import Stats from './Stats.js'
import Pricing from './Pricing.js'
import Education from './Education.js'
import Openaccount from '../OpenAccount.js'

const HomePage = () => {
  return (
    <>
        <Hero />
        <Awards />
        <Stats />
        <Pricing />
        <Education />
        <Openaccount />
    </>
  )
}

export default HomePage