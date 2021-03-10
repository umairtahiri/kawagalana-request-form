import React, { useState, useEffect } from "react";
import Fade from "react-reveal/Fade";

import Uploader from "../../common/uploader"

import "./styles.scss";


const Page49 = (props) => {
  const [showButton, setShowButton] = useState(false);
  const [companyName, setCompanyName] = useState("");

  const centerAlignStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    maxWidth: "760px",
    margin: "0px auto",
    paddingLeft: "0px",
    paddingRight: "0px",
  };

  useEffect(() => {
    if (companyName && companyName !== "") {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  }, [companyName])

  return (
    <Fade bottom>
      <div style={centerAlignStyle}>
        <div className="page-number">
          <div className="page-number-style">
            <div style={{ marginRight: "5px" }}> 48</div>{" "}
            <i class="fa fa-arrow-right" style={{ fontSize: "12px" }}></i>{" "}
          </div>
        </div>
        <div>
          <div className="main-text">
            1: You are about to finalize your Startup Application, however You
            have to submit the following requirements for authentication:
          </div>
          <div className="sub-text">
            1: One colored, high quality and clearly readable, passport size
            photograph, with all 4 corners.
          </div>
          <Uploader/>
        </div>
        {showButton && (
        <div className="btn-container">
          <button className="btn-style" onClick={() => props.moveNext(50)}>
            OK
            <svg height="14" width="14">
              <path
                fill="white"
                d="M14.293.293l1.414 1.414L5 12.414.293 7.707l1.414-1.414L5 9.586z"
              ></path>
            </svg>
          </button>
          <div className="press-enter-style">
            press <b>Enter ↵</b>
          </div>
        </div>
      )}
      </div>
    </Fade>
  );
};
export default Page49;
