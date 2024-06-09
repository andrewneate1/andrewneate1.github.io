import React from "react";

import mainResume from "../Assets/AndrewNeateCV.pdf";

const Experience = () => {
  return (
    <div className="container px-5 my-5">
      <div className="text-center mb-5">
        <h1 className="display-5 fw-bolder mb-0">
          <span className="text-gradient d-inline">Resume</span>
        </h1>
      </div>
      <div className="row gx-5 justify-content-center">
        <div className="col-lg-11 col-xl-9 col-xxl-8">
          <section>
            <div className="d-flex align-items-center justify-content-between mb-4">
              <h2 className="text-primary fw-bolder mb-0">Experience</h2>
              <a className="btn btn-primary px-4 py-3" href={mainResume}>
                <div className="d-inline-block bi bi-download me-2"></div>
                Download Resume
              </a>
            </div>
            <div className="card shadow border-0 rounded-4 mb-5">
              <div className="card-body p-5">
                <div className="row align-items-center gx-5">
                  <div className="col text-center text-lg-start mb-4 mb-lg-0">
                    <div className="bg-light p-4 rounded-4">
                      <div className="text-primary fw-bolder mb-2">
                        Dec 2023 - Present
                      </div>
                      <div className="small fw-bolder">Bureau Manager</div>
                      <div className="small text-muted">Travelex</div>
                      <div className="small text-muted">London, UK</div>
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <div>
                      Manage and oversee the day to day runnings of a travel
                      money bureau. This includes creating and managing rotas,
                      working as part of a team to ensure sales targets are hit,
                      and proactively pushing the sales of key products.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card shadow border-0 rounded-4 mb-5">
              <div className="card-body p-5">
                <div className="row align-items-center gx-5">
                  <div className="col text-center text-lg-start mb-4 mb-lg-0">
                    <div className="bg-light p-4 rounded-4">
                      <div className="text-primary fw-bolder mb-2">
                        Feb 2023 - Dec 2023
                      </div>
                      <div className="small fw-bolder">
                        Travel Service Partner
                      </div>
                      <div className="small text-muted">Travelex</div>
                      <div className="small text-muted">Bournemouth, UK</div>
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <div>
                      Worked as a sales colleague within a travel money bureau.
                      I was continuously customer facing and regularly pushed
                      sales of key products and services that were relevant to
                      the customers needs.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card shadow border-0 rounded-4 mb-5">
              <div className="card-body p-5">
                <div className="row align-items-center gx-5">
                  <div className="col text-center text-lg-start mb-4 mb-lg-0">
                    <div className="bg-light p-4 rounded-4">
                      <div className="text-primary fw-bolder mb-2">
                        Mar 2019 - Feb 2023
                      </div>
                      <div className="small fw-bolder">
                        Customer Service Advisor
                      </div>
                      <div className="small text-muted">Currys</div>
                      <div className="small text-muted">Bournemouth, UK</div>
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <div>
                      I worked on a customer supoprt desk within a Currys store.
                      I regularly handled and resolved customer issues while
                      completing minor repairs on customer devices. As well I
                      monitored the performance of colleagues within the store
                      to ensure targets were being hit.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <h2 className="text-secondary fw-bolder mb-4">Education</h2>
            <div className="card shadow border-0 rounded-4 mb-5">
              <div className="card-body p-5">
                <div className="row align-items-center gx-5">
                  <div className="col text-center text-lg-start mb-4 mb-lg-0">
                    <div className="bg-light p-4 rounded-4">
                      <div className="text-secondary fw-bolder mb-2">
                        2019-2023
                      </div>
                      <div className="mb-2">
                        <div className="small fw-bolder">
                          Bournemouth University
                        </div>
                        <div className="small text-muted">Bournemouth, UK</div>
                      </div>
                      <div className="fst-italic">
                        <div className="small text-muted">
                          Bachelors Degree in
                        </div>
                        <div className="small text-muted">
                          Games Software Engineering
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <div>
                      I completed a Bachelors degree in games software
                      engineering which consisted of multiple practical exams
                      throughout the course. During this course I learned good
                      programming practices and was able to boost my problem
                      solving ability. Overall I achieved a 2:2.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card shadow border-0 rounded-4 mb-5">
              <div className="card-body p-5">
                <div className="row align-items-center gx-5">
                  <div className="col text-center text-lg-start mb-4 mb-lg-0">
                    <div className="bg-light p-4 rounded-4">
                      <div className="text-secondary fw-bolder mb-2">
                        2017-2019
                      </div>
                      <div className="mb-2">
                        <div className="small fw-bolder">
                          Highcliffe 6th Form
                        </div>
                        <div className="small text-muted">Highcliffe, UK</div>
                      </div>
                      <div className="fst-italic">
                        <div className="small text-muted">A-Levels in</div>
                        <div className="small text-muted">
                          Maths, Computing, Physics
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <div>
                      I completed A-Level exams in Maths, Computing, and
                      Physics. This included both written and practical exams
                      for Computing but only written exams for Maths and
                      physics. Achieved A in Computing, C in Maths, and C in
                      physics.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="card shadow border-0 rounded-4 mb-5">
              <div className="card-body p-5">
                <div class="mb-5">
                  <div class="d-flex align-items-center mb-4">
                    <div class="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3">
                      <i class="bi bi-tools"></i>
                    </div>
                    <h3 class="fw-bolder mb-0">
                      <span class="text-gradient d-inline">
                        Professional Skills
                      </span>
                    </h3>
                  </div>
                  <div class="row row-cols-1 row-cols-md-3 mb-4">
                    <div class="col mb-4 mb-md-0">
                      <div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                        Customer Service
                      </div>
                    </div>
                    <div class="col mb-4 mb-md-0">
                      <div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                        Good Communication
                      </div>
                    </div>
                    <div class="col">
                      <div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                        Frontend Development
                      </div>
                    </div>
                  </div>
                  <div class="row row-cols-1 row-cols-md-3">
                    <div class="col mb-4 mb-md-0">
                      <div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                        Web UI Design
                      </div>
                    </div>
                    <div class="col mb-4 mb-md-0">
                      <div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                        Problem Solving
                      </div>
                    </div>
                    <div class="col">
                      <div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                        Team Working
                      </div>
                    </div>
                  </div>
                </div>
                <div class="mb-0">
                  <div class="d-flex align-items-center mb-4">
                    <div class="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3">
                      <i class="bi bi-code-slash"></i>
                    </div>
                    <h3 class="fw-bolder mb-0">
                      <span class="text-gradient d-inline">Languages</span>
                    </h3>
                  </div>
                  <div class="row row-cols-1 row-cols-md-3 mb-4">
                    <div class="col mb-4 mb-md-0">
                      <div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                        HTML
                      </div>
                    </div>
                    <div class="col mb-4 mb-md-0">
                      <div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                        CSS
                      </div>
                    </div>
                    <div class="col">
                      <div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                        JavaScript
                      </div>
                    </div>
                  </div>
                  <div class="row row-cols-1 row-cols-md-3">
                    <div class="col mb-4 mb-md-0">
                      <div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                        Python
                      </div>
                    </div>
                    <div class="col mb-4 mb-md-0">
                      <div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                        C++
                      </div>
                    </div>
                    <div class="col">
                      <div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                        C#
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Experience;
