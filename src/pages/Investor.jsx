import React, { useEffect } from "react";
import "../App.css";

const Investor = () => {

  return (
    <>
      <section id="call-to-action" className="call-to-action section dark-background">
        <img src="/assets/img/cta-bg.jpg" alt="Call to Action Background" />
        <div className="container">
          <div className="row" data-aos="zoom-in" data-aos-delay="100">
            <div className="col-lg-12">
              <h1>Investor</h1>
            </div>
          </div>
        </div>
      </section>

      
      <section id="clients" className="clients">
        <div className="container">
          <br />
          <div className="section-title">
            <h2>Our Investor</h2>
          </div>

          <div className="row mb-1" data-aos="zoom-in">
            <div className="align-items-center justify-content-center">
              <img
                src="/assets/img/Sigiwent logo.png"
                className="img-fluid"
                alt="Sigiwent Logo"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Investor;
