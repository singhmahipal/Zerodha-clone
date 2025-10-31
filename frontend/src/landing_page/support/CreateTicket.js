import React from "react";

const CreateTicket = () => {
  return (
    <div className="container">
      <div className="row mt-5 mb-5 p-5">
        <h1>to create a ticket, select a relevant topic</h1>
        <div className="col-4 mt-5">
          <h4 className='mb-5'>
            <i class="fa-solid fa-circle-plus"></i>Account opening
          </h4>
          <p className="text-primary">Resident individual</p>
          <p className="text-primary">Minor</p>
          <p className="text-primary">Non Resident Indian (NRI)</p>
          <p className="text-primary">Company, Partnership, HUF and LLP</p>
          <p className="text-primary">Glossary</p>
        </div>
        <div className="col-4 mt-5">
          <h4 className='mb-5'>
            <i class="fa-solid fa-circle-user"></i>Your Zerodha Account
          </h4>
          <p className="text-primary">Your-profile</p>
          <p className="text-primary">Account modification</p>
          <p className="text-primary">
            Client Master Report (CMR) and Depository Participant (DP)
          </p>
          <p className="text-primary">Nomination</p>
          <p className="text-primary">Transfer and conversion of securities</p>
        </div>
        <div className="col-4 mt-5">
          <h4 className='mb-5'>
            <i class="fa-solid fa-chart-simple"></i>Kites
          </h4>
          <p className="text-primary">IPO</p>
          <p className="text-primary">Trading FAQs</p>
          <p className="text-primary">
            Margin Trading Facility (MTF) and Margins
          </p>
          <p className="text-primary">Charts and orders</p>
          <p className="text-primary">general</p>
        </div>
        <div className="col-4 mt-5">
          <h4 className='mb-5'>
            <i class="fa-solid fa-credit-card"></i>Funds
          </h4>
          <p className="text-primary">Add money</p>
          <p className="text-primary">withdraw money</p>
          <p className="text-primary">add bank accounts</p>
          <p className="text-primary">eMandates</p>
        </div>
        <div className="col-4 mt-5">
          <h4 className='mb-5'>
            <i class="fa-solid fa-terminal"></i>Console
          </h4>
          <p className="text-primary">Portfolio</p>
          <p className="text-primary">corporate actions</p>
          <p className="text-primary">funds statement</p>
          <p className="text-primary">reports</p>
          <p className="text-primary">profile</p>
        </div>
        <div className="col-4 mt-5">
          <h4 className='mb-5'>
            <i class="fa-solid fa-coins"></i>Coin
          </h4>
          <p className="text-primary">1. Track account opening</p>
          <p className="text-primary">2. Track segment activation</p>
          <p className="text-primary">3. Intraday margins</p>
          <p className="text-primary">4. Kite user manual</p>
          <p className="text-primary">5. Learn how to create a ticket</p>
        </div>
      </div>
    </div>
  );
};

export default CreateTicket;
