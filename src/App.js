import React, { useEffect, useState } from "react";
// import logo from "./logo.svg";
import "./App.css";
import Loader from "./Component/PreLoader/Loader";
import Navbar from "./Component/Header/Navbar";
import HeroSection from "./Component/HeroSection/HeroSection";
import About from "./Component/About/About.jsx";
import Education from "./Component/Education/Education.jsx";
import Skills from "./Component/Skill/Skills.jsx";
import Project from "./Component/Projects/Project.jsx";
import Getintouch from "./Component/GetinTouch/Getintouch";
import Contacting from "./Component/Contacts/Contacting";
import Footers from "./Component/Footer/Footers.jsx";
import "./Component/Buttons/button.css";
import "./Component/Responsive/responsive.css";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function App() {
  const particlesInit = async (main) => {
    console.log(main);
    await loadFull(main);
  };

  const [isLoading, setIsLoading] = useState(true);

  // Let create async method to fetch fake data
  useEffect(() => {
    const fakeDataFetch = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 1500);
    };

    fakeDataFetch();
  }, []);
  if (isLoading) return <Loader />;

  return (
    <>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: {
            enable: true,
            zIndex: 1,
          },
          particles: {
            number: {
              value: 40,
              density: {
                enable: true,
                value_area: 640,
              },
            },
            color: {
              value: "#1c68bb",
            },
            shape: {
              type: "polygon",
              stroke: {
                width: 0,
                color: "#000000",
              },
              polygon: {
                nb_sides: 5,
              },
              image: {
                src: "img/github.svg",
                width: 100,
                height: 100,
              },
            },
            opacity: {
              value: 0.199,
              random: false,
              anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
              },
            },
            size: {
              value: 4,
              random: true,
              anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false,
              },
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: "#364b62",
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 7,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 500,
                rotateY: 1000,
              },
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: true,
                mode: "repulse",
              },
              onclick: {
                enable: true,
                mode: "push",
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 200,
                line_linked: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 200,
                size: 30,
                duration: 2,
                opacity: 7,
                speed: 1,
              },
              repulse: {
                distance: 200,
                duration: 1,
              },
              push: {
                particles_nb: 4,
              },
              remove: {
                particles_nb: 2,
              },
            },
          },
          retina_detect: true,
        }}
      />

      <Navbar />
      <HeroSection />
      <About />
      <Education />
      <Skills />
      <Project />
      <Getintouch />
      <Contacting />
      <Footers />
    </>
  );
}

export default App;
