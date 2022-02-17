import React from "react";

import hotelPic from "../images/hotel.jpg";
import trainPic from "../images/train.jpg";
import airportPic from "../images/airport.jpg";

export default function Travel() {
  return (
    <>
      <div></div>
      <div className="travel-spots">
        <div className="hotel-info">
          <h1 className="travel-header">Hotel</h1>
          <h1>The Crystal Point Inn Point Pleasant, NJ</h1>
          <div className="pic-link">
            <a
              className="regular-links"
              href="https://thecrystalpointinn.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img className="hotel-pic" src={hotelPic} alt="Hotel" />
              Hotel Website
            </a>
          </div>
        </div>
        <hr className="travel-hr" />
        <div className="hotel-info">
          <h1 className="travel-header">Train Station</h1>
          <h1>NJ Transit Point Pleasant</h1>
          <div className="pic-link">
            <a
              className="regular-links"
              href="https://www.njtransit.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img className="hotel-pic" src={trainPic} alt="Train" />
              Nj Transit Website
            </a>
          </div>
        </div>
        <hr className="travel-hr" />
        <div className="hotel-info">
          <h1 className="travel-header">Airport</h1>
          <h1>Newark Liberty International Airport</h1>
          <div className="pic-link">
            <a
              className="regular-links"
              href="https://www.newarkairport.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img className="hotel-pic" src={airportPic} alt="Airport" />
              Newark Libery Airport Website
            </a>
          </div>
        </div>
      </div>
      <div></div>
    </>
  );
}
