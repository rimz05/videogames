import React from 'react';
import '../css/gameform.css';

const CloudGamingForm = () => {
  return (
    <div className="container-fluid d-flex justify-content-center align-items-center vh-100 back">
      <div className="card text-center p-5 custom-card">
        <h1 className="display-4 texth">
          Join Cloud Gaming 
        </h1>
        <h1 className="highlight-text">Now</h1>
        <p className="lead" style={{ color: '#FFFFFF80' }}>
          No credit card required - 7-days free trial
        </p>
        <form className="d-flex justify-content-center">
          <div className="outline">
            <input type="email" className="form-control" placeholder="Your email" />
            <button className="btn btn-light">Join waitlist</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CloudGamingForm;
