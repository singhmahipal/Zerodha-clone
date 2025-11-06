import React from "react";

const Universe = () => {
  return (
    <div className="container">
      <div className="row text-center">
        <h3 className="mt-5">The Zerodha Universe</h3>
        <p className="text-muted mt-3">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="col-4 p-4 mt-5">
          <img
            src="media/smallcaseLogo.png"
            alt="Smallcase logo"
            className="mb-3"
            style={{ width: "150px" }}
          />
          <p className="text-small text-muted">thematic investment platform</p>
        </div>
        <div className="col-4 p-4 mt-5">
          <img
            src="media/streakLogo.png"
            alt="Streak logo"
            className="mb-3"
            style={{ width: "150px" }}
          />
          <p className="text-small text-muted">algo & statergy platform</p>
        </div>
        <div className="col-4 p-4 mt-5">
          <img
            src="media/sensibullLogo.svg"
            alt="Sensibull logo"
            className="mb-3"
            style={{ width: "150px" }}
          />
          <p className="text-small text-muted">options trading platform</p>
        </div>
        <div className="col-4 p-4 mt-5">
          <img
            src="media/zerodhafundhouse.png"
            alt="Zerodha Fundhouse logo"
            className="mb-3"
            style={{ width: "150px" }}
          />
          <p className="text-small text-muted">asset management</p>
        </div>
        <div className="col-4 p-4 mt-5">
          <img
            src="media/goldenpiLogo.png"
            alt="Goldenpi logo"
            className="mb-3"
            style={{ width: "150px" }}
          />
          <p className="text-small text-muted">brands trading platform</p>
        </div>
        <div className="col-4 p-4 mt-5">
          <img
            src="media/dittoLogo.png"
            alt="Ditto logo"
            className="mb-3"
            style={{ width: "150px" }}
          />
          <p className="text-small text-muted">insurance</p>
        </div>
        <button
          className="btn btn-primary p-2 fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          SignUp Now
        </button>
      </div>
    </div>
  );
};

export default Universe;