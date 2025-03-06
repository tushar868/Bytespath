import React from "react";
import "../../App.css";

const LogisticAndTransport = () => {
  return (
    <div>
      {/* Call to Action Section */}
      <section id="call-to-action" className="call-to-action section dark-background">
        <img
          src="/assets/img/Industry/Logistic and Transport/Logistic and Transport.jpeg"
          alt="Logistic and Transport"
        />
        <div className="container">
          <div className="row" data-aos="zoom-in" data-aos-delay="100">
            <div className="col-lg-12">
              <h1>Logistic and Transport</h1>
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
                  The logistics and transportation sector is evolving rapidly, with an emphasis on efficiency, transparency,
                  and sustainability. Companies are adopting technologies to optimize supply chain operations and improve
                  customer satisfaction.
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
                  We leverage technology to optimize logistics and transportation processes. Our solutions, including fleet
                  management systems and route optimization tools, enhance operational efficiency and reduce costs,
                  helping businesses adapt to industry changes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LogisticAndTransport;
