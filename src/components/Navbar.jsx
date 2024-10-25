import React from 'react';
import '../css/navbar.css'; // Link to custom CSS

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="containerr d-flex justify-content-between align-items-center w-100 p-3">


        <div>
        <a className="navbar-brand" href="#">
          <img src="logo.png" alt="Logo" className="logo" />
        </a>
        </div>


        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <div className="navbar-nav rounded-5">
            <a className="nav-item nav-link text-light" href="#">Home</a>
            <a className="nav-item nav-link text-light" href="#">Games</a>
            <div className="nav-item dropdown">
              <a className="nav-link dropdown-toggle text-light" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Company
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item text-light" href="#">About Us</a>
                <a className="dropdown-item text-light" href="#">Careers</a>
              </div>
            </div>
            <a className="nav-item nav-link text-light" href="#">Contact Us</a>
            <a className="nav-item nav-link text-light" href="#">About</a>
          </div>
        </div>


        <div className="join-container">
          <a className="btn  join-btn text-light rounded-2" href="#">Join Now</a>
        </div>


      </div>
    </nav>
  );
};

export default Navbar;
