import React from "react";
import "./project.css";

const data = [
  {
    id: 1,
    image: require("../../Assets/work-1.png"),
    name: "Social App",
    URL: "#",
    description:
      "This app conncects you to the talented people arond the world. Download it from the play store.",
  },

  {
    id: 2,
    image: require("../../Assets/work-1.png"),
    name: "Social App",
    URL: "#",
    description:
      "This app conncects you to the talented people arond the world. Download it from the play store.",
  },

  {
    id: 3,
    image: require("../../Assets/work-1.png"),
    name: "Social App",
    URL: "#",
    description:
      "This app conncects you to the talented people arond the world. Download it from the play store.",
  },

  {
    id: 4,
    image: require("../../Assets/work-1.png"),
    name: "Social App",
    URL: "#",
    description:
      "This app conncects you to the talented people arond the world. Download it from the play store.",
  },

  {
    id: 5,
    image: require("../../Assets/work-1.png"),
    name: "Social App",
    URL: "#",
    description:
      "This app conncects you to the talented people arond the world. Download it from the play store.",
  },

  {
    id: 6,
    image: require("../../Assets/work-1.png"),
    name: "Social App",
    URL: "#",
    description:
      "This app conncects you to the talented people arond the world. Download it from the play store.",
  },
];

const Project = () => {
  return (
    <>
      <section className="portfolio section" id="portfolio">
        <div className="container flex-center">
          <h1 className="section-title-01">Portfolio</h1>
          <h2 className="section-title-02">Portfolio</h2>
          <div id="project">
            <div className="work-container">
              <div className="work-list">
                {data.map(({ id, image, name, URL, description }) => {
                  return (
                    <div className="work" key={id}>
                      <img src={image} />
                      <div className="layer">
                        <h3>{name}</h3>
                        <p>{description}</p>
                        <a href="#">
                          <i className="fa-solid fa-up-right-from-square"></i>
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;
