import React from "react";
import "./project.css";

const data = [
  {
    id: 1,
    image: require("../../Assets/crs.png"),
    name: "Car Rental",
    URL: "https://ayush-kmr.github.io/Car-Rental-System/",
    description:
      "Sleek car rental site: HTML, CSS, JavaScript. Streamlined navigation, intuitive interface",
  },
  {
    id: 2,
    image: require("../../Assets/psg.png"),
    name: "Passwrod Generator",
    URL: "https://ayush-kmr.github.io/Password-Generator/",
    description:
      "Advanced password generation,user-friendly interface, secure, private.",
  },

  {
    id: 3,
    image: require("../../Assets/FC.png"),
    name: "Flipkart CLone",
    URL: "https://ayush-kmr.github.io/Flipkart-Clone/",
    description:
      "HTML, CSS-based Flipkart clone for an authentic online shopping experience.",
  },

  {
    id: 4,
    image: require("../../Assets/grocery.png"),
    name: "Grocery Store",
    URL: "https://ayush-kmr.github.io/Grocery-Store/",
    description:
      "Online platform for convenient, fresh, and varied grocery shopping experience.",
  },

  {
    id: 5,
    image: require("../../Assets/work-1.png"),
    name: "Web App",
    URL: "#",
    description: "Comming Soon.",
  },

  {
    id: 6,
    image: require("../../Assets/work-1.png"),
    name: "Web App",
    URL: "#",
    description: "Comming Soon.",
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
                        <a href={URL} target="_blank">
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
