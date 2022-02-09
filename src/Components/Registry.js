import React from "react";
import Header from "./Header";
import Nav from "./Nav";
import hawaii from "../images/hawaii.jpg";
import Footer from "../Components/Footer";

export default function Registry() {
  return (
    <div className="main">
      <Header />

      <Nav />
      <div></div>
      <div className="registry-container">
        <h1 className="registry-header">Registry Options</h1>
        <div className="registry-child">
          <div className="weddingInfo">
            <h1 className="weddingDay">Donate to Our Honeymoon Fund Here</h1>
          </div>
          <a
            className="regular-links"
            href="https://registry.theknot.com/ed-oconnor-shelly-applegate-july-2023-nj/41696237"
            target="_blank"
            rel="noreferrer"
          >
            <img className="honeymoon-photo" src={hawaii} alt="honey moon" />
            <h3>Click Here!</h3>
          </a>
        </div>
        <hr className="registry-hr" />
        <h1 className="registry-child">
          Bed Bath and Beyond Registry Coming Soon!
        </h1>
      </div>
      <div></div>
      <Footer />
    </div>
  );
}
