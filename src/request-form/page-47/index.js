import React from "react";
import "./styles.scss";
import ListButton from "../custom-button";

import Fade from "react-reveal/Fade";

const Page47 = (props) => {
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
            47 <i class="fa fa-arrow-right" style={{ fontSize: "12px" }}></i>{" "}
          </div>
          <div className="page2-objective">Communication by e-mail</div>
        </div>
        <div className="page2-objective">
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
    </Fade>
  );
};
export default Page47;
