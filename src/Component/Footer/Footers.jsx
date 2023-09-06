import React from "react";
import "./footers.css";

const Footers = () => {
  return (
    <>
      <footer>
        <div className="air air1"></div>
        <div className="air air2"></div>
        <div className="air air3"></div>
        <div className="air air4"></div>
        <div className="footer-container">
          <div className="about group">
            <h2>Ayush Kumar</h2>
            <p>Full-stack Developer</p>
          </div>
          {/* <div className="info group info-last">
              <ul>
                <li>
                  <a href="#skills">Skills</a>
                </li>
                <li>
                  <a href="#services">Services</a>
                </li>
                <li>
                  <a href="#portfolio">Portfolio</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div> */}
          <div className="follow group">
            <div className="icons">
              <ul className="unord foot">
                <li className="list">
                  <a href="#">
                    <i className="fab fa-github icon"></i>{" "}
                  </a>
                </li>
                <li className="list">
                  <a href="#">
                    <i className="fab fa-x-twitter icon"></i>
                  </a>
                </li>
                <li className="list">
                  <a href="#">
                    <i className="fab fa-linkedin-in icon"></i>
                  </a>
                </li>
                <li className="list">
                  <a href="#">
                    <i className="fab fa-instagram icon"></i>
                  </a>
                </li>
                <li className="list">
                  <a href="#">
                    <i className="fab fa-google icon"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright group">
          <p>© 2023 By Coding Ayush. All rights are reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footers;
