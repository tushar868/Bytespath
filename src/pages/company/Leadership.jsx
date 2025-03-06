import React from "react";
import "../../App.css"; 

const Leadership = () => {
  return (
    <div>
      {/* Call to Action Section */}
      <section id="call-to-action" className="call-to-action section dark-background">
        <img src="../../assets/img/cta-bg.jpg" alt="Call to Action Background" />
        <div className="container">
          <div className="row" data-aos="zoom-in" data-aos-delay="100">
            <div className="col-lg-12">
              <h1>Leadership</h1>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="team section-bg">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <p>
              At Bytespath Solutions, our leadership team is committed to fostering innovation, driving growth,
              and guiding our talented professionals toward success. With a wealth of experience in the IT
              and consulting industries, our leaders bring diverse perspectives and expertise that empower
              our organization to navigate the complexities of the digital landscape.
            </p>
            <h2></h2>
          </div>

          <div className="row">
            {/* Member 1: Aniket Singh */}
            <div className="col-lg-4 col-md-6 mb-4" data-aos="zoom-in" data-aos-delay="200">
              <div className="member d-flex flex-column align-items-center">
                <div className="pic mb-3">
                  <img src="../../assets/img/team/Aniket1.png" className="img-fluid" alt="Aniket Singh" />
                </div>
                <div className="member-info d-flex flex-column align-items-center mt-4 mt-xl-0">
                  <h4>Aniket Singh</h4>
                  <span>Co-founder, MD & CEO</span>
                  <br />
                  <p>
                    As the Co-Founder, Managing Director, and CEO of Bytespath Solutions, Aniket Singh is driven by a passion for leveraging technology to craft transformative solutions that address real-world challenges. With a clear and ambitious vision, he leads the company in its pursuit of innovation, fostering a culture that prioritizes creativity, excellence, and client-centric approaches. <br /><br />
                    Aniket’s leadership is defined by his ability to inspire teams to achieve remarkable results, consistently delivering exceptional value to clients across a diverse range of industries. <br /><br />
                    Under Aniket’s guidance, Bytespath Solutions has grown into a trusted global partner for businesses seeking cutting-edge IT and marketing solutions.
                  </p>
                  <br />
                  <div className="social mt-2">
                    <a href="https://x.com/aniket6621?t=eM4l5-CB84xUDJTtHtlM4A&s=08">
                      <i className="ri-twitter-fill"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/aniket-singh2004/">
                      <i className="ri-linkedin-box-fill"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Member 2: Aditya Aher */}
            <div className="col-lg-4 col-md-6 mb-4" data-aos="zoom-in" data-aos-delay="100">
              <div className="member d-flex flex-column align-items-center">
                <div className="pic mb-3">
                  <img src="../../assets/img/team/Aditya.png" className="img-fluid" alt="Aditya Aher" />
                </div>
                <div className="member-info d-flex flex-column align-items-center mt-4 mt-xl-0">
                  <h4>Aditya Aher</h4>
                  <span>Co-founder & COO</span>
                  <br />
                  <p>
                    As Co-Founder & Chief Operating Officer, Aditya plays a pivotal role in driving operational excellence at Bytespath Solutions. With extensive experience in managing and optimizing business operations, he ensures that our teams deliver high-quality services efficiently and effectively. <br /><br />
                    Aditya is dedicated to fostering a culture of continuous improvement, leveraging data-driven insights to enhance productivity and performance. He is passionate about creating an environment that empowers our employees and aligns with our mission of delivering exceptional value to our clients.
                  </p>
                  <br />
                  <div className="social mt-2">
                    <a href="https://x.com/Aditya_Aher07?t=uNAjWWlgyfqoV2292yBVgg&s=08">
                      <i className="ri-twitter-fill"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/aditya-aher-918714250/">
                      <i className="ri-linkedin-box-fill"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Member 3: Hitesh Nilhalani */}
            <div className="col-lg-4 col-md-6 mb-4" data-aos="zoom-in" data-aos-delay="300">
              <div className="member d-flex flex-column align-items-center">
                <div className="pic mb-3">
                  <img src="../../assets/img/team/Hitesh.png" className="img-fluid" alt="Hitesh Nilhalani" />
                </div>
                <div className="member-info d-flex flex-column align-items-center mt-4 mt-xl-0">
                  <h4>Hitesh Nihalani</h4>
                  <span>Co-founder & CFO</span>
                  <br />
                  <p>
                    As Co-Founder and Chief Financial Officer, Hitesh is instrumental in shaping the financial strategy and vision of Bytespath Solutions. With a strong background in finance and strategic management, he ensures the organization’s financial health while driving growth and sustainability. <br /><br />
                    His expertise in financial planning, analysis, and risk management enables us to make informed decisions that align with our business objectives. Hitesh is committed to fostering transparency and accountability, ensuring that our stakeholders have a clear understanding of our financial performance. <br /><br />
                    Passionate about leveraging financial insights to support operational excellence, he plays a vital role in guiding our team toward achieving long-term success and delivering value to our clients.
                  </p>
                  <br />
                  <div className="social mt-2">
                    <a href="https://x.com/HITESHNIHA74237?t=vqKtSODwy8yQ74mQYcZoCg&s=08">
                      <i className="ri-twitter-fill"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/hitesh-nihalani-62bb47264/">
                      <i className="ri-linkedin-box-fill"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Leadership;
