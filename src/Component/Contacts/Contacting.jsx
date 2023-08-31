import React from "react";
import "./contacting.css";

const contact = () => {
  return (
    <>
      <section className="contact section" id="contact">
        <div className="container flex-center">
          <h1 className="section-title-01">Contact Me</h1>
          <h2 className="section-title-02">Contact Me</h2>
          <div className="content">
            <div className="contact-left">
              <h2>Let's Discuss Your Project</h2>
              <img
                src={require("../../Assets/geographic map compass.png")}
                alt=""
                className="contact-img"
              />
            </div>
            <div className="contact-right">
              <form name="submit-to-google-sheet" className="contact-form">
                <span id="msg"></span>
                <div className="first-row">
                  <input
                    type="text"
                    name="Name"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="second-row">
                  <input
                    type="email"
                    name="Email"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div className="third-row">
                  <textarea
                    name="Message"
                    id=""
                    rows="7"
                    placeholder="Your Message"
                    required
                  ></textarea>
                </div>
                <button className="btn button-30" type="submit">
                  Submit
                  <div className="space">
                    <i className="fas fa-paper-plane"></i>
                  </div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default contact;
