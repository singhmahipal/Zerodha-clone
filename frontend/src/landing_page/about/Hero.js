import {Link} from "react-router-dom";

const Hero = () => {
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5 border-bottom">
        <h1 className="fs-4 text-center">
          We pioneered the discount broking model in India.
          <br />
          Now, we are breaking ground with our technology.
        </h1>
      </div>
      <div className="row mt-5 text-muted" style={{lineHeight: '1.8', fontSize: '16px'}}>
        <div className="col-2"></div>
        <div className="col">
          <p className=" mt-5 mb-3">
            We kick-started operations on the 15th of August, 2010 with the goal
            of breaking all barriers that traders and investors face in India in
            terms of cost, support, and technology. We named the company
            Zerodha, a combination of Zero and "Rodha", the Sanskrit word for
            barrier.
          </p>

          <p className="mb-3">
            Today, our disruptive pricing models and in-house technology have
            made us the biggest stock broker in India.
          </p>

          <p className="mb-3">
            Over 1.6+ crore clients place billions of orders every year through
            our powerful ecosystem of investment platforms, contributing over
            15% of all Indian retail trading volumes.
          </p>
        </div>
        <div className="col">
          <p className=" mt-5 mb-3">
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.
          </p>

          <p className="mb-3">
            <a href="https://rainmatter.com/" className="text-decoration-none">Rainmatter</a>, our fintech fund
            and incubator, has invested in several fintech startups with the
            goal of growing the Indian capital markets.
          </p>

          <p className="mb-3">
            And yet, we are always up to something new every day. Catch up on
            the latest updates on our blog or see what the media is{" "}
            <Link to="/about-us" className="text-decoration-none">saying about us</Link> or learn more
            about our business and product{" "}
            <Link to='/philosophy' className="text-decoration-none">philosophies.</Link>
          </p>
        </div>
        <div className="col-2"></div>
      </div>
    </div>
  );
};

export default Hero;
