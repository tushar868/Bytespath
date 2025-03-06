import React from "react";
import "../../App.css";

const FinanceAndBanking = () => {
  return (
    <div>
      {/* Call to Action Section */}
      <section id="call-to-action" className="call-to-action section dark-background">
        <img
          src="/assets/img/Industry/Fianance and Banking/banking and fiance.jpg"
          alt="Finance and Banking"
        />
        <div className="container">
          <div className="row" data-aos="zoom-in" data-aos-delay="100">
            <div className="col-lg-12">
              <h1>Finance and Banking</h1>
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
                  The finance industry is witnessing a surge in fintech innovations, with an emphasis on enhancing
                  customer experiences and improving operational efficiency. Regulatory compliance and cybersecurity
                  remain top priorities.
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
                  Our innovative fintech solutions address the unique challenges faced by financial institutions. We
                  provide AI-powered analytics, risk management systems, and compliance solutions that help banks and
                  fintech companies navigate the evolving landscape effectively.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FinanceAndBanking;
