import React from "react";
import "./styles.scss";

const DropDown = (props) => {
  const { list } = props;
  return (
    <select>
      {list.map((c) => (
        <option className="custom-option" value={c.name}>
          {c.name}
        </option>
      ))}
    </select>
  );
};

export default DropDown;
