import React from "react";

const Hero = () => {
  return (
    <div className="container">
      <div className="row p-5 mt-5 border-bottom text-center">
        <h1>Pricing</h1>
        <p className="text-muted fs-4 mt-3">List of all charges and taxes</p>
      </div>
      <div className="row p-5 mt-5">
        <div className="col-4 p-5 text-center">
          <img src="media/pricingEquity.svg" style={{width: '50%'}} />
          <h1 className="fs-4">Free equity delivery</h1>
          <p className="text-muted mt-3">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-4 p-5 text-center">
          <img src="media/intradayTrades.svg" style={{width: '50%'}} />
          <h1 className="fs-4">Intraday and F&O trades</h1>
          <p className="text-muted mt-3">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-4 p-5 text-center">
          <img src="media/pricingMF.svg" style={{width: '50%'}} />
          <h1 className="fs-4">Free direct MF</h1>
          <p className="text-muted mt-3">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
