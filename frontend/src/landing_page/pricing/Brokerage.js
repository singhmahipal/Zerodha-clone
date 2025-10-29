import React from 'react'

const Brokerage = () => {
  return (
    <div className='container'>
        <div className='row p-5 mt-5 text-center'>
            <div className='col-8 p-4'>
                <h3 className='fs-4 text-primary'>Brokerage Calculator</h3>
                <ul style={{textAlign: 'left', lineHeight: '2.5', fontSize: '14px'}} className='text-muted'><li>Tax by the government when transacting on the exchanges. Charged as above on both buy and sell sides when trading equity delivery. Charged only on selling side when trading intraday or on F&O.
</li>
<li>When trading at Zerodha, STT/CTT can be a lot more than the brokerage we charge. Important to keep a tab.
</li>

<li>Charged by exchanges (NSE, BSE, MCX) on the value of your transactions.
</li>
<li>BSE has revised transaction charges in XC, XD, XT, Z and ZP groups to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have been merged into a new group X w.e.f 01.12.2017)
</li></ul>
            </div>
            <div className='col-4 p-4'>
                <h3 className='fs-4 text-primary'>List of charges</h3>
            </div>
        </div>
    </div>
  )
}

export default Brokerage