import React from "react";
import "../../App.css";

const WebsiteDevelopment = () => {
  return (
    <div>
      {/* Call to Action Section */}
      <section id="call-to-action" className="call-to-action section dark-background">
        <img src="/assets/img/Services/Website Development and Hosting/Webiste Devlopment.jpg" alt="Website Development" />
        <div className="container">
          <div className="row" data-aos="zoom-in" data-aos-delay="100">
            <div className="col-lg-12">
              <h1>Website Development and Hosting</h1>
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
                  At Bytespath, we specialize in creating high-performing, user-friendly websites tailored to meet your business needs. Our services cover the full spectrum of website development, from initial design and coding to deployment. We ensure responsive, visually appealing designs that enhance user experience across devices.
                </li>
              </ul>
            </div>
            <div className="col-lg-6">
              <ul>
                <li>
                  <i className="ri-check-double-line"></i>
                  For hosting, we provide secure, scalable solutions that keep your website running smoothly, with features like cloud hosting, SSL certificates, regular backups, and 24/7 technical support. Whether you're building a new site or need reliable hosting, Bytespath has you covered.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebsiteDevelopment;
