import React from "react";
import "./styles.scss";
import ListButton from "../../common/custom-button";
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

const Page13 = (props) => {
  return (
    <Fade bottom>
      <div style={centerAlignStyle}>
        <div className="page-number">
          <div className="page-number-style">
            <div style={{ marginRight: "5px" }}> 13</div>
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
          <div className="main-text">Are people using your product?*</div>
          <div className="page1-btn-container">
            <ListButton
              label="Yes"
              boxName="Y"
              callBack={() => props.moveNext(14)}
            />
            <ListButton
              label="No"
              boxName="N"
              callBack={() => props.moveNext(14)}
            />
          </div>
        </div>
      </div>
    </Fade>
  );
};
export default Page13;
