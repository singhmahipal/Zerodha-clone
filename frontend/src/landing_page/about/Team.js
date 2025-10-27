import { Link } from "react-router-dom";

const Team = () => {
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5 border-top">
        <h1 className="text-center fs-3">People</h1>
      </div>
      <div className="row mt-5">        
        <div className="col text-center">
          <img
            src="media/nithinKamath.jpg"
            alt="nithin kamath"
            className="rounded-circle"
            style={{width: '50%'}}
          />
          <h4 className="mt-3">Nikhil Kamath</h4>
          <h6 className="mt-1">Founder, CEO</h6>
        </div>
        <div className="col" style={{lineHeight: '2'}}>
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on <Link to="/">Homepage</Link> /{" "}
            <a href="https://tradingqna.com/u/nithin/summary">TradingQnA</a> /{" "}
            <a to="https://twitter.com/Nithin0dha">Twitter</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Team;
