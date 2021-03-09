import React from "react";

const DropdownList = (props) => {
  const { data } = props;
  return (
    <div className="drop-list-container">
      <input className="input-style" list="datalist" />
      <div className="datalist-style">
        <datalist id="datalist">
          {data.map((c) => (
            <div className="option-style">
              <option>{c.ref}</option>
            </div>
          ))}
        </datalist>
      </div>
    </div>
  );
};
export default DropdownList;
