import React from "react";
import "../../App.css";

function MobileAppDevelopment() {
  return (
    <div>
    {/* Call to Action Section */}
    <section id="call-to-action" className="call-to-action section dark-background">
      <img
        src="/assets/img/Services/Mobile App Development and Maintance/Mobile app Development.avif"
        alt="Mobile App Development"
      />
      <div className="container">
        <div className="row" data-aos="zoom-in" data-aos-delay="100">
          <div className="col-lg-12">
            <h1>Mobile App Development and Maintenance</h1>
          </div>
        </div>
      </div>
    </section>

    {/* About Section */}
    <section id="about" className="about">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <p>
            At Bytespath Solutions, we believe that ongoing support is vital for the long-term success of your
            mobile application.
            <br /> Our maintenance services include.
          </p>
          <h2></h2>
        </div>
        <div className="row content">
          <div className="col-lg-6">
            <ul>
              <li>
                <i className="ri-check-double-line"></i>
                <h1>Regular Updates</h1>We keep your app current with regular updates, ensuring it remains compatible with
                the latest operating system versions and user expectations.
              </li>
            </ul>
            <ul>
              <li>
                <i className="ri-check-double-line"></i>
                <h1>Performance Monitoring</h1>Continuous monitoring allows us to optimize app performance and address any
                issues promptly, ensuring a smooth user experience.
              </li>
            </ul>
          </div>
          <div className="col-lg-6">
            <ul>
              <li>
                <i className="ri-check-double-line"></i>
                <h1>User Feedback Implementation</h1>We value user feedback and work closely with you to integrate
                suggestions and enhancements, keeping your app aligned with user needs and trends.
              </li>
            </ul>
            <ul>
              <li>
                <i className="ri-check-double-line"></i>
                <h1>Technical Support</h1>Our dedicated support team is available to assist you with any technical issues
                or inquiries, providing peace of mind as your business grows.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    {/* Why Us Section */}
    <section id="why-us" className="why-us section-bg">
      <div className="container-fluid" data-aos="fade-up">
        <div className="section-title">
          <h2>Why Choose Bytespath Solutions ?</h2>
        </div>

        <div className="row">
          <div className="justify-content-center">
            <div className="accordion-list">
              <ul>
                <li>
                  <a
                    data-bs-toggle="collapse"
                    className="collapse"
                    data-bs-target="#accordion-list-1"
                  >
                    <span>01</span> Experienced Professionals
                    <i className="bx bx-chevron-down icon-show"></i>
                    <i className="bx bx-chevron-up icon-close"></i>
                  </a>
                  <div id="accordion-list-1" className="collapse show" data-bs-parent=".accordion-list">
                    <p>
                      Our skilled team brings extensive experience in mobile app development, delivering solutions that
                      meet industry standards and exceed client expectations.
                    </p>
                  </div>
                </li>

                <li>
                  <a
                    data-bs-toggle="collapse"
                    data-bs-target="#accordion-list-2"
                    className="collapsed"
                  >
                    <span>02</span> Client-Focused Approach
                    <i className="bx bx-chevron-down icon-show"></i>
                    <i className="bx bx-chevron-up icon-close"></i>
                  </a>
                  <div id="accordion-list-2" className="collapse" data-bs-parent=".accordion-list">
                    <p>
                      We prioritize understanding your unique requirements and objectives, ensuring that our solutions
                      align with your business goals.
                    </p>
                  </div>
                </li>

                <li>
                  <a
                    data-bs-toggle="collapse"
                    data-bs-target="#accordion-list-3"
                    className="collapsed"
                  >
                    <span>03</span> Comprehensive Solutions
                    <i className="bx bx-chevron-down icon-show"></i>
                    <i className="bx bx-chevron-up icon-close"></i>
                  </a>
                  <div id="accordion-list-3" className="collapse" data-bs-parent=".accordion-list">
                    <p>
                      From concept to launch and beyond, we offer end-to-end services that support your mobile app’s
                      success at every stage.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Get Started Section */}
    <section>
      <div className="container-fluid" data-aos="fade-up">
        <div className="section-title">
          <h2>Get Started Today !</h2>
          <p>
            Transform your business with a custom mobile application from Bytespath Solutions.
            <br /> Contact us today to discuss your project, and let’s work together to create an exceptional mobile
            experience for your users!
          </p>
        </div>
      </div>
    </section>
  </div>
  );
}

export default MobileAppDevelopment;
