import React from "react";
import { Link } from "react-router-dom";

const ContactFooter = () => {
  return (
    <section class="py-5 bg-gradient-primary-to-secondary text-white">
      <div class="container px-5 my-5">
        <div class="text-center">
          <h2 class="display-4 fw-bolder mb-4">
            Let's build something together
          </h2>
          <Link
            class="btn btn-outline-light btn-lg px-5 py-3 fs-6 fw-bolder"
            to="/contact"
          >
            Contact me
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactFooter;
