import React from 'react';
import "../../App.css";

const CloudHosting = () => {
  return (
    <div>
      {/* Call to Action Section */}
      <section id="call-to-action" className="call-to-action section dark-background">
        <img src="/assets/img/Services/Cloud hosting & Cloud computing/cloud hosting.avif" alt="" />
        <div className="container">
          <div className="row" data-aos="zoom-in" data-aos-delay="100">
            <div className="col-lg-12">
              <h1>Cloud Hosting & Cloud Computing</h1>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="about">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <p>
              In today’s fast-paced digital environment, businesses need agile, scalable, and secure solutions
              to stay ahead of the competition. At Bytespath Solutions, we offer robust cloud hosting and
              cloud computing services that are designed to empower your business with the flexibility and
              performance needed to grow and innovate.
            </p>
            <h2></h2>
          </div>
          <div className="row content">
            <div className="col-lg-6">
              <h2 className="text-center">Cloud Hosting Services</h2>
              <br />
              <p>
                Our cloud hosting services provide a reliable and scalable infrastructure that ensures your
                websites, applications, and databases are always available, secure, and running at optimal
                performance. Whether you’re a small business or a large enterprise, our hosting solutions are
                tailored to meet your specific needs.
              </p>
              <ul>
                <li>
                  <i className="ri-check-double-line"></i>
                  <h1>Scalability</h1>Easily scale your resources up or down based on demand, ensuring that you only
                  pay for what you use.
                </li>
              </ul>
              <ul>
                <li>
                  <i className="ri-check-double-line"></i>
                  <h1>Performance</h1>With high-speed servers and load balancing, we ensure minimal downtime and fast response times.
                </li>
              </ul>
              <ul>
                <li>
                  <i className="ri-check-double-line"></i>
                  <h1>Security</h1>Our cloud hosting platform comes with built-in security features such as data encryption, firewalls, and regular backups to keep your information safe and secure.
                </li>
              </ul>
              <ul>
                <li>
                  <i className="ri-check-double-line"></i>
                  <h1>24/7 Support</h1>Our dedicated support team is available around the clock to help you resolve any issues and keep your operations running smoothly.
                </li>
              </ul>
            </div>
            <div className="col-lg-6">
              <h2 className="text-center">Cloud Computing Services</h2>
              <br />
              <p>
                Our cloud computing solutions offer you the freedom to innovate and expand without the
                limitations of traditional IT infrastructure. Whether it’s data storage, application deployment, or
                software development, our cloud computing services provide the flexibility and power you need
                to grow your business.
              </p>
              <ul>
                <li>
                  <i className="ri-check-double-line"></i>
                  <h1>Infrastructure as a Service (IaaS)</h1>Gain access to virtualized computing resources such as storage, networking, and servers without the need for on-site hardware.
                </li>
              </ul>
              <ul>
                <li>
                  <i className="ri-check-double-line"></i>
                  <h1>Platform as a Service (PaaS)</h1>Simplify application development and deployment by leveraging our pre-built cloud infrastructure, enabling your team to focus on innovation.
                </li>
              </ul>
              <ul>
                <li>
                  <i className="ri-check-double-line"></i>
                  <h1>Software as a Service (SaaS)</h1>Easily access cloud-based applications such as CRM, ERP, and collaboration tools without worrying about installation, updates, or maintenance.
                </li>
              </ul>
              <ul>
                <li>
                  <i className="ri-check-double-line"></i>
                  <h1>Hybrid Cloud Solutions</h1>For businesses looking to combine on-premise infrastructure with cloud resources, we offer hybrid solutions that provide the best of both worlds.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-us" className="why-us section-bg">
        <div className="container-fluid" data-aos="fade-up">
          <div className="section-title">
            <h2>Why Choose Bytespath Solutions ?</h2>
            <p>
              At Bytespath Solutions, we don’t just provide cloud services—we partner with you to ensure you
              get the most out of your cloud environment.<br />Here’s what sets us apart :
            </p>
          </div>

          <div className="row">
            <div className="justify-content-center">
              <div className="accordion-list">
                <ul>
                  <li>
                    <a data-bs-toggle="collapse" className="collapse" data-bs-target="#accordion-list-1">
                      <span>01</span> Custom Solutions
                      <i className="bx bx-chevron-down icon-show"></i>
                      <i className="bx bx-chevron-up icon-close"></i>
                    </a>
                    <div id="accordion-list-1" className="collapse show" data-bs-parent=".accordion-list">
                      <p>
                        We tailor our cloud offerings to match your unique business needs, ensuring that you get the most efficient and cost-effective solution.
                      </p>
                    </div>
                  </li>

                  <li>
                    <a data-bs-toggle="collapse" data-bs-target="#accordion-list-2" className="collapsed">
                      <span>02</span> Seamless Migration
                      <i className="bx bx-chevron-down icon-show"></i>
                      <i className="bx bx-chevron-up icon-close"></i>
                    </a>
                    <div id="accordion-list-2" className="collapse" data-bs-parent=".accordion-list">
                      <p>
                        Our team of experts ensures a smooth transition to the cloud with minimal disruption to your operations.
                      </p>
                    </div>
                  </li>

                  <li>
                    <a data-bs-toggle="collapse" data-bs-target="#accordion-list-3" className="collapsed">
                      <span>03</span> Security and Compliance
                      <i className="bx bx-chevron-down icon-show"></i>
                      <i className="bx bx-chevron-up icon-close"></i>
                    </a>
                    <div id="accordion-list-3" className="collapse" data-bs-parent=".accordion-list">
                      <p>
                        We prioritize the security of your data, implementing robust encryption, firewalls, and compliance with industry regulations.
                      </p>
                    </div>
                  </li>

                  <li>
                    <a data-bs-toggle="collapse" data-bs-target="#accordion-list-4" className="collapsed">
                      <span>04</span> Cost Efficiency
                      <i className="bx bx-chevron-down icon-show"></i>
                      <i className="bx bx-chevron-up icon-close"></i>
                    </a>
                    <div id="accordion-list-4" className="collapse" data-bs-parent=".accordion-list">
                      <p>
                        By offering scalable and flexible pricing models, we ensure you only pay for the resources you use, optimizing your IT budget.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid" data-aos="fade-up">
          <div className="section-title">
            <h2>The Future of Your Business, Powered by the Cloud</h2>
            <p>
              Whether you're looking to streamline your operations, improve scalability, or increase security,
              Bytespath Solutions' cloud hosting and cloud computing services provide the infrastructure and
              support you need to take your business to the next level. Let us help you unlock the full potential
              of the cloud and achieve your strategic goals.
            </p>
          </div>
          <div className="section-title">
            <h2>Get Started Today !</h2>
            <p>Contact us to learn how our cloud solutions can empower your business.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CloudHosting;
