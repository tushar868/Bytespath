import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; // Make sure to import the CSS for styling

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            {/* Contact Information */}
            <div className="col-lg-3 col-md-6 footer-contact">
              <a href="/" className="logo d-flex align-items-center me-auto">
                <img src="/assets/img/companylogo/Bytespathh.png" alt="Logo" />
              </a>
              <div className="footer-contact-p">
                <p><strong>Registered office<br /></strong>Sinner Phata, Nashik, Maharashtra, India</p>
                <p><strong>Operational HeadQuarter<br /></strong>Mumbai, Maharashtra, India</p>
                <p><strong>Contact Number<br /></strong><a href="tel:+918484871810">+91 8484871810</a></p>
                <p><strong>For More Information<br /></strong><a href="mailto:info@bytespath.in">info@bytespath.in</a></p>
              </div>
            </div>

            {/* Services Section */}
            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Services</h4>
              <ul>
                <li><i className="bx bx-chevron-right"></i> <Link to="/services/managed-it-security-services">Managed IT & Security Services – MSP & MSSP</Link></li>
                <li><i className="bx bx-chevron-right"></i> <Link to="/services/website-development">Website Development & Hosting</Link></li>
                <li><i className="bx bx-chevron-right"></i> <Link to="/services/mobile-app-development">Mobile App Development & Maintenance</Link></li>
                <li><i className="bx bx-chevron-right"></i> <Link to="/services/software-development">Custom Software Development & Maintenance</Link></li>
                <li><i className="bx bx-chevron-right"></i> <Link to="/services/it-business">IT & Business Consulting</Link></li>
                <li><i className="bx bx-chevron-right"></i> <Link to="/services/ar-vr-technology">AR/VR Technology</Link></li>
                <li><i className="bx bx-chevron-right"></i> <Link to="/services/ai-technology">AI Technology</Link></li>
                <li><i className="bx bx-chevron-right"></i> <Link to="/services/vfx-cgi">VFX & CGI</Link></li>
                <li><i className="bx bx-chevron-right"></i> <Link to="/services/cyber-security">Cyber Security</Link></li>
                <li><i className="bx bx-chevron-right"></i> <Link to="/services/cloud-hosting">Cloud Hosting & Cloud Computing</Link></li>
              </ul>
            </div>

            {/* Industries Section */}
            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Industries</h4>
              <ul>
                <li><i className="bx bx-chevron-right"></i> <Link to="/industries/it">IT</Link></li>
                <li><i className="bx bx-chevron-right"></i> <Link to="/industries/education">Education</Link></li>
                <li><i className="bx bx-chevron-right"></i> <Link to="/industries/health-care">Health Care</Link></li>
                <li><i className="bx bx-chevron-right"></i> <Link to="/industries/retail-ecommerce">Retail and E-Commerce</Link></li>
                <li><i className="bx bx-chevron-right"></i> <Link to="/industries/finance-banking">Finance and Banking</Link></li>
                <li><i className="bx bx-chevron-right"></i> <Link to="/industries/manufacturing">Manufacturing</Link></li>
                <li><i className="bx bx-chevron-right"></i> <Link to="/industries/media-entertainment">Media and Entertainment</Link></li>
                <li><i className="bx bx-chevron-right"></i> <Link to="/industries/real-estate">Real Estate</Link></li>
                <li><i className="bx bx-chevron-right"></i> <Link to="/industries/logistic-transport">Logistic and Transportation</Link></li>
                <li><i className="bx bx-chevron-right"></i> <Link to="/industries/aerospace-defence">Aerospace and Defence</Link></li>
              </ul>
            </div>

            {/* Social Media Links */}
            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Our Social Networks</h4>
              <p>Follow Us</p>
              <div className="social-links mt-3">
                <a href="https://x.com/bytespath" className="twitter"><i className="bx bxl-twitter"></i></a>
                <a href="https://www.facebook.com/bytespath" className="facebook"><i className="bx bxl-facebook"></i></a>
                <a href="https://www.instagram.com/bytespath/" className="instagram"><i className="bx bxl-instagram"></i></a>
                <a href="https://in.pinterest.com/bytespathsolutions" className="google-plus"><i className="bx bxl-pinterest"></i></a>
                <a href="https://www.youtube.com/@Bytespathsolutions" className="google-plus"><i className="bx bxl-youtube"></i></a>
                <a href="https://www.linkedin.com/company/bytespathsolutions/" className="linkedin"><i className="bx bxl-linkedin"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="container footer-bottom clearfix">
        <div className="copyright">
          &copy; Copyright {new Date().getFullYear()} | Bytespath Solutions LLP & Sigiwent Group. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
