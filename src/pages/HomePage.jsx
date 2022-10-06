import React from "react";
import reviewImg from "../images/reviewsite.avif";
import commerceImg from "../images/commerce.avif";
import RightArrow from "../components/RightArrow.svg";

function HomePage() {
  return (
    <div className="page-layout">
      <h2 id="projects">Projects</h2>
      <div className="projects">
        {/* game reviews */}
        <div className=" ">
          <h3 className="title">
            <a
              className="title"
              rel="noopener noreferrer"
              target="_blank"
              href="https://dark-game-reviews.cyclic.app">
              Dark Game reviews{" "}
              <img width={"20px"} src={RightArrow} alt="right arrow"></img>
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
              <img width={"20px"} src={RightArrow} alt="right arrow"></img>
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
      </div>
      <h2 id="About">About </h2>
      <h3 className="big-text">
        Karim William
        <span style={{ fontWeight: "100" }}>
          {" "}
          - Web Developer Extraordinaire
        </span>
      </h3>
      <div className="about-container">
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
              Hobbies include video games, cooking, fishing and working out.{" "}
            </li>
          </ul>
        </div>
        <div className="about-elements">
          <h4>Contact me if you need...</h4>
          <ul>
            <li>
              A Custom website. Created from the grounds up, tailored to your
              specific needs.
            </li>
            <li>A modern clean look for your website.</li>
            <li> Industry standard, Modular code.</li>
            <li>To implement an existing website design.</li>
            <li>
              Moral or emotional support (this service is included free of
              charge)
            </li>
          </ul>
        </div>
      </div>
      <h2 id="Contact">Contact Info</h2>
      <ul className="bottom-ul">
        <li>
          <span className="fw-bold">FreeLancer: </span> Karim William
        </li>
        <li>
          <span className="fw-bold">Fiverr: </span> darkarim
        </li>
        <li>
          <span className="fw-bold">Email: </span> karim.william7@gmail.com
        </li>
        <li>
          <span className="fw-bold">Discord: </span> dark#3578
        </li>
        <li>
          <span className="fw-bold ">
            I will professionally build your a website with up to date
            technology and industry standard methodology.
            <br /> Contact me now... Or later whenever is convenient
          </span>
        </li>
      </ul>
    </div>
  );
}

export default HomePage;
