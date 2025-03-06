import React from "react";
import "../../App.css";

const RetailAndEcommerce = () => {
  return (
    <div>
      {/* Call to Action Section */}
      <section id="call-to-action" className="call-to-action section dark-background">
        <img
          src="/assets/img/Industry/Retail and E-commerce/reatil and ecom.jpeg"
          alt="Retail and E-commerce"
        />
        <div className="container">
          <div className="row" data-aos="zoom-in" data-aos-delay="100">
            <div className="col-lg-12">
              <h1>Retail and E-commerce</h1>
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
                  The retail landscape is rapidly shifting towards digital channels, with consumers increasingly expecting
                  seamless online shopping experiences. Businesses must adapt to changing consumer behaviors to
                  remain competitive.
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
                  We help retailers embrace digital transformation by offering custom e-commerce platforms, AI-driven
                  inventory management, and targeted digital marketing strategies. Our goal is to empower retailers to
                  meet customer expectations and drive sales through innovative solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RetailAndEcommerce;
