import React from "react";
import "./styles.scss";
import logo from "./images/logo.png";

const WellcomePage = () => {
  return (
    <div className="welcome-container">
      <div className="company-logo-container">
        <img alt="gg" className="logo-style" src={logo}></img>
      </div>
      <heading className="welcome-heading">
        Welcome to Kawagalana Group Startup Application Form
      </heading>

      <div className="wellcome-text">
        We invest in realtionships and support enterpreneurs through all the ups
        and downs of startup journey
      </div>
      <div className="btn-container">
        <button className="start-button">Lets Start</button>
        <div className="btn-style">
          Press <b> Enter</b>
        </div>
      </div>
    </div>
  );
};
export default WellcomePage;
