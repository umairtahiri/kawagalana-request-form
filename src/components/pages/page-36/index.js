import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as act from "../../../libs/actions/actions";
import "./styles.scss";

import Fade from "react-reveal/Fade";

const Page36 = (props) => {
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

  const dayofBirth = useSelector((state) => {
    return state?.app?.dayofBirth;
  });
  useEffect(() => {
    if (dayofBirth && dayofBirth !== "") {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  }, [dayofBirth]);
  const monthofBirth = useSelector((state) => {
    return state?.app?.monthofBirth;
  });
  useEffect(() => {
    if (monthofBirth && monthofBirth !== "") {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  }, [monthofBirth]);
  const yearofBirth = useSelector((state) => {
    return state?.app?.yearofBirth;
  });
  useEffect(() => {
    if (yearofBirth && yearofBirth !== "") {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  }, [yearofBirth]);

  useEffect(() => {
    var input = document.getElementById("date-input");
    input.addEventListener("keyup", function (event) {
      if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("date-ok-btn")?.click();
      }
    });
  }, []);

  return (
    <Fade bottom>
      <div style={centerAlignStyle}>
        <div className="page-number">
          <div className="page-number-style">
            <div style={{ marginRight: "5px" }}> 36 </div>
            <i class="fa fa-arrow-right" style={{ fontSize: "12px" }}></i>{" "}
          </div>
        </div>
        <div>
          <div className="main-text-sub">Date of birth *</div>
          <div className="dob-style">
            <div className="dob-container">
              <div className="month-style">Date</div>
              <input
                type="number"
                className="dob-date"
                onChange={(e) => dispatch(act.setDayofBirth(e.target.value))}
                id="date-input"
              />
            </div>
            <div className="slash-style">/</div>
            <div className="dob-container">
              <div className="month-style">Month</div>
              <input
                type="number"
                className="dob-date"
                onChange={(e) => dispatch(act.setMonthofBirth(e.target.value))}
                id="date-input"
              />
            </div>
            <div className="slash-style">/</div>
            <div className="dob-container">
              <div className="month-style">Year</div>
              <input
                type="number"
                className="dob-date"
                onChange={(e) => dispatch(act.setYearofBirth(e.target.value))}
                id="date-input"
              />
            </div>
          </div>
          {showButton && (
            <div className="btn-container">
              <button
                className="btn-style"
                id="date-ok-btn"
                onClick={() => props.moveNext(37)}
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
export default Page36;
