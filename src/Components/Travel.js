import React from "react";
import Header from "../Components/Header";
import Nav from "../Components/Nav";
import hotelPic from "../images/hotel.jpg";
import trainPic from "../images/train.jpg";
import airportPic from "../images/airport.jpg";

//Todo Make headers on travel info larger

export default function Travel() {
  return (
    <div className="main">
      <Header />
      <Nav />
      <div></div>
      <div className="travelSpots">
        <div className="hotelInfo">
          <h1 className="travelHeader">Hotel</h1>
          <h1>The Crystal Point Inn Point Pleasant, NJ</h1>
          <div className="picLink">
            <img className="hotelPic" src={hotelPic} alt="Hotel" />
            <a href="https://thecrystalpointinn.com/">Hotel Website</a>
          </div>
        </div>

        <div className="hotelInfo">
          <h1 className="travelHeader">Train Station</h1>
          <h1>NJ Transit Point Pleasant</h1>
          <div className="picLink">
            <img className="hotelPic" src={trainPic} alt="Train" />
            <a href="https://www.njtransit.com/">Nj Transit Website</a>
          </div>
        </div>
        <div className="hotelInfo">
          <h1 className="travelHeader">Airport</h1>
          <h1>Newark Liberty International Airport</h1>
          <div className="picLink">
            <img className="hotelPic" src={airportPic} alt="Airport" />
            <a href="https://www.newarkairport.com/">
              Newark Libery Airport Website
            </a>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}
