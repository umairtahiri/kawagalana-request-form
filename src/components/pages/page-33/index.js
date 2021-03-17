import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import * as act from "../../../libs/actions/actions";
import "./styles.scss";
import ListButton from "../../common/custom-button";

import Fade from "react-reveal/Fade";

const Page33 = (props) => {
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

  return (
    <Fade bottom>
      <div style={centerAlignStyle}>
        <div className="page-number">
          <div className="page-number-style">
            <div style={{ marginRight: "5px" }}> 33</div>{" "}
            <i class="fa fa-arrow-right" style={{ fontSize: "12px" }}></i>{" "}
          </div>
        </div>
        <div>
          <div className="main-text">Your title*</div>
          <ListButton
            label="Ms"
            boxName="A"
            callBack={() => {
              dispatch(act.setHearAbout(true));
              props.moveNext(34);
            }}
          />
          <ListButton
            label="Mrs"
            boxName="B"
            callBack={() => {
              dispatch(act.setHearAbout(true));
              props.moveNext(34);
            }}
          />
          <ListButton
            label="Mr"
            boxName="C"
            callBack={() => {
              dispatch(act.setHearAbout(true));
              props.moveNext(34);
            }}
          />
        </div>
      </div>
    </Fade>
  );
};
export default Page33;
