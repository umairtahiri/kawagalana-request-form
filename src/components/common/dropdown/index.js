import React from "react";
import "./styles.scss";

const DropDown = (props) => {
  const { list } = props;
  return (
    <div className="dropdown-container">
      <select className="select-style">
        {list.map((c) => (
          <option className="custom-option" value={c.name}>
            {c.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropDown;
