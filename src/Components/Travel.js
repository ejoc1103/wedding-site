import React from "react";
import Header from "../Components/Header";
import Nav from "../Components/Nav";
import hotelPic from "../images/hotel.jpg";
import trainPic from "../images/train.jpg";
import airportPic from "../images/airport.jpg";
import Footer from "../Components/Footer";

export default function Travel() {
  return (
    <>
      <div className="main">
        <Header />
        <Nav />
        <div></div>
        <div className="travelSpots">
          <div className="hotelInfo">
            <h1 className="travelHeader">Hotel</h1>
            <h1>The Crystal Point Inn Point Pleasant, NJ</h1>
            <div className="picLink">
              <a
                className="regular-links"
                href="https://thecrystalpointinn.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img className="hotelPic" src={hotelPic} alt="Hotel" />
                Hotel Website
              </a>
            </div>
          </div>
          <hr className="travel-hr" />
          <div className="hotelInfo">
            <h1 className="travelHeader">Train Station</h1>
            <h1>NJ Transit Point Pleasant</h1>
            <div className="picLink">
              <a
                className="regular-links"
                href="https://www.njtransit.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img className="hotelPic" src={trainPic} alt="Train" />
                Nj Transit Website
              </a>
            </div>
          </div>
          <hr className="travel-hr" />
          <div className="hotelInfo">
            <h1 className="travelHeader">Airport</h1>
            <h1>Newark Liberty International Airport</h1>
            <div className="picLink">
              <a
                className="regular-links"
                href="https://www.newarkairport.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img className="hotelPic" src={airportPic} alt="Airport" />
                Newark Libery Airport Website
              </a>
            </div>
          </div>
        </div>
        <div></div>
      </div>
      <Footer />
    </>
  );
}
