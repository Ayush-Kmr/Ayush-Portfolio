import React from "react";
import "./skills.css";

const skilldata1 = [
  {
    id: 1,
    image: require("../../Assets/html.png"),
    name: "HTML",
  },
  {
    id: 2,
    image: require("../../Assets/css.png"),
    name: "CSS",
  },
  {
    id: 3,
    image: require("../../Assets/js.png"),
    name: "Javascript",
  },
  {
    id: 4,
    image: require("../../Assets/tailwind.png"),
    name: "Tailwind",
  },
  {
    id: 5,
    image: require("../../Assets/bootstrap.png"),
    name: "Bootstrap",
  },
  {
    id: 6,
    image: require("../../Assets/react.png"),
    name: "React",
  },
];

const skilldata2 = [
  {
    id: 1,
    image: require("../../Assets/c.png"),
    name: "C",
  },
  {
    id: 2,
    image: require("../../Assets/c++.png"),
    name: "C++",
  },
  {
    id: 3,
    image: require("../../Assets/java.png"),
    name: "Java",
  },
  {
    id: 4,
    image: require("../../Assets/dsa.png"),
    name: "DSA",
  },
  {
    id: 5,
    image: require("../../Assets/git.png"),
    name: "Git",
  },
  {
    id: 6,
    image: require("../../Assets/github.png"),
    name: "Github",
  },
];

const Skills = () => {
  return (
    <>
      <section className="skills section" id="skills">
        <div className="container flex-center">
          <h1 className="section-title-01">Skills</h1>
          <h1 className="section-title-02">Skills</h1>
          <div className="skills-container bd-grid">
            {/* Skill1 */}
            <div>
              {skilldata1.map(({ id, image, name }) => {
                return (
                  <div>
                    <div className="skills-data grid-container" key={id}>
                      <div className="skills-names">
                        <img className="skills-icon" src={image} alt="" />
                        <span className="skills-name">{name}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Skills-2 */}
            <div>
              {skilldata2.map(({ id, image, name }) => {
                return (
                  <div>
                    <div className="skills-data grid-container" key={id}>
                      <div className="skills-names">
                        <img className="skills-icon" src={image} alt="" />
                        <span className="skills-name">{name}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
