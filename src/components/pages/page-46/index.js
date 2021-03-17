import React from "react";
import { useDispatch } from "react-redux";
import * as act from "../../../libs/actions/actions";
import "./styles.scss";
import ListButton from "../../common/custom-button";

import Fade from "react-reveal/Fade";

const Page46 = (props) => {
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
            callBack={() => {
              dispatch(act.setConsents(true));
              props.moveNext(47);
            }}
          />
          <ListButton
            label="I dont accept"
            boxName="B"
            callBack={() => {
              dispatch(act.setConsents(true));
              props.moveNext(47);
            }}
          />
        </div>
      </div>
    </Fade>
  );
};
export default Page46;
