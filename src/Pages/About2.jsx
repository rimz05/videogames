import React from 'react'
import '../css/about2.css'
const About2 = () => {
  return (
    <div className="intro-section text-center text-light">
      <h1>Introducing to MellowFox</h1>
      <h2 className="text-highlight">Studio Cloud Games</h2>
      <p className="intro-text">
        Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing
        industries for previewing layouts and visual mockups.
      </p>
      <p className="intro-text">
        Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing
        industries for previewing layouts and visual mockups.
      </p>

      <div className="container">
        <div className="row">
          <div className="col-md-4 d-flex justify-content-center">
            <div className="feature-card text-center">
              <img src="about1.png" alt="Cyberpunk" className="img-fluid feature-img" />
              <h3>High-end Games</h3>
              <p>
                Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing
                industries for previewing layouts and visual mockups.
              </p>
            </div>
          </div>
          <div className="col-md-4 d-flex justify-content-center">
            <div className="feature-card text-center">
              <img src="about2.png" alt="Uncharted" className="img-fluid feature-img" />
              <h3>Multi-Device</h3>
              <p>
                Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing
                industries for previewing layouts and visual mockups.
              </p>
            </div>
          </div>
          <div className="col-md-4 d-flex justify-content-center">
            <div className="feature-card text-center">
              <img src="about3.png" alt="Apex Legends" className="img-fluid feature-img" />
              <h3>Instant Play</h3>
              <p>
                Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing
                industries for previewing layouts and visual mockups.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default About2
