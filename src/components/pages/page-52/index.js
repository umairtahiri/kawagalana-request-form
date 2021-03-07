import React, { useState, useEffect } from "react";
import "./styles.scss";

import Fade from "react-reveal/Fade";

const Page25 = (props) => {
  const [showButton, setShowButton] = useState(false);
  const [companyName, setCompanyName] = useState("");

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
            <div style={{ marginRight: "5px" }}> 52</div>{" "}
            <i class="fa fa-arrow-right" style={{ fontSize: "12px" }}></i>{" "}
          </div>
        </div>
        <div>
          <div className="main-text">
            5: Complete financial statements, preferably audited or reviewed
          </div>

          <div className="sub-text">
            If you don’t have enough history, but you do have good credit and
            assets to pledge. You’ll also have to supply as much profit and loss
            history as you have, up to six months back.
          </div>
          <div className="upload-container" onClick={() => props.moveNext(53)}>
            <div>
              <div class="cloud-upload-icon__Root-sc-1kmueyy-0 jxuREi">
                <svg height="68px" viewBox="0 0 92 68" width="92px">
                  <path
                    d="M46 .64a27.9 27.9 0 0 1 19.78 8.19 27.78 27.78 0 0 1 8.03 20A19.95 19.95 0 0 1 92 48.63c0 11.04-8.97 20-20 20H23c-12.67 0-23-10.33-23-23a22.94 22.94 0 0 1 18.63-22.46 27.79 27.79 0 0 1 7.56-14.34A27.97 27.97 0 0 1 46 .63zm0 6c-5.64 0-11.26 2.1-15.56 6.4-3.66 3.66-5.96 10.59-6.51 15.34 0 .06.2.06-2.5.32A17.02 17.02 0 0 0 6 45.64c0 9.42 7.58 17 17 17h49c7.8 0 14-6.2 14-14 0-7.81-6.2-14-14-14H67.12v-3.36c0-10.7-1.43-14.1-5.59-18.24-4.32-4.3-9.9-6.4-15.53-6.4z"
                    fill="rgba(255, 255, 255, 0.3)"
                    fill-rule="nonzero"
                  ></path>
                </svg>
                <div class="cloud-upload-icon__ArrowClipper-sc-1kmueyy-2 kioWtG">
                  <div class="cloud-upload-icon__ArrowWrapper-sc-1kmueyy-1 bDxrNr">
                    <svg height="60px" viewBox="0 0 26 31" width="26px">
                      <path
                        d="M13 .53l-2.03 1.89-11 10 4.06 4.44L10 11.42v19.22h6V11.42l5.97 5.44c.03.02 4.06-4.44 4.06-4.44l-11-10c-.4-.36-1.07-1-2.03-1.9z"
                        fill="rgba(255, 255, 255, 0.3)"
                        fill-rule="nonzero"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="uploader-text-container">
              <div className="uploader-text">
                {" "}
                Choose file <span className="span-text"> or </span> Drag Here
              </div>
              <div className="size-limit-style">Size limit: 10MB</div>
            </div>
          </div>
          {showButton && (
            <div className="btn-container">
              <button className="btn-style" onClick={() => props.moveNext(27)}>
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
      </div>
    </Fade>
  );
};
export default Page25;
