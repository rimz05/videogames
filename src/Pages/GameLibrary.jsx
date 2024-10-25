import React from "react";
import "../css/gamelibrary.css";

const GameLibrary = () => {
  return (
    <div className="container-library text-white">
      <div className="row w-75 mx-auto">
        <div className="col-md-6">
          <h1 className="library-title mb-5">
            Explore Our Vast Game Library
          </h1>
        </div>
        <div className="col-md-6 mb-3">
          <img src="8053.png" alt="Game cover" className="img-fluid rounded-image" />
        </div>
      </div>

      <div className="row w-75 mx-auto">
        <div className="col-md-4 mb-3">
          <img src="8053.png" alt="Game cover" className="img-fluid rounded-image" />
        </div>
        <div className="col-md-4 mb-3">
          <img src="8053.png" alt="Game cover" className="img-fluid rounded-image" />
        </div>
        <div className="col-md-4 mb-3">
          <img src="8053.png" alt="Game cover" className="img-fluid rounded-image" />
        </div>
      </div>
    </div>
  );
};

export default GameLibrary;
