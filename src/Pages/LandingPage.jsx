import React from 'react';
import '../css/landingpage.css'; // Custom CSS

const LandingPage = () => {
  return (
    <div className="landing-page text-center position-relative h-100">
      <div className="content mb-5 text-center">
        <div className="border rounded-5 mx-auto latest">
          <span className='badge latest-badge'>New</span>
          Latest integration just arrived
        </div>
        <div className="col-lg-6 mx-auto text-cente">
          <h1>
            Immerse yourself in a world of endless gaming possibilities with{' '}
            <span className="highlight">MellowFox Studios</span>.
          </h1>
          <p className="lead text-light w-50 text-center mx-auto ">
            Immerse yourself in a world of endless gaming possibilities with MellowFox Studios.
          </p>
          <button className="btn btn-light start-btn">Start for free</button>
        </div>
      </div>

      <div className="laptop-image mt-2">
        <img src="Group 2.png" alt="Laptop Gaming" className="img-fluid shadow-lg rounded" />
      </div>
    </div>
  );
};

export default LandingPage;
