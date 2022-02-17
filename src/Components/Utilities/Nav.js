import React from "react";
import "../../App.css";
import { NavLink } from "react-router-dom";
const Nav = () => {
  return (
    <>
      <div></div>
      <div className="nav">
        <ul className="nav-list">
          <NavLink
            className={isActive =>
              "nav-link" + (!isActive ? " unselected" : "")
            }
            end
            to="/"
            id="homeTab"
          >
            Home
          </NavLink>
          <NavLink
            className={isActive =>
              "nav-link" + (!isActive ? " unselected" : "")
            }
            to="/photos"
          >
            Photos
          </NavLink>
          <NavLink
            className={isActive =>
              "nav-link" + (!isActive ? " unselected" : "")
            }
            to="/travel"
          >
            Travel
          </NavLink>
          <NavLink
            className={isActive =>
              "nav-link" + (!isActive ? " unselected" : "")
            }
            to="/registry"
          >
            Registry
          </NavLink>
          <a
            target="_blank"
            rel="noreferrer"
            activeclassname="is-active"
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
