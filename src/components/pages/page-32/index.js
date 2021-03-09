import React from "react";
import "./styles.scss";
import DropdownList from "../../common/dropdown";
import { references } from "../../constants";

import Fade from "react-reveal/Fade";

const Page32 = (props) => {
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

  const onSelectOption = (value) => {
    console.log(`selected ${value}`);
  }

  return (
    <Fade bottom>
      <div style={centerAlignStyle}>
        <div className="page-number">
          <div className="page-number-style">
            <div style={{ marginRight: "5px" }}> 32</div>{" "}
            <i class="fa fa-arrow-right" style={{ fontSize: "12px" }}></i>{" "}
          </div>
        </div>
        <div>
          <div className="main-text">
            How did you hear about Kwagalana Group ? *
          </div>
          <DropdownList onSelect={onSelectOption} list={references.map(r => ({ label: r.ref, value: r.ref }))} />
        </div>
      </div>
    </Fade>
  );
};
export default Page32;
