import React from "react";
import "../../App.css";

const CyberSecurity = () => {
  return (
    <>
      <section id="call-to-action" className="call-to-action section dark-background">
        <img src="/assets/img/Services/Cuber Security/Cyber security.jpeg" alt="Cyber Security" />
        <div className="container">
          <div className="row" data-aos="zoom-in" data-aos-delay="100">
            <div className="col-lg-12">
              <h1>Cyber Security</h1>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="about">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <p>
              In today’s digital landscape, the threat of cyberattacks is ever-present, making cybersecurity a critical
              component of any organization’s strategy. At Bytespath Solutions, we understand the importance of
              safeguarding your valuable data and assets from evolving cyber threats. Our comprehensive
              cybersecurity services are designed to protect your business, ensuring the confidentiality, integrity, and
              availability of your information.
            </p>
            <br />
            <br />
            <h2>Our Approach to Cybersecurity</h2>
            <p>
              Our cybersecurity services are tailored to meet the unique needs of each client, combining cutting-edge
              technology with industry best practices. We adopt a proactive approach to security, focusing on
              prevention, detection, and response to potential threats.
            </p>
          </div>
          <div className="row content">
            <div className="col-lg-6">
              {[
                {
                  title: "Risk Assessment and Management",
                  content:
                    "We conduct thorough assessments of your current cybersecurity posture to identify vulnerabilities and risks. Based on our findings, we develop a customized risk management strategy to enhance your security measures.",
                },
                {
                  title: "Network Security",
                  content:
                    "Protect your network from unauthorized access and attacks. Our team implements firewalls, intrusion detection systems, and secure configurations to create a robust security perimeter.",
                },
                {
                  title: "Endpoint Protection",
                  content:
                    "Safeguard all endpoints—servers, computers, mobile devices—from threats with advanced endpoint protection solutions. We provide continuous monitoring and threat detection to ensure your devices remain secure.",
                },
                {
                  title: "Continuous Monitoring and Support",
                  content:
                    "Our cybersecurity team provides 24/7 monitoring of your systems, identifying and responding to threats in real-time. We offer ongoing support to ensure your security measures are always up-to-date and effective.",
                },
              ].map((item, index) => (
                <ul key={index}>
                  <li>
                    <i className="ri-check-double-line"></i>
                    <h1>{item.title}</h1>
                    {item.content}
                  </li>
                </ul>
              ))}
            </div>
            <div className="col-lg-6">
              {[
                {
                  title: "Incident Response",
                  content:
                    "In the event of a security breach, our incident response team is ready to act swiftly to mitigate damage, investigate the incident, and restore normal operations. We provide a comprehensive response plan to minimize downtime and protect your reputation.",
                },
                {
                  title: "Data Encryption",
                  content:
                    "Protect sensitive information through encryption techniques that secure data at rest and in transit. This ensures that even in the event of a breach, your data remains inaccessible to unauthorized users.",
                },
                {
                  title: "Security Awareness Training",
                  content:
                    "Empower your employees with the knowledge and skills needed to recognize and respond to cyber threats. Our training programs cover phishing, social engineering, and best practices for maintaining a secure working environment.",
                },
                {
                  title: "Compliance and Governance",
                  content:
                    "Ensure your business meets industry regulations and standards. We assist in implementing compliance frameworks and conducting audits to help you achieve and maintain compliance with relevant laws and regulations.",
                },
              ].map((item, index) => (
                <ul key={index}>
                  <li>
                    <i className="ri-check-double-line"></i>
                    <h1>{item.title}</h1>
                    {item.content}
                  </li>
                </ul>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="why-us" className="why-us section-bg">
        <div className="container-fluid" data-aos="fade-up">
          <div className="section-title">
            <h2>Why Choose Bytespath Solutions?</h2>
          </div>
          <div className="row">
            <div className="justify-content-center">
              <div className="accordion-list">
                <ul>
                  {[
                    {
                      id: 1,
                      title: "Expertise",
                      content:
                        "Our team of cybersecurity professionals possesses extensive experience and knowledge in the field, enabling us to provide effective and reliable solutions.",
                    },
                    {
                      id: 2,
                      title: "Customized Solutions",
                      content:
                        "We understand that every business is unique, and we tailor our services to meet your specific needs and challenges.",
                    },
                    {
                      id: 3,
                      title: "Cutting-Edge Technology",
                      content:
                        "We utilize the latest tools and technologies to deliver effective cybersecurity solutions that evolve with the threat landscape.",
                    },
                    {
                      id: 4,
                      title: "Client-Centric Approach",
                      content:
                        "Our commitment to client satisfaction drives us to deliver high-quality services and support, ensuring that your security concerns are addressed promptly and effectively.",
                    },
                  ].map((item) => (
                    <li key={item.id}>
                      <a
                        data-bs-toggle="collapse"
                        className="collapse"
                        data-bs-target={`#accordion-list-${item.id}`}
                      >
                        <span>{`0${item.id}`}</span> {item.title}
                        <i className="bx bx-chevron-down icon-show"></i>
                        <i className="bx bx-chevron-up icon-close"></i>
                      </a>
                      <div id={`accordion-list-${item.id}`} className="collapse" data-bs-parent=".accordion-list">
                        <p>{item.content}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid" data-aos="fade-up">
          <div className="section-title">
            <h2>Get Started Today!</h2>
            <p>
              Don’t leave your organization vulnerable to cyber threats.
              <br />
              Partner with Bytespath Solutions for comprehensive cybersecurity services that protect your business and
              give you peace of mind.
              <br />
              Contact us today to learn more about how we can help safeguard your digital assets.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default CyberSecurity;
