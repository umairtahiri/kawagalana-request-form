import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as act from "../../../libs/actions/actions";
import "./styles.scss";

import Fade from "react-reveal/Fade";

const Page45 = (props) => {
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
  const dispatch = useDispatch();

  const nextofKin = useSelector((state) => {
    return state?.app?.nextofKin;
  });
  useEffect(() => {
    var input = document.getElementById("url-input");
    input.addEventListener("keyup", function (event) {
      if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("url-ok-btn")?.click();
      }
    });
  }, []);

  useEffect(() => {
    if (nextofKin && nextofKin !== "") {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  }, [nextofKin]);

  return (
    <Fade bottom>
      <div style={centerAlignStyle}>
        <div className="page-number">
          <div className="page-number-style">
            <div style={{ marginRight: "5px" }}> 45 </div>{" "}
            <i class="fa fa-arrow-right" style={{ fontSize: "12px" }}></i>{" "}
          </div>
        </div>
        <div>
          <div className="main-text-sub">Next of kin*</div>
          <div className="sub-text">Please provide full details.</div>
          <input
            className="input-style"
            placeholder="Type Your answer here"
            onChange={(e) => dispatch(act.setNextofKin(e.target.value))}
            id="url-input"
          />
          {showButton && (
            <div className="btn-container">
              <button
                className="btn-style"
                id="url-ok-btn"
                onClick={() => props.moveNext(46)}
              >
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
      </div>
    </Fade>
  );
};
export default Page45;
