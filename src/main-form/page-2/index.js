import React from "react";
import "./styles.scss";

const Page2 = () => {
  return (
    <div className="page2-container">
      <div className="page-number">
        <div>1 > </div>
        <div className="page2-objective">Please enter your company name</div>
      </div>
      <input
        className="page2-input-style"
        placeholder="Type Your answer here"
      ></input>
    </div>
  );
};
export default Page2;
