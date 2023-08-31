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
                  A Lead <span>Front-End Developer</span> practicing to be
                  better in future.
                </h4>
                <p>
                  As a forward-thinking engineering student, I've emerged as a
                  leading developer through a series of impactful projects. My
                  expertise in full stack development shines as I architect
                  innovative solutions, pushing boundaries and delivering
                  excellence through meticulously crafted code.
                </p>
              </div>
              <ul className="ul-professional-list">
                <li className="list-item">
                  <h3>1+</h3>
                  <span>Years of experience</span>
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
              <a href="" id="dbtn" download className="btn button-30">
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
