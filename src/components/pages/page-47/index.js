import React from "react";
import "./styles.scss";
import ListButton from "../../common/custom-button";

import Fade from "react-reveal/Fade";

const Page47 = (props) => {
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

  return (
    <Fade bottom>
      <div style={centerAlignStyle}>
        <div className="page-number">
          <div className="page-number-style">
            <div style={{ marginRight: "5px" }}> 47</div>{" "}
            <i class="fa fa-arrow-right" style={{ fontSize: "12px" }}></i>{" "}
          </div>
        </div>
        <div>
          <div className="main-text">Communication by e-mail</div>
          <div className="main-text-sub">
            In order to be able to communicate with us by e-mail and also enable
            us to keep you informed of events relating to our new programs.Would
            you like us to contact you by e-mail:
          </div>
          <div className="sub-text">I agree</div>
          <ListButton
            label="Yes"
            boxName="Y"
            callBack={() => props.moveNext(48)}
          />
          <ListButton
            label="No"
            boxName="N"
            callBack={() => props.moveNext(48)}
          />
        </div>
      </div>
    </Fade>
  );
};
export default Page47;
