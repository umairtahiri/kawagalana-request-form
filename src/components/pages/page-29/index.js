import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as act from "../../../libs/actions/actions";
import "./styles.scss";

import Fade from "react-reveal/Fade";

const Page29 = (props) => {
  const [showButton, setShowButton] = useState(false);
  const dispatch = useDispatch();

  const companyIdeas = useSelector((state) => {
    return state?.app?.companyIdeas;
  });

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
    if (companyIdeas && companyIdeas !== "") {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  }, [companyIdeas]);
  useEffect(() => {
    var input = document.getElementById("url-input");
    input.addEventListener("keyup", function (event) {
      if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("url-ok-btn")?.click();
      }
    });
  }, []);

  return (
    <Fade bottom>
      <div style={centerAlignStyle}>
        <div className="page-number">
          <div className="page-number-style">
            <div style={{ marginRight: "5px" }}> 29 </div>
            <i class="fa fa-arrow-right" style={{ fontSize: "12px" }}></i>{" "}
          </div>
        </div>
        <div>
          <div className="main-text">
            If you had any other ideas you considered applying with, please list
            them. One may be something we've been waiting for. Often when we
            fund people it's to do something they list here and not in the main
            application.
          </div>
          <textarea
            placeholder="Type Your answer here"
            onChange={(e) => dispatch(act.setCompanyIdeas(e.target.value))}
            id="url-input"
          />
          <div className="input-footer">
            Shift ⇧ + Enter ↵ to make a line break
          </div>
          {showButton && (
            <div className="btn-container">
              <button
                className="btn-style"
                id="url-ok-btn"
                onClick={() => props.moveNext(30)}
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
export default Page29;
