import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link className="nav-header" style={{ textDecoration: "none" }} to="/">
        <h2>Andrew Neate Portfolio</h2>
      </Link>
      <ul class="nav-menu">
        <li>
          <Link className="nav-link" style={{ textDecoration: "none" }} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link
            className="nav-link"
            style={{ textDecoration: "none" }}
            to="/experience"
          >
            Experience
          </Link>
        </li>
        <li>
          <Link
            className="nav-link"
            style={{ textDecoration: "none" }}
            to="/projects"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            className="nav-link"
            style={{ textDecoration: "none" }}
            to="/contact"
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
