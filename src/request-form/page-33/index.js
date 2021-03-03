import React, { useState, useEffect } from "react";
import "./styles.scss";
import ListButton from "../custom-button";

import Fade from "react-reveal/Fade";

const Page33 = (props) => {
  const centerAlignStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  };

  return (
    <Fade bottom>
      <div style={centerAlignStyle}>
        <div className="page-number">
          <div>
            33 <i class="fa fa-arrow-right" style={{ fontSize: "12px" }}></i>{" "}
          </div>
          <div className="page2-objective">Your title*</div>
        </div>
        <ListButton
          label="Ms"
          boxName="A"
          callBack={() => props.moveNext(34)}
        />
        <ListButton
          label="Mrs"
          boxName="B"
          callBack={() => props.moveNext(34)}
        />
        <ListButton
          label="Mr"
          boxName="C"
          callBack={() => props.moveNext(34)}
        />
        <div className="underline-statement">
          Shift ⇧ + Enter ↵ to make a line break
        </div>
      </div>
    </Fade>
  );
};
export default Page33;
