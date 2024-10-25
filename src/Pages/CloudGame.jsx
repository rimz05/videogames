import React from 'react'
import '../css/cloudgame.css'
const CloudGame = () => {
      return (
        <div className="cloud-gaming-section position-relative ">
          <div className="text-block">
            <h2>
              Introducing you to <span className="highlight">mellowfox Cloud gaming</span>
            </h2>
            <ul className="features-list">
              <li>Streamlined Gameplay: Enjoy high-quality gaming without the need for powerful hardware.</li>
              <li>Seamless Access: Play your favorite games anytime, anywhere, on any device.</li>
              <li>Instant Loading: Experience minimal loading times and dive into the action immediately.</li>
            </ul>
          </div>

          <div className=" w-75 h-50 mx-auto">
            <div className="flex w-full">
              <img src="8053.png" className="big object-cover" />
              <img src="8053.png" className="small object-cover" />
            </div>
          </div>
          <div className=" w-75 h-50 mx-auto">
            <div className="flex w-full">
              <img src="8053.png" className="small object-cover" />
              <img src="8053.png" className="big object-cover" />
            </div>
          </div>

        </div>
      );
    }; 

export default CloudGame
