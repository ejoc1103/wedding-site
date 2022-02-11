import React from "react";
import "../App.css";
import { NavLink } from "react-router-dom";
const Nav = () => {
  return (
    <>
      <div></div>
      <div className="nav">
        <ul className="nav-list">
          <NavLink
            exact={true}
            className={isActive =>
              "nav-link" + (!isActive ? " unselected" : "")
            }
            to="/"
            id="homeTab"
          >
            Home
          </NavLink>
          <NavLink
            activeClassName="is-active"
            className="nav-link"
            to="/photos"
          >
            Photos
          </NavLink>
          <NavLink
            activeClassName="is-active"
            className="nav-link"
            to="/travel"
          >
            Travel
          </NavLink>
          <NavLink
            activeClassName="is-active"
            className="nav-link"
            to="/registry"
          >
            Registry
          </NavLink>
          <a
            target="_blank"
            rel="noreferrer"
            activeClassName="is-active"
            className="nav-link"
            href="https://www.theknot.com/us/shelly-applegate-and-ed-o-connor-jul-2023/rsvp"
          >
            RSVP
          </a>
        </ul>
      </div>
      <div></div>
      <hr className="main-hr" />
    </>
  );
};

export default Nav;
