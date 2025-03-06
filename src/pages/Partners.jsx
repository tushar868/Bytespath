import React, { useEffect } from "react";
import "../App.css";

const Partners = () => {

  return (
    <>
      <section id="call-to-action" className="call-to-action section dark-background">
        <img src="/assets/img/cta-bg.jpg" alt="Call to Action Background" />
        <div className="container">
          <div className="row" data-aos="zoom-in" data-aos-delay="100">
            <div className="col-lg-12">
              <h1>Partners</h1>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section id="clients" className="clients section-bg">
        <div className="container">
          <br />
          <div className="section-title">
            <h2>Our Partners</h2>
          </div>

          <div
            className="row mb-5"
            data-aos="zoom-in"
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <div className="col-lg-4 col-md-4 d-flex align-items-center justify-content-center">
              <img
                src="/assets/img/Patner/ic-logo.png"
                className="img-fluid"
                alt="iCompass"
              />
              <h4 className="mt-2">iCompass</h4>
            </div>

            <div className="col-lg-4 col-md-4 d-flex align-items-center justify-content-center">
              <img
                src="/assets/img/Patner/microsoft.png"
                className="img-fluid"
                alt="Microsoft"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Partners;
