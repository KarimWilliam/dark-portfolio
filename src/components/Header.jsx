import React from "react";
import waveBanner from "./WaveBanner.svg";

function Header() {
  return (
    <div className="header">
      <div className="topnav">
        <div className="only-show-on-big-screens">
          <img
            src={require("../images/rainbow.avif")}
            alt="rainbow strip"
            height="40"
            width="auto"
          />
        </div>
        <div>
          <a href="#projects">Projects</a>
          <a href="#About">About</a>
          <a href="#Contact">Contact</a>
        </div>
      </div>
      <img
        src={waveBanner}
        height="423"
        width="1902"
        alt="destopian building banner"></img>
    </div>
  );
}

export default Header;
