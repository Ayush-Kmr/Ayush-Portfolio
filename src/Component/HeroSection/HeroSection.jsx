import React from "react";
import "./herosection.css";
import { Typewriter, useTypewriter, Cursor } from "react-simple-typewriter";
import Icons from "../Header/Icons";
import zIndex from "@mui/material/styles/zIndex";

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
              I'm an aspiring engineering student at Lovely Professional
              University with a relentless passion for all things about
              Full-Stack Development. Eagerly delving into the realms of
              front-end and back-end development, I'm on a journey to master the
              art of creating seamless digital experiences. Innovation and
              problem-solving drive my quest for excellence.
            </p>
            <a href="#" className="btn button-30" id="hire">
              Hire Me
              <div className="space">
                <i className="fas fa-arrow-circle-right"></i>
              </div>
            </a>
            <a href="#" className="btn button-30">
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
