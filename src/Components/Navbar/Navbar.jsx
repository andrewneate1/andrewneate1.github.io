import React from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const Navbar = ({ title, links, type }) => {
  let ulString = "navbar-nav ms-auto mb-2 mb-lg-0 small fw-bolder";

  if (type === "secondary") {
    ulString = "navbar-nav mb-2 mb-lg-0 small";
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white py-3">
      <div className="container px-5">
        <Link
          className="navbar-brand"
          style={{ textDecoration: "none" }}
          to="/"
        >
          <h2 className="fw-bolder text-primary">
            {title !== undefined ? title : ""}
          </h2>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className={ulString}>
            {links.map((link) => (
              <li className="nav-item" key={uuidv4()}>
                <Link
                  className="nav-link"
                  style={{ textDecoration: "none" }}
                  to={link.link}
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
