import React from "react";
import "./education.css";

const expData = [
  {
    id: 1,
    position: "Web Developer",
    role: "Intern",
    duration: "June(2023) - July(2023) ",
    cname: "Techtwins Technologies",
    URL: "https://techtwins.co.in/",
    description:
      "At TechTwins Technologies' summer internship, I excelled as a web developer intern, gaining valuable hands-on experience, enhancing coding skills, and actively contributing to real-world projects.",
  },
  // {
  //   id: 2,
  //   position: "Web Developer",
  //   role: "Intern",
  //   duration: "2020-2021",
  //   cname: "Techtwins Technologies",
  //   URL: "ayush kumar",
  //   description:
  //     "  Lorem ipsum dolor sit amet consectetur adipisicing elit.Dolorem ipsam ratione eaque nihil. Fuga, voluptatem.",
  // },
];

const Education = () => {
  return (
    <>
      <section className="skillss section" id="education">
        <div className="container flex-center">
          <h1 className="section-title-01">Education</h1>
          <h1 className="section-title-02">Education</h1>
          <div className="content">
            <div className="skill-description">
              <h3>Education</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Praesentium quam deserunt ad minima incidunt dolore aliquam odio
                libero pariatur omnis? Excepturi obcaecati commodi cum delectus?
              </p>
            </div>
            <div className="skillss-info education-all">
              <div className="education">
                <ul className="edu-list">
                  <li className="item">
                    <span className="year">2017-2019</span>
                    <p>
                      <span>CBSE 10th </span> City Convent School
                    </p>
                  </li>
                  <li className="item">
                    <span className="year">2019-2021</span>
                    <p>
                      <span>CBSE 12th </span> City Convent School
                    </p>
                  </li>
                  <li className="item">
                    <span className="year">2021-Present</span>
                    <p>
                      <span>BTECH-CSE </span> Lovely Professional University
                    </p>
                  </li>
                </ul>
              </div>
              <div className="img">
                <img
                  src={require("../../Assets/profile.gif")}
                  alt=""
                  className="gifg"
                />
              </div>
            </div>
            <div className="skill-description">
              <h3>Works & Experience</h3>
            </div>
            <div className="skillss-info">
              {expData.map(
                ({ id, position, role, duration, URL, description, cname }) => {
                  return (
                    <div className="experience-card" key={id}>
                      <div className="upper">
                        <h3>{position}</h3>
                        <h5>{role}</h5>
                        <span>{duration}</span>
                      </div>
                      <div className="hr"></div>
                      <h4>
                        {/* <label className="btn button-30">{cname}</label> */}
                        <a href={URL} className="btn button-30" target="blank">
                          {cname}
                        </a>
                      </h4>
                      <p>{description}</p>
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Education;
