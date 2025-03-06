import React, { useEffect } from "react";
import "../App.css";

const Careers = () => {
      
  return (
    <>
      <section id="call-to-action" className="call-to-action section dark-background">
        <img src="/assets/img/cta-bg.jpg" alt=""/>
        <div className="container">
          <div className="row" data-aos="zoom-in" data-aos-delay="100">
            <div className="col-lg-12">
              <h1>Careers</h1>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="about section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>There are currently no vacancies available</h2>
        </div>
      </div>
    </section>
    </>
  );
};

export default Careers;
