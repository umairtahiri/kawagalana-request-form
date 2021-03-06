import React, { useState } from "react";

import PropTypes from "prop-types";
import "./styles.scss";

const ListButton = (props) => {
  const [showSign, setshowSign] = useState(false);

  const { label, callBack, boxName } = props;
  return (
    <div className="list-btn-outer">
      <div
        className="list-btn-container"
        onClick={() => {
          callBack && callBack();
          setshowSign(true);
        }}
      >
        <div className="box-name"> {boxName}</div>
        <div className="btn-title"> {label}</div>
        <div className="tick-sign">
          {showSign && (
            <svg height="20" width="20" fill="white">
              <path d="M14.293.293l1.414 1.414L5 12.414.293 7.707l1.414-1.414L5 9.586z"></path>
            </svg>
          )}
        </div>
      </div>
    </div>
  );
};
ListButton.propTypes = {
  label: PropTypes.string,
  callBack: PropTypes.func,
  boxName: PropTypes.string,
};
export default ListButton;
