import React, { useState, useEffect } from "react";
import "./styles.scss";

import Fade from "react-reveal/Fade";

const Page12 = (props) => {
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
            12 <i class="fa fa-arrow-right" style={{ fontSize: "12px" }}></i>{" "}
          </div>
          <div className="page2-objective">
            How long have each of you been working on this? How much of that has
            been full-time? Please explain.*
          </div>
        </div>
        <input
          className="input-style"
          placeholder="Type or select an option"
          onChange={(e) => setCompanyName(e.target.value)}
        />
        {showButton && (
          <div className="btn-container">
            <button className="btn-style" onClick={() => props.moveNext(13)}>
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
export default Page12;
