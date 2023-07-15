import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__container">
        <Link to="/" className="navbar__logo">
          <img src="/images/logo.png" alt="" />
        </Link>
        <ul className="navbar__menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/projects">Works</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <div className="navbar__contact">
          <Link to="/contact">Let's talk</Link>
        </div>
      </div>
    </div>
  );
}
