import React from "react";
import "./styles.scss";
import ListButton from "../custom-button";

import Fade from "react-reveal/Fade";

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

const Page1 = (props) => {
  return (
    <Fade bottom>
      <div style={centerAlignStyle}>
        <div className="page-number">
          <div className="page-number-style">
            <div style={{ marginRight: "5px" }}>1</div>
            <svg height="10" width="11">
              <path
                fill="#fff"
                d="M7.586 5L4.293 1.707 5.707.293 10.414 5 5.707 9.707 4.293 8.293z"
              ></path>
              <path fill="#fff" d="M8 4v2H0V4z"></path>
            </svg>
          </div>
        </div>
        <div>
          <div className="main-text">
            Hi there!There are lots of ups and downs in the life of a company.
            We stand by our founders when times get tough. We are glad you are
            here.*
          </div>

          <div className="objective-container">
            <div className="sub-text">
              After having read and agreed to the important information
              surrounding our application process you will be ready to apply and
              redirected to our online portal. The initial application involves
              two parts.
            </div>
            <div className="sub-text">
              First, you fill out an online application form with general
              information about your request for funding.
            </div>
            <div className="sub-text">
              Second, you upload a short description of your innovation, which
              will be provided after completion of the online form.
            </div>
            <div className="sub-text">
              If you are interested in applying for funding please make your way
              through the following steps in order to start your application:
            </div>
          </div>
          <div className="page1-btn-container">
            <ListButton
              label="Accept"
              boxName="A"
              callBack={() => props.moveNext(2)}
            />
            <ListButton
              label="I dont Accept"
              boxName="B"
              callBack={() => props.moveNext(0)}
            />
          </div>
        </div>
      </div>
    </Fade>
  );
};
export default Page1;
