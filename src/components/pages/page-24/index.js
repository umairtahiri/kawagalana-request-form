import React from "react";
import "./styles.scss";

import Fade from "react-reveal/Fade";

const centerAlignStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

const Page24 = (props) => {
  return (
    <Fade bottom>
      <div style={centerAlignStyle}>
        <div className="page-number">
          <div>
            24
            <svg height="10" width="11">
              <path
                fill="#fff"
                d="M7.586 5L4.293 1.707 5.707.293 10.414 5 5.707 9.707 4.293 8.293z"
              ></path>
              <path fill="#fff" d="M8 4v2H0V4z"></path>
            </svg>
          </div>
          <div className="page1-intro-text">
          Have you taken any investment yet?*
          </div>
        </div>
        <div className="page1-btn-container">
          <button className="list-btn" onClick={() => props.moveNext(25)}>
            Yes
          </button>
          <button className="list-btn" onClick={() => props.moveNext(0)}>
            No
          </button>
        </div>
      </div>
    </Fade>
  );
};
export default Page24;
