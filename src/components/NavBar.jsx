

import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";
import logo from "../assets/img/Logo11.png"

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); 

  useEffect(() => {
    const userId = sessionStorage.getItem('customerId');
    if (userId) {
      setIsLoggedIn(true);
    }
  }, []); 

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  const handleLogout = () => {
    sessionStorage.removeItem('customerId');
    sessionStorage.removeItem('register');

    setIsLoggedIn(false);
  };

  return (
    <nav className={`navbar ${scrolling ? "scrolled" : ""}`}>
      <Link to="/" className="navbar-title">
        <img
          src={logo}
          alt="Logo"
          className="navbar-logo"
          width="75px"
          height="auto"
        />
      </Link>
      <div
        className="navbar-menu"
        onClick={() => {
          setMenuOpen(!menuOpen);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={`navbar-list ${menuOpen ? "open" : ""}`}>
        <li>
          <NavLink to="/" className="active" exact>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/OurStory" className="active">
            Our Story
          </NavLink>
        </li>
        <li>
          <NavLink to="/Catalog" className="active">
            Festivals
          </NavLink>
        </li>
        <li>
          <NavLink to="/contactUs" className="active">
            Contact Us
          </NavLink>
        </li>
        {isLoggedIn && (
          <li>
            <NavLink to="/Profile" className="active">
              Profile
            </NavLink>
          </li>
        )}
        <li>
          {isLoggedIn ? (
            <button className="navbar-signup-button" onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <NavLink to="/SignUp" className="active">
              <button className="navbar-signup-button">Sign Up</button>
            </NavLink>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;