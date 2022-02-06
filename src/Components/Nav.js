import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <>
      <div></div>
      <div className="nav">
        <ul className="nav-list">
          <Link to="/" id="homeTab">
            Home
          </Link>
          <Link className="link" to="/photos">
            Photos
          </Link>
          <Link className="link" to="/travel">
            Travel
          </Link>
          <Link className="link" to="/registry">
            Registry
          </Link>
          <Link className="link" to="/rsvp">
            RSVP
          </Link>
        </ul>
      </div>
      <div></div>
    </>
  );
};

export default Nav;
