import React from 'react';
import '../css/pricing.css'; // Custom CSS for additional styles

const Pricing = () => {
  return (
    <div className="pricing-section d-flex justify-content-center p-5 text-light vh-100 flex-column">
      <h1 className="pricing-title">Pricing</h1>
      <p className="pricing-subtitle">Choose the right plan to meet your SEO needs and start optimizing today.</p>
      
      <div className="row justify-content-center">
        {/* Pricing Plan 1 */}
        <div className="col-md-3">
          <div className="card pricing-card">
            <div>
            <h2>Pricing</h2>
            <p className="price">$29/mo</p>
            <ul className="feature-list">
              <li>Keyword optimization</li>
              <li>Automated meta tags</li>
              <li>SEO monitoring</li>
              <li>Monthly reports</li>
            </ul>
            </div>
            <div>
            <button className="btn btn-light">Join waitlist</button>
            </div>
          </div>
        </div>
        {/* Pricing Plan 2 */}
        <div className="col-md-3">
          <div className="card pricing-card">
            <h2>Pro</h2>
            <p className="price">$79/mo</p>
            <ul className="feature-list">
              <li>Keyword optimization</li>
              <li>Automated meta tags</li>
              <li>SEO monitoring</li>
              <li>Monthly reports</li>
              <li>Content suggestions</li>
              <li>Link optimization</li>
            </ul>
            <button className="btn btn-light">Join waitlist</button>
          </div>
        </div>
        {/* Pricing Plan 3 */}
        <div className="col-md-3">
          <div className="card pricing-card">
            <h2>Business</h2>
            <p className="price">$149/mo</p>
            <ul className="feature-list">
              <li>Keyword optimization</li>
              <li>Automated meta tags</li>
              <li>SEO monitoring</li>
              <li>Monthly reports</li>
              <li>Content suggestions</li>
              <li>Link optimization</li>
              <li>Multi-user access</li>
              <li>API integration</li>
            </ul>
            <button className="btn btn-light">Join waitlist</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
