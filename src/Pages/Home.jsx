import React from "react";
import { Link } from "react-router-dom";

import "../Styles/MainBootstrapStyles.css";
import profileImage from "../Assets/main.png";

const Home = () => {
  return (
    <header>
      <div className="container px-5 pb-5">
        <div className="row gx-5 align-items-center">
          <div className="col-xxl-5">
            <div className="text-center text-xxl-start">
              <div className="badge bg-gradient-primary-to-secondary text-white mb-4">
                <div className="text-uppercase">
                  Frontend &middot; Javascript &middot; React
                </div>
              </div>
              <h1 className="display-3 fw-bolder mb-5">
                <span className="text-gradient d-inline">Andrew Neate</span>
              </h1>
              <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xxl-start mb-3">
                <Link
                  className="btn btn-primary btn-lg px-5 py-3 me-sm-3 fs-6 fw-bolder"
                  to="/experience"
                >
                  Experience
                </Link>
                <Link
                  className="btn btn-outline-dark btn-lg px-5 py-3 fs-6 fw-bolder"
                  to="/projects"
                >
                  Projects
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xxl-7">
            <div className="d-flex justify-content-center mt-5 mt-xxl-0">
              <div className="profile bg-gradient-primary-to-secondary">
                <img className="profile-img" src={profileImage} alt="..." />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Home;
