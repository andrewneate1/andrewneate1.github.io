import React from "react";
import { Link } from "react-router-dom";

//import "../Styles/MainBootstrapStyles.css";
import profileImage from "../Assets/main.png";

const Home = () => {
  return (
    <main className="flex-shrink-0">
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
                  <span className="text-gradient d-inline">
                    Andrew Neate, Graduate Developer
                  </span>
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
      <section class="bg-light py-5">
        <div class="container px-5">
          <div class="row gx-5 justify-content-center">
            <div class="col-xxl-8">
              <div class="text-center my-5">
                <h2 class="display-5 fw-bolder">
                  <span class="text-gradient d-inline">About Me</span>
                </h2>
                <p class="lead fw-light mb-4">
                  My name is Andrew Neate and I am a recently graduated
                  develoepr.
                </p>
                <p class="text-muted">
                  My primary focus is frontend developemt with Javascript and
                  React, however, I have a large amount of experience with C++,
                  C#, Python and other langueages which I developed while
                  studying at university.
                </p>
                <div class="d-flex justify-content-center fs-2 gap-4">
                  <a
                    class="text-gradient"
                    href="https://www.facebook.com/andynrocks"
                  >
                    <i class="bi bi-facebook"></i>
                  </a>
                  <a
                    class="text-gradient"
                    href="https://www.linkedin.com/in/andrew-neate-games/"
                  >
                    <i class="bi bi-linkedin"></i>
                  </a>
                  <a
                    class="text-gradient"
                    href="https://github.com/andrewneate1"
                  >
                    <i class="bi bi-github"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
