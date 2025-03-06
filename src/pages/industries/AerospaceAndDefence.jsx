import React from "react";
import "../../App.css";

const AerospaceAndDefence = () => {
  return (
    <div>
    
      <section id="call-to-action" className="call-to-action section dark-background">
        <img
          src="/assets/img/Industry/Areospace and defence/Aresoapce and defence.jpg"
          alt="Aerospace and Defence"
        />
        <div className="container">
          <div className="row" data-aos="zoom-in" data-aos-delay="100">
            <div className="col-lg-12">
              <h1>Aerospace and Defence</h1>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services section-bg">
        <div className="container" data-aos="fade-up">
          <div className="row justify-content-center">
            {/* Service 1 */}
            <div
              className="col-lg-6 col-md-12 d-flex align-items-stretch"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <div className="icon-box" style={{ backgroundColor: "#8C52FF" }}>
                <p>
                  The aerospace and defense sectors are increasingly adopting advanced technologies, including AI,
                  machine learning, and simulation tools, to enhance safety, efficiency, and innovation in design and
                  operations. These industries face unique challenges, including regulatory compliance, security, and the
                  need for real-time data analysis.
                </p>
              </div>
            </div>

            {/* Service 2 */}
            <div
              className="col-lg-6 col-md-12 d-flex align-items-stretch"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <div className="icon-box" style={{ backgroundColor: "#000" }}>
                <p>
                  We provide tailored solutions for the aerospace and defense industries, focusing on system integration,
                  simulation, and data analytics. Our expertise in developing advanced technologies helps clients improve
                  operational efficiencies, enhance safety protocols, and ensure compliance with industry regulations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AerospaceAndDefence;
