import React, { useState } from "react";
import '../App.css'; 

const Home = () => {
    const [loading, setLoading] = useState(false);
      const [message, setMessage] = useState("");
      const [isSuccess, setIsSuccess] = useState(false);
    
      const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent default form submission
        setLoading(true);
        setMessage("");
    
        const form = event.target;
        const formData = new FormData(form);
    
        try {
          const response = await fetch(form.action, {
            method: form.method,
            body: formData,
          });
    
          const result = await response.json();
    
          if (result.result === "success") {
            setMessage("Your message has been sent. Thank you!");
            setIsSuccess(true);
            form.reset(); // Reset form fields
          } else {
            setMessage("Something went wrong. Please try again.");
            setIsSuccess(false);
          }
        } catch (error) {
          setMessage("Error submitting the form. Please try again.");
          setIsSuccess(false);
        }
    
        setLoading(false);
      };
    
  return (
    <div>
      <section id="hero" className="d-flex align-items-center position-relative">
        
        <video autoPlay loop muted playsInline className="hero-background-video">
            <source src="assets/img/hometab/Bytespath Website Home page BG Video - Made with Clipchamp.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>

        <div className="container text-center text-white position-relative z-index-1">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h1 className="display-4 fw-bold">Bytespath Solutions</h1>
              <h2 className="fs-4">Crafting Imagination</h2>
              <div>
                <br />
                <a className="getstartedcta" href="https://docs.google.com/forms/d/e/1FAIpQLSdgoXfcZFjGUjCr4RdIZsxSHFtN49rTMjPl0lodUE98ZrRcXw/viewform">
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
     

      <main id="main">
        <section id="services" className="services">
          <div className="container" data-aos="fade-up">
            <div className="row justify-content-center">
              <div className="col-lg-6 col-md-12 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                <div className="icon-box" style={{ backgroundImage: 'url(/assets/img/hometab/Insight1.webp)' }}>
                <p>At Bytespath Solutions, we understand that investing in advanced security technologies is not
                    just a necessity but a strategic imperative. By leveraging cutting-edge solutions powered by
                    artificial intelligence and machine learning, we empower our clients to safeguard their data and
                    maintain trust with their customers. In this dynamic environment, prioritizing cybersecurity is
                    crucial for achieving long-term success and resilience.</p>
                </div>
              </div>

              <div className="col-lg-6 col-md-12 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                <div className="icon-box" style={{ backgroundImage: 'url(/assets/img/hometab/Insight2.jpg)' }}>
                <p>Integrating technology into every aspect of operations, we help organizations achieve greater
                agility and effectiveness, ensuring they remain at the forefront of this dynamic industry.</p>
                </div>
              </div>
            </div>

            <div className="row justify-content-center row-gap">
              <div className="col-lg-6 col-md-12 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                <div className="icon-box" style={{ backgroundImage: 'url(/assets/img/hometab/Insight3.jpg)' }}>
                <p>The corporate sector is rapidly evolving, driven by technological advancements and changing
                  consumer expectations. In today’s competitive landscape, businesses must embrace innovation
                  and adaptability to thrive. Companies are increasingly leveraging digital transformation to
                  streamline operations, enhance customer experiences, and drive sustainable growth.</p>
                </div>
              </div>

              <div className="col-lg-6 col-md-12 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                <div className="icon-box" style={{ backgroundImage: 'url(/assets/img/hometab/Insight4.jpg)' }}>
                <p>We are committed to supporting the automotive industry through advanced technologies that
                  enhance safety, efficiency, and connectivity. Our innovative solutions enable manufacturers and
                  suppliers to optimize production processes, improve vehicle performance, and deliver
                  exceptional user experiences. By embracing this shift towards a smarter, greener future, we
                  help our clients navigate the complexities of the modern automotive landscape.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

       
        {/* ======= Contact Section ======= */}
        <section id="contact" className="contact">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Contact</h2>
          </div>

          <div className="row">
            {/* Contact Info */}
            <div className="col-lg-5 d-flex align-items-stretch">
              <div className="info">
                <div className="address">
                  <i className="bi bi-geo-alt"></i>
                  <h4>Location</h4>
                  <p>Mumbai, India</p>
                </div>

                <div className="email">
                  <i className="bi bi-envelope"></i>
                  <h4>Email</h4>
                  <p>
                    <a href="mailto:info@bytespath.in">info@bytespath.in</a>
                  </p>
                </div>

                <div className="phone">
                  <i className="bi bi-phone"></i>
                  <h4>Call</h4>
                  <p>+91 8484871810</p>
                </div>

                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.03900799053!2d72.88118615!3d19.082250749999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1718615217999!5m2!1sen!2sin"
                  frameBorder="0"
                  style={{ border: 0, width: '100%', height: '290px' }}
                  allowFullScreen
                  title="Google Map"
                ></iframe>
              </div>
            </div>

            {/* Contact Form */}
            <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
              <form
                action="https://script.google.com/macros/s/AKfycbz7W0g58qz_nPcVekQu8sQGz6wTaVVdwIo-GO7v_WLq6m7KPcE1e5Au_UPBTrM8Iuv9wQ/exec"
                method="post"
                role="form"
                name="contact-form"
                className="email-form"
                onSubmit={handleSubmit}
              >
                <div className="row">
                  <div className="form-group col-md-6">
                    <label htmlFor="name">Your Name</label>
                    <input type="text" name="name" className="form-control" id="name" required />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="email">Your Email</label>
                    <input type="email" className="form-control" name="email" id="email" required />
                  </div>
                </div>
                <div className="row">
                  <div className="form-group col-md-6">
                    <label htmlFor="phone">Mobile Number</label>
                    <input type="text" className="form-control" name="phone" id="phone" required />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="subject">Subject</label>
                    <input type="text" className="form-control" name="subject" id="subject" required />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea className="form-control" name="message" rows="10" required></textarea>
                </div>

                {/* Submit Button */}
                <div className="text-center">
                  <button type="submit" disabled={loading}>
                    {loading ? "Sending..." : "Send Message"}
                  </button>
                </div>

                {/* Success/Error Message Below Button */}
                {message && (
                  <div
                    style={{
                      marginTop: "10px",
                      color: isSuccess ? "green" : "red",
                      textAlign: "center",
                      fontWeight: "bold",
                    }}
                  >
                    {message}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
      
        <footer id="footer">
          <div className="footer-newsletter">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-6">
                  <h4>Join Our Newsletter</h4>
                  <form action="" method="post">
                    <input type="email" name="email" />
                    <input type="submit" value="Subscribe" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </footer>
        {/* End Contact Section */}
      </main>
    </div>
  );
};

export default Home;
