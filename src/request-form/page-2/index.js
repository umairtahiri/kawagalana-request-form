import React from "react";
import "./styles.scss";

import Fade from "react-reveal/Fade";

const Page2 = () => {
  return (
    <Fade bottom>
      <div>
        <div className="page-number">
          <div>
            1 <i class="fa fa-arrow-right" style={{ fontSize: "12px" }}></i>{" "}
          </div>
          <div className="page2-objective">Please enter your company name</div>
        </div>
        <input
          className="page2-input-style"
          placeholder="Type Your answer here"
        ></input>
      </div>
    </Fade>
  );
};
export default Page2;
