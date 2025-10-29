import React from 'react'
import Hero from '../pricing/Hero.js'
import Brokerage from '../pricing/Brokerage.js'
import Openaccount from '../OpenAccount.js'

const PricingPage = () => {
  return (
    <div>
      <Hero />
      <Openaccount />
      <Brokerage />
    </div>
  )
}

export default PricingPage