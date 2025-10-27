import React from "react";

const Hero = () => {
  return (
    <div className="container border-bottom mb-5">
      <div className="row text-center mt-5">
        <h1>Zerodha Products</h1>
        <h3 className="text-muted mt-3">
          Sleek, modern, and intuitive trading platforms
        </h3>
        <a href="" style={{ textDecoration: "none" }} className="mt-2 mb-5">
          Check out our investment offerings &nbsp;
          <i class="fa-solid fa-long-arrow-right"></i>
        </a>
      </div>
    </div>
  );
};

export default Hero;
