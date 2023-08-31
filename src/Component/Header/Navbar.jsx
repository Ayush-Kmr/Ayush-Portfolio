import React, { useEffect, useState } from "react";
import "./navbar.css";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.getElementById("menu-bar").classList.add("responsive-nav");
    } else {
      document.getElementById("menu-bar").classList.remove("responsive-nav");
    }

    // Add scroll event listener to remove the responsive-nav class on scroll
    const handleScroll = () => {
      document.getElementById("menu-bar").classList.remove("responsive-nav");
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [menuOpen]);

  return (
    <>
      <header>
        <div className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
          <MenuIcon />
        </div>
        <div className="hide-div" id="menu-bar">
          <div className="nav-bar">
            <a href="#" className="logo">
              <span>AYUSH KUMAR</span>
            </a>
            <div className="navigation">
              <div className="nav-items">
                <a className="active hover-underline-animation" href="#home">
                  Home
                </a>
                <a className="hover-underline-animation" href="#about">
                  About
                </a>
                <a className="hover-underline-animation" href="#education">
                  Education
                </a>
                <a className="hover-underline-animation" href="#skills">
                  Skills
                </a>
                <a className="hover-underline-animation" href="#portfolio">
                  Portfolio
                </a>
                <a className="hover-underline-animation" href="#contact">
                  Contact
                </a>
              </div>
            </div>
          </div>
          <div className="nav-menu-btn"></div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
