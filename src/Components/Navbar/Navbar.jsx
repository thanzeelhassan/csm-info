import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="nav-logo">
        <Link to="/" className="nav-link">
          CSM Info
        </Link>
      </div>
      <ul className="nav-menu">
        <li>
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/discussions" className="nav-link">
            Discussions
          </Link>
        </li>
        <li>
          <Link to="/manga" className="nav-link">
            Manga
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
