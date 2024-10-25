import React from 'react';
import '../css/footer.css'
const Footer = () => {
  return (
    <footer className="bgg text-white py-5 w-100">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <h5>Mellowfox Studio</h5>
          </div>

          <div className="col-md-1">
            <h6 className='fhead'>Product</h6>
            <ul className="list-unstyled foptions">
              <li><a href="#" className="text">Features</a></li>
              <li><a href="#" className="text">Integration</a></li>
              <li><a href="#" className="text">Updates</a></li>
              <li><a href="#" className="text">FAQ</a></li>
              <li><a href="#" className="text">Pricing</a></li>
            </ul>
          </div>

          <div className="col-md-1">
            <h6 className='fhead'>Company</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text ">About</a></li>
              <li><a href="#" className="text">Blog</a></li>
              <li><a href="#" className="text">Careers</a></li>
              <li><a href="#" className="text">Manifesto</a></li>
              <li><a href="#" className="text">Press</a></li>
              <li><a href="#" className="text">Contact</a></li>
            </ul>
          </div>

          <div className="col-md-1">
            <h6 className='fhead'>Resources</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text">Examples</a></li>
              <li><a href="#" className="text">Community</a></li>
              <li><a href="#" className="text">Guides</a></li>
              <li><a href="#" className="text">Docs</a></li>
              <li><a href="#" className="text">Press</a></li>
            </ul>
          </div>

          <div className="col-md-1">
            <h6 className='fhead'>Legal</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text">Privacy</a></li>
              <li><a href="#" className="text">Terms</a></li>
              <li><a href="#" className="text">Security</a></li>
            </ul>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-md-12 text-center">
            <a href="#" className="text-white mx-2"><i className="bi bi-twitter"></i></a>
            <a href="#" className="text-white mx-2"><i className="bi bi-instagram"></i></a>
            <a href="#" className="text-white mx-2"><i className="bi bi-youtube"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
