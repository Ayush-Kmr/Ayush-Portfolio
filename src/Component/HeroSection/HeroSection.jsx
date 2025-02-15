import React from "react";
import "./herosection.css";
import { Typewriter } from "react-simple-typewriter";
import Icons from "../Header/Icons";
// import zIndex from "@mui/material/styles/zIndex";

const HeroSection = () => {
  return (
    <>
      <section className="home flex-center" id="home">
        <div className="home-container center">
          <div className="mobile-icon">
            <Icons />
          </div>
          <div className="info">
            <h2>Hey,I am Ayush Kumar</h2>
            <div className="container1">
              <span className="text sec-text">
                <Typewriter
                  words={["Student", "Coder", "Developer"]}
                  loop
                  cursor
                  cursorStyle=" "
                  typeSpeed={100}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </div>
            <div className="non-mobile">
              <Icons />
            </div>
            <p className="homedetails">
              I’m a passionate Software Engineering student at Lovely
              Professional University with hands-on experience in technologies
              like Java, C++, ReactJS, and Spring Boot. Currently working as a
              Software Engineering Intern at <b>Cashfree Payments</b>, I’ve
              contributed to optimizing payment services and enhancing
              server-side performance. Through my internships and personal
              projects, I’ve gained expertise in both front-end and back-end
              development, always striving to create scalable, efficient, and
              user-friendly digital solutions. Problem-solving and continuous
              learning drive my passion for delivering high-impact digital
              experiences.
            </p>
            <a
              href="mailto:krayushkumar01@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="btn button-30"
              id="hire"
            >
              Hire Me
              <div className="space">
                <i className="fas fa-arrow-circle-right"></i>
              </div>
            </a>
            <a
              href="https://t.me/ayushoppenheimer"
              target="_blank"
              rel="noreferrer"
              className="btn button-30"
            >
              Lets's Talk
              <div className="space">
                <i className="fas fa-arrow-circle-right"></i>
              </div>
            </a>
          </div>
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front"></div>
              <div className="home-img">
                <img
                  src={require("../../Assets/rups.png")}
                  className="round-img"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <a href="#about" className="scroll-down">
          Scroll Down <i className="fas fa-arrow-down"></i>
        </a>
      </section>
    </>
  );
};

export default HeroSection;
