import React from "react";
import waveBanner from "./WaveBanner.svg";

function Header() {
  return (
    <>
      <div className="topnav">
        <div className="only-show-on-big-screens">
          <img src={require("../images/rainbow.avif")} alt="rainbow strip" />
        </div>
        <div>
          <a href="#projects">Projects</a>
          <a href="#About">About</a>
          <a href="#Contact">Contact</a>
        </div>
      </div>
      <img src={waveBanner} alt="destopian building banner"></img>
    </>
  );
}

export default Header;
