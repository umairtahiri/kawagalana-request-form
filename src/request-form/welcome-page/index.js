import React from "react";
import "./styles.scss";
import logo from "../../images/logo.png";

import Fade from "react-reveal/Fade";

const WellcomePage = (props) => {
  const centerAlignStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <Fade bottom>
      <div style={centerAlignStyle}>
        <div className="company-logo-container">
          <img alt="gg" className="logo-style" src={logo}></img>
        </div>
        <header className="welcome-heading">
          Welcome to Kawagalana Group Startup Application Form
        </header>

        <div className="wellcome-text">
          We invest in realtionships and support enterpreneurs through all the
          ups and and downs of startup journey
        </div>
        <div className="btn-container" style={{ justifyContent: "center" }}>
          <button className="btn-style" onClick={() => props.moveNext(1)}>
            Lets Start
          </button>
          <div className="press-enter-style">
            press <b>Enter ↵</b>
          </div>
        </div>
      </div>
    </Fade>
  );
};
export default WellcomePage;
