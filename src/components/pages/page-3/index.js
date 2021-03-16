import React, { useState, useEffect } from "react";
import Fade from "react-reveal/Fade";

import { checkIfURLIsValid } from "../../../helpers";
import ErrorMessage from "../../common/error-message";
import "./styles.scss";

const Page3 = (props) => {
  const [showButton, setShowButton] = useState(false);
  const [URL, setURL] = useState("");
  const [showError, setShowError] = useState(false);

  const errorMsg =
    "Hmm… that web address doesn’t look right. Check for any typos or errors.";

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
    if (URL && URL !== "") {
      setShowError(false);
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  }, [URL]);

  const onSubmit = () => {
    const isValid = checkIfURLIsValid(URL);
    if (isValid) {
      props.moveNext(4);
    } else {
      setShowError(true);
    }
  };

  useEffect(() => {
    var input = document.getElementById("url-input");
    input.addEventListener("keyup", function (event) {
      if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("url-ok-btn").click();
      }
    });
  }, []);

  return (
    <Fade bottom>
      <div style={centerAlignStyle}>
        <div className="page-number">
          <div className="page-number-style">
            <div style={{ marginRight: "5px" }}> 3 </div>
            <i class="fa fa-arrow-right" style={{ fontSize: "12px" }}></i>{" "}
          </div>
        </div>
        <div>
          <div className="main-text">Company url, if any:*</div>
          <input
            className="input-style"
            placeholder="https://"
            onChange={(e) => setURL(e.target.value)}
            style={{ marginBottom: "10px" }}
            id="url-input"
          />
          {showError ? (
            <ErrorMessage msg={errorMsg} />
          ) : (
            <>
              {showButton && (
                <div className="btn-container">
                  <button
                    className="btn-style"
                    onClick={onSubmit}
                    id="url-ok-btn"
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
            </>
          )}
        </div>
      </div>
    </Fade>
  );
};
export default Page3;
