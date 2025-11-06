import React from "react";

const Footer = () => {
  const linkStyle = {
    textDecoration: "none",
    color: "#6c757d",
  };

  return (
    <footer style={{ backgroundColor: "rgb(250, 250, 250)" }}>
      <div className="container border-top mt-5">
        <div className="row mt-5">
          <div className="col">
            <img src="media/logo.svg" alt="logo" style={{ width: "50%" }} />
            <p>
              &copy; 2010 - 2025, NOT Zerodha Broking Ltd. <br />
              All rights reserved.
            </p>
          </div>

          <div className="col">
            <p>Account</p>
            <a href="/open-account" style={linkStyle}>Open demat account</a><br />
            <a href="/minor-account" style={linkStyle}>Minor demat account</a><br />
            <a href="/nri-account" style={linkStyle}>NRI demat account</a><br />
            <a href="/commodity" style={linkStyle}>Commodity</a><br />
            <a href="/dematerialisation" style={linkStyle}>Dematerialisation</a><br />
            <a href="/fund-transfer" style={linkStyle}>Fund transfer</a><br />
            <a href="/mtf" style={linkStyle}>MTF</a><br />
            <a href="/referral" style={linkStyle}>Referral program</a><br />
          </div>

          <div className="col">
            <p>Support</p>
            <a href="/contact" style={linkStyle}>Contact us</a><br />
            <a href="/support" style={linkStyle}>Support portal</a><br />
            <a href="/complaint" style={linkStyle}>How to file a complaint?</a><br />
            <a href="/complaint-status" style={linkStyle}>Status of your complaints</a><br />
            <a href="/bulletin" style={linkStyle}>Bulletin</a><br />
            <a href="/circular" style={linkStyle}>Circular</a><br />
            <a href="/blog" style={linkStyle}>Z-Connect blog</a><br />
            <a href="/downloads" style={linkStyle}>Downloads</a><br />
          </div>

          <div className="col">
            <p>Company</p>
            <a href="/about" style={linkStyle}>About</a><br />
            <a href="/philosophy" style={linkStyle}>Philosophy</a><br />
            <a href="/media" style={linkStyle}>Press & media</a><br />
            <a href="/careers" style={linkStyle}>Careers</a><br />
            <a href="/csr" style={linkStyle}>Zerodha Cares (CSR)</a><br />
            <a href="/tech" style={linkStyle}>Zerodha.tech</a><br />
            <a href="/open-source" style={linkStyle}>Open source</a><br />
          </div>
        </div>

        <div className="mt-5 text-muted" style={{ fontSize: "14px" }}>
          <p>
            Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration
            no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha
            Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity
            Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; SEBI
            Registration no.: INZ000038238 Registered Address: Zerodha Broking
            Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public
            School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India.
          </p>

          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID.
          </p>

          <p>Smart Online Dispute Resolution | Grievances Redressal Mechanism</p>

          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>

          <p>
            Attention investors: Update your e-mail and phone number with your
            stock broker / depository participant. Check your securities / MF /
            bonds in the consolidated account statement issued by NSDL/CDSL
            every month.
          </p>

          <p>
            India's largest broker based on networth as per NSE. NSE broker
            factsheet
          </p>

          <p>
            Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day.
          </p>
        </div>

        <div className="my-3 text-center text-muted">
          <a href="/nse" style={linkStyle}>NSE</a>&nbsp;&nbsp;
          <a href="/bse" style={linkStyle}>BSE</a>&nbsp;&nbsp;
          <a href="/mcx" style={linkStyle}>MCX</a>&nbsp;&nbsp;
          <a href="/terms" style={linkStyle}>Terms & conditions</a>&nbsp;&nbsp;
          <a href="/policies" style={linkStyle}>Policies & procedures</a>&nbsp;&nbsp;
          <a href="/privacy" style={linkStyle}>Privacy policy</a>&nbsp;&nbsp;
          <a href="/disclosure" style={linkStyle}>Disclosure</a>&nbsp;&nbsp;
          <a href="/investor-attention" style={linkStyle}>For investor's attention</a>&nbsp;&nbsp;
          <a href="/investor-charter" style={linkStyle}>Investor charter</a>&nbsp;&nbsp;
        </div>
      </div>
    </footer>
  );
};

export default Footer;