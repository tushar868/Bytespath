import React, { useEffect } from "react";
import "../../App.css";

const Overview = () => {

  return (
    <>
      <section id="call-to-action" className="call-to-action section dark-background">
        <img src="../../assets/img/cta-bg.jpg" alt=""/>
        <div className="container">
          <div className="row" data-aos="zoom-in" data-aos-delay="100">
            <div className="col-lg-12">
              <h1>Overview</h1>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="about section-bg">
        <div className="container" data-aos="fade-up">
          <div className="row content">
            <div className="col-lg-6">
              <ul>
                <li><i className="ri-check-double-line"></i> Bytespath Solutions is a technology-driven company that offers a variety of services to help
                  businesses, particularly startups and new-generation founders, scale up their operations and
                  enhance their market presence. The company specializes in software development, digital
                  marketing, website hosting and development, mobile app development, and business
                  consulting services. By leveraging advanced technologies, Bytespath Solutions helps
                  businesses move from the startup phase to enterprise-level operations on a global scale.
                </li>
              </ul>
            </div>
            <div className="col-lg-6">
              <ul>
                <li><i className="ri-check-double-line"></i> Bytespath Solutions supports clients by providing strategic tools and services to improve their
                  digital footprint, streamline operations, and generate sustainable growth. With a focus on
                  innovative solutions, the company has successfully generated substantial leads and revenue for
                  businesses, helping them thrive in competitive markets.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Overview;
