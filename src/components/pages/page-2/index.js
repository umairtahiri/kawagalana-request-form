import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import * as act from "../../../libs/actions/actions";

import "./styles.scss";

import Fade from "react-reveal/Fade";

const Page2 = (props) => {
  const dispatch = useDispatch();

  const companyName = useSelector((state) => {
    return state?.app?.companyName;
  });

  const [showButton, setShowButton] = useState(false);

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
  }, [companyName]);

  return (
    <Fade bottom>
      <div style={centerAlignStyle}>
        <div className="page-number">
          <div className="page-number-style">
            <div style={{ marginRight: "5px" }}> 2 </div>
            <i class="fa fa-arrow-right" style={{ fontSize: "12px" }}></i>{" "}
          </div>
        </div>
        <div>
          <div className="main-text">Please enter your company name</div>
          <input
            className="input-style"
            placeholder="Type Your answer here"
            onChange={(e) => dispatch(act.setCompanyName(e.target.value))}
            style={{ marginBottom: "10px" }}
          />
          {showButton && (
            <div className="btn-container">
              <button className="btn-style" onClick={() => props.moveNext(3)}>
                OK
                <svg height="13" width="16" fill="white">
                  <path d="M14.293.293l1.414 1.414L5 12.414.293 7.707l1.414-1.414L5 9.586z"></path>
                </svg>
              </button>
              <div className="press-enter-style">
                press <b>Enter ↵</b>
              </div>
            </div>
          )}
        </div>
      </div>
    </Fade>
  );
};
export default Page2;
