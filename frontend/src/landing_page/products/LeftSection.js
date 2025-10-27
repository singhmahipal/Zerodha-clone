import React from 'react'

const LeftSection = ({imageURL, productName, productDescription, tryDemo, learnMore, googlePlay, appStore,}) => {
  return (
    <div className='container mt-5'>
        <div className='row'>
            <div className='col-6'>
                <img src={imageURL} alt='product image'/> 
            </div>
            <div className='col-6 p-5 mt-5'>
                <h1>{productName}</h1>
                <p>{productDescription}</p>
                <div className='mb-3'>
                   <a href={tryDemo} className='text-decoration-none'>Try demo</a>
                <a href={learnMore} className='text-decoration-none' style={{marginLeft: '50px'}}>Learn more</a> 
                </div>
                <div>
                  <a href={googlePlay} className='mr-5'><img src='media/googlePlayBadge.svg' /></a>
                <a href={appStore} style={{marginLeft: '50px'}}><img src='media/appstoreBadge.svg' /></a>  
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default LeftSection