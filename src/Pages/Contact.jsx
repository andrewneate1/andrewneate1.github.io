import React from "react";

const Contact = () => {
  return (
    <section class="py-5">
      <div class="container px-5">
        <div class="bg-light rounded-4 py-5 px-4 px-md-5">
          <div class="text-center mb-5">
            <div class="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 mb-3">
              <i class="bi bi-envelope"></i>
            </div>
            <h1 class="fw-bolder">Get in touch</h1>
            <p class="lead fw-normal text-muted mb-0">
              Please contact me using the social links at the bottom of the
              page!
            </p>
          </div>
        </div>
      </div>
      <br />
      <div class="d-flex justify-content-center fs-2 gap-4">
        <a class="text-gradient" href="https://www.facebook.com/andynrocks">
          <i class="bi bi-facebook"></i>
        </a>
        <a
          class="text-gradient"
          href="https://www.linkedin.com/in/andrew-neate-games/"
        >
          <i class="bi bi-linkedin"></i>
        </a>
        <a class="text-gradient" href="https://github.com/andrewneate1">
          <i class="bi bi-github"></i>
        </a>
      </div>
    </section>
  );
};

export default Contact;
