import React from 'react'

const Education = () => {
  return (
    <div className='container mt-5'>             
      <div className='row'>
        <div className='col-6'>
          <img src='media/education.svg' alt='Market education illustration' style={{width: '70%'}} />  {/* Changed alt text */}
        </div>
        <div className='col-6'>
          <h1 className='mb-3 fs-2'>Free and open market education</h1>
          <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
          <a href='https://zerodha.com/varsity' style={{textDecoration: 'none'}}>Varsity <i className="fa-solid fa-arrow-right"></i></a>  {/* Added href and fixed class */}
          <p className='mt-5'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
          <a href='https://tradingqna.com' style={{textDecoration: 'none'}}>Trading Q&A <i className="fa-solid fa-arrow-right"></i></a>  {/* Added href and fixed class */}
        </div>
      </div>
    </div>
  )
}

export default Education