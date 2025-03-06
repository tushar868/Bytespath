import React, { useEffect } from "react";
import "../../App.css";

const AboutUs = () => {
  
  return (
    <div>
      {/* Call to Action Section */}
      <section id="call-to-action" className="call-to-action section dark-background">
        <img src="/assets/img/cta-bg.jpg" alt="Call to Action Background" />
        <div className="container">
          <div className="row" data-aos="zoom-in" data-aos-delay="100">
            <div className="col-lg-12">
              <h1>About Us</h1>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about section-bg">
        <div className="container" data-aos="fade-up">
          <div className="row content">
            <div className="col-lg-6">
              <ul>
                <li>
                  <i className="ri-check-double-line"></i>
                  Bytespath Solutions is an innovative IT and digital marketing firm dedicated to helping
                  businesses scale and succeed on a global scale. We specialize in software development,
                  mobile app creation, digital marketing, website hosting, and business consulting, tailored
                  to meet modern business needs. Additionally, our expertise extends into CGI and VFX,
                  offering creative and technical services for industries such as entertainment, media, and
                  advertising.
                </li>
              </ul>
            </div>
            <div className="col-lg-6">
              <ul>
                <li>
                  <i className="ri-check-double-line"></i>
                  By leveraging cutting-edge technology, strategic insights, and creative solutions, we enable
                  startups and enterprises to enhance their digital footprint and achieve impactful growth. Our
                  commitment to teamwork, quality, and innovation ensures that we deliver tailored solutions to
                  drive business success.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
