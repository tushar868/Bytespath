import React from "react";
import "../../App.css";

const IT = () => {
  return (
    <div>
      {/* Call to Action Section */}
      <section id="call-to-action" className="call-to-action section dark-background">
        <img
          src="/assets/img/Industry/IT Industry/IT.webp"
          alt="IT Industry"
        />
        <div className="container">
          <div className="row" data-aos="zoom-in" data-aos-delay="100">
            <div className="col-lg-12">
              <h1>IT (Information Technology)</h1>
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
                  The IT sector is rapidly evolving, driven by advancements in cloud computing, cybersecurity, and
                  artificial intelligence. Businesses are increasingly relying on technology to enhance operational
                  efficiency and deliver exceptional customer experiences.
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
                  At Bytespath, we harness cutting-edge technologies to create robust IT solutions that empower
                  businesses. Our services include custom software development, IT consulting, and system integration,
                  all designed to build scalable and secure infrastructures that adapt to changing demands.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IT;
