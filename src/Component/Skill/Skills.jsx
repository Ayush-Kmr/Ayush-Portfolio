import React from "react";
import "./skills.css";

const Skills = () => {
  return (
    <>
      <section className="skills section" id="skills">
        <div className="container flex-center">
          <h1 className="section-title-01">Skills</h1>
          <h1 className="section-title-02">Skills</h1>
          <div className="skills-container bd-grid">
            <div>
              <div className="skills-data">
                <div className="skills-names">
                  <i className="bx bxl-html5 skills-icon"></i>
                  <span className="skills-name">HTML</span>
                </div>
              </div>
              <div className="skills-data">
                <div className="skills-names">
                  <i className="bx bxl-css3 skills-icon"></i>
                  <span className="skills-name">CSS</span>
                </div>
              </div>
              <div className="skills-data">
                <div className="skills-names">
                  <i className="bx bxl-javascript skills-icon"></i>
                  <span className="skills-name">JavaScript</span>
                </div>
                <div></div>
              </div>
              <div className="skills-data">
                <div className="skills-names">
                  <i className="bx bxl-react skills-icon"></i>
                  <span className="skills-name">React</span>
                </div>
                <div></div>
              </div>
              <div className="skills-data">
                <div className="skills-names">
                  <i className="bx bxl-redux skills-icon"></i>
                  <span className="skills-name">Redux</span>
                </div>
                <div></div>
              </div>

              <div className="skills-data">
                <div className="skills-names">
                  <img
                    className="skills-icon"
                    src={require("../../Assets/typescript.png")}
                    alt=""
                  />
                  <span className="skills-name">TypeScript</span>
                </div>
              </div>
            </div>
            <div>
              <div className="skills-data">
                <div className="skills-names">
                  <img
                    className="skills-icon"
                    src={require("../../Assets/express.png")}
                    alt=""
                  />
                  <span className="skills-name">Express.js</span>
                </div>

                <div></div>
              </div>

              <div className="skills-data">
                <div className="skills-names">
                  <i className="bx bxl-nodejs skills-icon"></i>
                  <span className="skills-name">Node.js</span>
                </div>

                <div></div>
              </div>

              <div className="skills-data">
                <div className="skills-names">
                  <img
                    className="skills-icon"
                    src={require("../../Assets/mongodb.png")}
                    alt=""
                  />
                  <span className="skills-name">MongoDB</span>
                </div>
                <div></div>
              </div>
              <div>
                <div className="skills-data">
                  <div className="skills-names">
                    <img
                      className="skills-icon"
                      src={require("../../Assets/git.png")}
                      alt=""
                    />
                    <span className="skills-name">Github</span>
                  </div>
                </div>

                <div className="skills-data">
                  <div className="skills-names">
                    <img
                      className="skills-icon"
                      src={require("../../Assets/git.png")}
                      alt=""
                    />
                    <span className="skills-name">Git</span>
                  </div>
                </div>
                <div className="skills-data">
                  <div className="skills-names">
                    <img
                      className="skills-icon"
                      src={require("../../Assets/dsa.png")}
                      alt=""
                    />
                    <span className="skills-name">DSA</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
