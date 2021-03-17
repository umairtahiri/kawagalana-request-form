import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as act from "../../../libs/actions/actions";
import "./styles.scss";

import Fade from "react-reveal/Fade";

const Page41 = (props) => {
  const [showButton, setShowButton] = useState(false);
  const [companyName, setCompanyName] = useState("");
  const dispatch = useDispatch();

  const street = useSelector((state) => {
    return state?.app?.street;
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
    if (street && street !== "") {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  }, [street]);

  return (
    <Fade bottom>
      <div style={centerAlignStyle}>
        <div className="page-number">
          <div className="page-number-style">
            <div style={{ marginRight: "5px" }}> 41</div>{" "}
            <i class="fa fa-arrow-right" style={{ fontSize: "12px" }}></i>{" "}
          </div>
        </div>
        <div>
          <div className="main-text-sub">Street *</div>
          <div className="sub-text">Landmark required</div>
          <input
            className="input-style"
            placeholder="Type Your answer here"
            onChange={(e) => dispatch(act.setStreet(e.target.value))}
            id="url-input"
          />
          {showButton && (
            <div className="btn-container">
              <button
                className="btn-style"
                id="url-ok-btn"
                onClick={() => props.moveNext(42)}
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
export default Page41;
