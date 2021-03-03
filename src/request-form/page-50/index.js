import React, { useState, useEffect } from "react";
import "./styles.scss";

import Fade from "react-reveal/Fade";

const Page50 = (props) => {
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
            50 <i class="fa fa-arrow-right" style={{ fontSize: "12px" }}></i>{" "}
          </div>
          <div className="page2-objective">3: Proof of residence.</div>
        </div>
        <div className="sub-text">
          A copy of National ID/utility bills or tenancy agreement
        </div>
        {showButton && (
          <div className="btn-container">
            <button className="btn-style" onClick={() => props.moveNext(51)}>
              OK
              <svg height="14" width="14">
                <path
                  fill="rgb(143, 118, 69)"
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
export default Page50;
