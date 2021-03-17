import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as act from "../../../libs/actions/actions";
import "./styles.scss";

import Fade from "react-reveal/Fade";

const Page35 = (props) => {
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

  const lastName = useSelector((state) => {
    return state?.app?.lastName;
  });
  useEffect(() => {
    var input = document.getElementById("lastName-input");
    input.addEventListener("keyup", function (event) {
      if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("lastName-ok-btn")?.click();
      }
    });
  }, []);

  useEffect(() => {
    if (lastName && lastName !== "") {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  }, [lastName]);

  return (
    <Fade bottom>
      <div style={centerAlignStyle}>
        <div className="page-number">
          <div className="page-number-style">
            <div style={{ marginRight: "5px" }}>35</div>{" "}
            <i class="fa fa-arrow-right" style={{ fontSize: "12px" }}></i>{" "}
          </div>
        </div>
        <div>
          <div className="main-text">Last Name *</div>
          <input
            className="input-style"
            placeholder="Type Your answer here"
            onChange={(e) => dispatch(act.setLastName(e.target.value))}
            id="lastName-input"
          />
          {showButton && (
            <div className="btn-container">
              <button
                className="btn-style"
                id="lastName-ok-btn"
                onClick={() => props.moveNext(36)}
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
export default Page35;
