import React, { useState, useEffect } from "react";
import "./styles.scss";
import ListButton from "../custom-button";

import Fade from "react-reveal/Fade";

const Page46 = (props) => {
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
            <div style={{ marginRight: "5px" }}> 46</div>{" "}
            <i class="fa fa-arrow-right" style={{ fontSize: "12px" }}></i>{" "}
          </div>
        </div>
        <div>
          <div className="main-text">
            Consents:
            <span className="main-text-sub">
              {" "}
              Please ensure that this application is complete and all founders
              have filled out their profiles before submitting your application
              for review. The answer to this question must match the number of
              profiles filled. Once you submit your application, it will be
              reviewed, regardless of whether the deadline has passed or not.
            </span>
          </div>
          <ListButton
            label="I Accept"
            boxName="A"
            callBack={() => props.moveNext(47)}
          />
          <ListButton
            label="I dont accept"
            boxName="B"
            callBack={() => props.moveNext(47)}
          />
        </div>
      </div>
    </Fade>
  );
};
export default Page46;
