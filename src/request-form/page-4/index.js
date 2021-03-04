import React, { useState, useEffect } from "react";
import "./styles.scss";

import Fade from "react-reveal/Fade";

const Page4 = (props) => {
  const [showButton, setShowButton] = useState(false);
  const [companyName, setCompanyName] = useState("");

  const centerAlignStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  };

  useEffect(() => {
    if (companyName && companyName !== "") {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  }, [companyName]);

  return (
    <Fade bottom>
      <div style={centerAlignStyle}>
        <div className="page-number">
          <div>
            4 <i class="fa fa-arrow-right" style={{ fontSize: "12px" }}></i>{" "}
          </div>
          <div className="page2-objective">
            If you have a demo, what's the url? Demo can be anything that shows
            us how the product works. Usually that's a video or screen
            recording.
            <div>
              (Please don't password protect it; just use an obscure url.)
            </div>
          </div>
        </div>
        <input
          className="input-style"
          placeholder="Https://"
          onChange={(e) => setCompanyName(e.target.value)}
        />
        {showButton && (
          <div className="btn-container">
            <button className="btn-style" onClick={() => props.moveNext(5)}>
              OK
              <svg height="14" width="14">
                <path
                  fill="#fff"
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
export default Page4;
