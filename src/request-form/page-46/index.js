import React, { useState, useEffect } from "react";
import "./styles.scss";
import ListButton from "../custom-button";

import Fade from "react-reveal/Fade";

const Page46 = (props) => {
  const [showButton, setShowButton] = useState(false);
  const [companyName, setCompanyName] = useState("");

  const centerAlignStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
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
          <div>
            46 <i class="fa fa-arrow-right" style={{ fontSize: "12px" }}></i>{" "}
          </div>
          <div className="page2-objective">
            Consents: Please ensure that this application is complete and all
            founders have filled out their profiles before submitting your
            application for review. The answer to this question must match the
            number of profiles filled. Once you submit your application, it will
            be reviewed, regardless of whether the deadline has passed or not.
          </div>
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
    </Fade>
  );
};
export default Page46;
