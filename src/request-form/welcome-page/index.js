import React from "react";
import "./styles.scss";
import logo from "../../images/logo.png";

import Fade from "react-reveal/Fade";

const WellcomePage = (props) => {
  const centerAlignStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    maxWidth: "690px",
    margin: "0px auto",
    paddingLeft: "0px",
    paddingRight: "0px",
    flexDirection: "column",
  };
  return (
    <Fade bottom>
      <div style={centerAlignStyle}>
        <div className="company-logo-container">
          <img alt="gg" className="company-name " src={logo}></img>
        </div>
        <header className="welcome-heading">
          Welcome to Kawagalana Group Startup Application Form
        </header>

        <div className="wellcome-text">
          We accept applications on a continuous basis, with no deadlines or
          ’rounds’ of funding. In addition to this open application window, we
          actively seek out investments. Our review process is highly selective
          and rigorous, and less than 10% of applicants are invited to submit
          full proposals.
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
