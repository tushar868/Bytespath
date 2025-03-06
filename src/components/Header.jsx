import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../App.css";

const Header = () => {
  const [navbarMobile, setNavbarMobile] = useState(false);
  const [headerScrolled, setHeaderScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({
    company: false,
    services: false,
    industries: false,
  });

  const toggleNavbar = () => {
    setNavbarMobile(!navbarMobile);
  };

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setHeaderScrolled(true);
    } else {
      setHeaderScrolled(false);
    }
  };

  const toggleDropdown = (dropdown) => {
    if (navbarMobile) {
      setDropdownOpen((prevState) => ({
        ...prevState,
        [dropdown]: !prevState[dropdown],
      }));
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      id="header"
      className={`fixed-top ${headerScrolled ? "header-scrolled" : ""}`}
    >
      <div className="container d-flex align-items-center">
        <NavLink to="/" className="logo d-flex align-items-center me-auto">
          <img
            src="/assets/img/companylogo/Bytespathh.png"
            alt="Company Logo"
          />
        </NavLink>

        <nav id="navbar" className={`navbar ${navbarMobile ? "navbar-mobile" : ""}`}>
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
                onClick={() => setNavbarMobile(false)}
              >
                Home
              </NavLink>
            </li>
            <li className="dropdown">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  toggleDropdown("company");
                }}
              >
                <span>Company</span>
                <i className={`bi ${dropdownOpen.company ? "bi-chevron-up" : "bi-chevron-down"}`}></i>
              </a>
              <ul className={dropdownOpen.company ? "show" : ""}>
                <li>
                  <NavLink to="/company/overview" onClick={() => setNavbarMobile(false)}>
                    Overview
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/company/leadership" onClick={() => setNavbarMobile(false)}>
                    Leadership
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/company/about-us" onClick={() => setNavbarMobile(false)}>
                    About Us
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="dropdown">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  toggleDropdown("services");
                }}
              >
                <span>Services</span>
                <i className={`bi ${dropdownOpen.services ? "bi-chevron-up" : "bi-chevron-down"}`}></i>
              </a>
              <ul className={dropdownOpen.services ? "show" : ""}>
                <li>
                  <NavLink to="/services/managed-it-security-services" onClick={() => setNavbarMobile(false)}>
                  Managed IT & Security Services – MSP & MSSP
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/services/website-development" onClick={() => setNavbarMobile(false)}>
                    Website Development & Hosting
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/services/mobile-app-development" onClick={() => setNavbarMobile(false)}>
                    Mobile App Development & Maintenance
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/services/software-development" onClick={() => setNavbarMobile(false)}>
                    Software Development & Maintenance
                  </NavLink>
                </li>
                
                <li>
                  <NavLink to="/services/it-business" onClick={() => setNavbarMobile(false)}>
                    IT & Business Consulting
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/services/ar-vr-technology" onClick={() => setNavbarMobile(false)}>
                    AR/VR Technology
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/services/ai-technology" onClick={() => setNavbarMobile(false)}>
                    AI Technology
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/services/vfx-cgi" onClick={() => setNavbarMobile(false)}>
                    VFX & CGI
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/services/cyber-security" onClick={() => setNavbarMobile(false)}>
                    Cyber Security
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/services/cloud-hosting" onClick={() => setNavbarMobile(false)}>
                    Cloud Hosting & Cloud Computing
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="dropdown">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  toggleDropdown("industries");
                }}
              >
                <span>Industries</span>
                <i className={`bi ${dropdownOpen.industries ? "bi-chevron-up" : "bi-chevron-down"}`}></i>
              </a>
              <ul className={dropdownOpen.industries ? "show" : ""}>
                <li>
                  <NavLink to="/industries/it" onClick={() => setNavbarMobile(false)}>
                    IT
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/industries/education" onClick={() => setNavbarMobile(false)}>
                    Education
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/industries/health-care" onClick={() => setNavbarMobile(false)}>
                    Health Care
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/industries/retail-ecommerce" onClick={() => setNavbarMobile(false)}>
                    Retail and E-Commerce
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/industries/finance-banking" onClick={() => setNavbarMobile(false)}>
                    Finance and Banking
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/industries/manufacturing" onClick={() => setNavbarMobile(false)}>
                    Manufacturing
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/industries/media-entertainment" onClick={() => setNavbarMobile(false)}>
                    Media and Entertainment
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/industries/real-estate" onClick={() => setNavbarMobile(false)}>
                    Real Estate
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/industries/logistic-transport" onClick={() => setNavbarMobile(false)}>
                    Logistic and Transportation
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/industries/aerospace-defence" onClick={() => setNavbarMobile(false)}>
                    Aerospace and Defence
                  </NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink to="/investor" className="nav-link" onClick={() => setNavbarMobile(false)}>
                Investor
              </NavLink>
            </li>
            <li>
              <NavLink to="/partners" className="nav-link" onClick={() => setNavbarMobile(false)}>
                Partners
              </NavLink>
            </li>
            <li>
              <NavLink to="/careers" className="nav-link" onClick={() => setNavbarMobile(false)}>
                Careers
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact-us" className="nav-link" onClick={() => setNavbarMobile(false)}>
                Contact Us
              </NavLink>
            </li>
            <li>
              <a
                className="getstarted"
                href="https://docs.google.com/forms/d/e/1FAIpQLSdgoXfcZFjGUjCr4RdIZsxSHFtN49rTMjPl0lodUE98ZrRcXw/viewform"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setNavbarMobile(false)}
              >
                Get Started
              </a>
            </li>
          </ul>
          <i
            className={`bi ${navbarMobile ? "bi-x" : "bi-list"} mobile-nav-toggle`}
            onClick={toggleNavbar}
          ></i>
        </nav>
      </div>
    </header>
  );
};

export default Header;
