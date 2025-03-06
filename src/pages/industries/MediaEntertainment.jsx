import React from "react";
import "../../App.css";

const MediaEntertainment = () => {
  return (
    <div>
      {/* Call to Action Section */}
      <section id="call-to-action" className="call-to-action section dark-background">
        <img
          src="/assets/img/Industry/Media and Enteriment/Media and Enteriment.jpg"
          alt="Media and Entertainment"
        />
        <div className="container">
          <div className="row" data-aos="zoom-in" data-aos-delay="100">
            <div className="col-lg-12">
              <h1>Media and Entertainment</h1>
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
                  The entertainment industry is increasingly focused on creating immersive experiences, driven by
                  advancements in VFX, CGI, and AR/VR technologies. Engaging content is essential for capturing
                  audience attention.
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
                  We utilize VFX and CGI to elevate storytelling and create captivating visual content. Our innovative
                  strategies in content creation and distribution ensure that clients can engage their audiences in dynamic
                  and exciting ways.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MediaEntertainment;
