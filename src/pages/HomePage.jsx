import React from "react";
import reviewImg from "../images/reviewsite.avif";
import commerceImg from "../images/commerce.avif";
import RightArrow2 from "../components/RightArrow2.svg";
import pesksite from "../images/pesksite.webp";

function HomePage() {
  // document.documentElement.style.cssText = "--yellow-color: red";

  return (
    <div className="page-layout">
      <div className="intro">
        <div className="into">
          <h2 className="myname" style={{ textDecoration: "none" }}>
            Karim William{" "}
            <span style={{ fontWeight: "100" }}> - Web Developer</span>
          </h2>
          <p className="top-paragraph">
            My goal is to deliver you a ready-to-use website which will include
            tailored customizations, A modern clean look, as well as Industry
            standard, modular code.{" "}
            <a
              style={{ textDecoration: "none", color: "#e5007d" }}
              href="#Contact">
              Contact me{" "}
            </a>
            to help you build a website fit for your personal or business needs.
          </p>
        </div>
      </div>
      <h3 id="projects">Sample Websites</h3>
      <div className="projects">
        {/* game reviews */}
        <div>
          <h3 className="title">
            <a
              className="title"
              rel="noopener noreferrer"
              target="_blank"
              href="https://dark-game-reviews.cyclic.app">
              Dark Game Reviews{" "}
              <img width={"20px"} src={RightArrow2} alt="right arrow"></img>
            </a>
          </h3>
          <div className="review-project">
            <div className=" blur-card" id="blur-card">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://dark-game-reviews.cyclic.app">
                <img
                  height="300"
                  width="auto"
                  className="project-image"
                  src={reviewImg}
                  alt="review site img"></img>
              </a>
            </div>
            <h4 className="centered" id="centered">
              For those looking for unbiased reviews by a fellow gamer
            </h4>
          </div>
        </div>
        {/* commerce site */}
        <div className="">
          <h3 className="title">
            <a
              className="title"
              rel="noopener noreferrer"
              target="_blank"
              height="300"
              width="auto"
              href="https://dark-commerce.cyclic.app">
              Dark E-Commerce{" "}
              <img width={"20px"} src={RightArrow2} alt="right arrow"></img>
            </a>
          </h3>
          <div className="review-project">
            <div className=" blur-card" id="blur-card">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://dark-commerce.cyclic.app">
                <img
                  className="project-image"
                  src={commerceImg}
                  alt="commerce website"></img>
              </a>
            </div>
            <h4 className="centered" id="centered">
              Where items come to be sold…
            </h4>
          </div>
        </div>
        {/* peskales site */}
        <div className="">
          <h3 className="title">
            <a
              className="title"
              rel="noopener noreferrer"
              target="_blank"
              height="300"
              width="auto"
              href="https://www.peskalesclinics.com/">
              Peskales's Clinic{" "}
              <img width={"20px"} src={RightArrow2} alt="right arrow"></img>
            </a>
          </h3>
          <div className="review-project">
            <div className=" blur-card" id="blur-card">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://dark-commerce.cyclic.app">
                <img
                  className="project-image"
                  src={pesksite}
                  alt="clinic site"></img>
              </a>
            </div>
            <h4 className="centered" id="centered">
              Physical Therapy Clinic
            </h4>
          </div>
        </div>
      </div>
      <h3 id="About">About Section</h3>
      <div className="about-container">
        <div className="about-elements">
          <h4>Contact me if you need...</h4>
          <ul>
            <li>
              A Custom website. Created from the grounds up, tailored to your
              specific needs.
            </li>
            <li>A modern clean look for your website.</li>
            <li> Industry standard, Modular code.</li>
            <li>To implement an existing or new website design.</li>
          </ul>
        </div>
        <div className="about-elements">
          <h4>About Me</h4>
          <ul className="aboutme">
            <li>
              Graduated with a Computer Science &amp; Engineering degree from
              the German university in Cairo.
            </li>
            <li>
              My colleagues best describe me as… friendly, understanding and
              easy to work with.{" "}
            </li>
            <li>
              Hobbies include video games, cooking, swimming and working out.{" "}
            </li>
          </ul>
        </div>
      </div>
      <h3 id="Contact">Contact Info</h3>
      <ul className="bottom-ul">
        <li>
          <span className="fw-bold">Upwork: </span>
          {"  "}
          <a href="https://www.upwork.com/freelancers/~01a6ed113362861e00?viewMode=1">
            Karim William
          </a>
        </li>
        <li>
          <span className="fw-bold">Fiverr: </span>
          <a href="https://www.fiverr.com/share/GKBYz7"> darkarim</a>
        </li>
        <li>
          <span className="fw-bold">Email: </span> karim.william7@gmail.com
        </li>
        <li>
          <span className="fw-bold">Discord: </span> dark#3578
        </li>
      </ul>
    </div>
  );
}

export default HomePage;
