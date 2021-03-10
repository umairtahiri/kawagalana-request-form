import React, { useState, useEffect } from "react";
import "./styles.scss";

import Fade from "react-reveal/Fade";

const Page54 = (props) => {
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
        <div>
          <div className="main-text">
            Note: For any assistance, please contact our team 24/7 on the
            numbers as shown on our website or Email: hello@kwagalana.com
          </div>
          <div className="sub-text">
            1. All submitted documents will be verified by a representative for
            authenticity prior to application review.
          </div>
          <div className="sub-text">
            2. Feedback is given within 05 working days after receipt of your
            application.
          </div>
          <div className="btn-container">
            <button className="btn-style" onClick={() => props.moveNext(1)}>
              Submit
            </button>
            <div className="press-enter-style">
              press <b>Enter ↵</b>
            </div>
          </div>
        </div>
        <div>
          <img
            alt="gg"
            data-qa-loaded="true"
            src="https://images.typeform.com/images/2hwbSf5bm85c/image/default"
            style={{
              display: "block",
              marginLeft: "20px",
              width: "300px",
              height: "500px",
              objectFit: "cover",
              objectPosition: "50% 50%;",
            }}
          />
        </div>
      </div>
    </Fade>
  );
};
export default Page54;
