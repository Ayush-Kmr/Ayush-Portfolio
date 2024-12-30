import React from "react";
import "./about.css";

const About = () => {
  return (
    <>
      <section className="about section" id="about">
        <div className="container flex-center">
          <h1 className="section-title-01">About Me</h1>
          <h2 className="section-title-02">About Me</h2>
          <div className="content flex-center">
            <div className="about-img">
              <img src={require("../../Assets/arups.png")} alt="" />
            </div>
            <div className="about-info">
              <div className="description">
                <h3>I'm Ayush Kumar</h3>
                <h4>
                  A <span>Software Engineer</span> striving to excel in the ever
                  evolving tech landscape.
                </h4>
                <p>
                  Currently at Cashfree Payments, I specialize in backend
                  development and API design, creating secure and efficient
                  payment solutions. My work focuses on optimizing performance,
                  ensuring seamless integrations, and delivering reliable,
                  future-ready code. With a problem-solving mindset, I strive
                  for innovation and excellence in every project.
                </p>
              </div>
              <ul className="ul-professional-list">
                <li className="list-item">
                  {/* <h3>1+</h3>
                  <span>Years of experience</span> */}
                </li>
                <li className="list-item">
                  {/* <h3>5+</h3>
                  <span>Years of experience</span> */}
                </li>
                <li className="list-item">
                  {/* <h3>5+</h3> */}
                  {/* <span>Years of experience</span> */}
                </li>
              </ul>
              <a
                href={require("../../Assets/Resume.pdf")}
                id="dbtn"
                download
                className="btn button-30"
              >
                Download CV{""}
                <div className="space">
                  <i className="fas fa-download"></i>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
