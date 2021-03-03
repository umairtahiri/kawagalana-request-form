import React from "react";

import PropTypes from "prop-types";
import "./styles.scss";

const ListButton = (props) => {
  const { label, callBack, boxName } = props;
  return (
    <div className="list-btn-outer">
      <div
        className="list-btn-container"
        onClick={() => callBack && callBack()}
      >
        <div className="box-name"> {boxName}</div>
        <div className="btn-title"> {label}</div>
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
