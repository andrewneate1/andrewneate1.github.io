import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-white py-3">
      <div className="container px-5">
        <Link
          className="navbar-brand"
          style={{ textDecoration: "none" }}
          to="/"
        >
          <h2 className="fw-bolder text-primary">Andrew Neate Portfolio</h2>
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0 small fw-bolder">
            <li className="nav-item">
              <Link
                className="nav-link"
                style={{ textDecoration: "none" }}
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                style={{ textDecoration: "none" }}
                to="/experience"
              >
                Experience
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                style={{ textDecoration: "none" }}
                to="/projects"
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
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
      </div>
    </nav>
  );
};

export default Navbar;
