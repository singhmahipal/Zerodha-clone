import React from 'react'

const Hero = () => {
  return (
    <div className='container p-5 mb-5'>
      <div className='row text-center'>
        <img src='media/homeHero.png' alt='hero image' className='mb-5' />
        <h1 className='mt-5'>Invest In EveryThing</h1>
        <p>online platform to invest in stocks, derivatives, mutual fund, and more</p>
        <button className='btn btn-primary p-2 fs-5 mb-5' style={{width: '20%', margin: '0 auto'}}>SignUp Now</button>
      </div>
      
    </div>
  )
}

export default Hero