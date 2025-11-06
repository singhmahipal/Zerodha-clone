import React from 'react';

const Hero = () => {
  return (
    <section className='fluid-container' id='supportHero'>
      <div className='p-3' id='supportWrapper'>
        <h4>Support Portal</h4>
        <a href='/support/track-ticket'>Track Ticket</a>
      </div>

      <div className='row p-5'>
        <div className='col-6 p-5'>
          <h1 className='fs-3'>
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input placeholder='Eg. how do I activate F&O' /><br />

          <div className='mt-3 links'>
            <a href='/support/track-account-opening'>Track account opening</a><br />
            <a href='/support/track-segment-activation'>Track segment activation</a><br />
            <a href='/support/intraday-margins'>Intraday margins</a><br />
            <a href='/manuals/kite-user-guide'>Kite user manual</a>
          </div>
        </div>

        <div className='col-6 p-5'>
          <h1 className='fs-3'>Featured</h1>
          <ol>
            <li>
              <a href='/announcements/takeovers-jan-2024'>Current takeovers and delisting - January 2024</a>
            </li>
            <li>
              <a href='/trading/mis-co-leverages'>Latest intraday leverages - MIS & CO</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Hero;