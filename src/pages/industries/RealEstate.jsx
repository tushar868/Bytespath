import React from "react";
import "../../App.css";

const RealEstate = () => {
  return (
    <div>
      {/* Call to Action Section */}
      <section id="call-to-action" className="call-to-action section dark-background">
        <img
          src="/assets/img/Industry/Real Estate/Real Estate.jpg"
          alt="Real Estate"
        />
        <div className="container">
          <div className="row" data-aos="zoom-in" data-aos-delay="100">
            <div className="col-lg-12">
              <h1>Real Estate</h1>
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
                  The real estate industry is leveraging technology for project management, visualization, and
                  sustainability. Stakeholders are seeking efficient solutions to enhance collaboration and decision-making.
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
                  Our solutions focus on architectural visualization, project tracking, and smart building technologies. By
                  enhancing project management capabilities, we empower clients to improve collaboration, reduce costs,
                  and deliver successful projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RealEstate;
