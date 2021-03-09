import React from "react";
import { Select } from "antd";

const DropDown = (props) => {
  const { onSelect, list } = props
  const { Option } = Select;

  console.log({ list })

  return (
    <Select
    className="select-style"
    allowClear={true}
    showSearch
    bordered={false}
    style={{ width: "100%" }}
    placeholder="Select a person"
    optionFilterProp="children"
    onChange={onSelect}
    open={true}
    filterOption={(input, option) =>
      option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
    }s
  >
    {(list || []).map((obj, index) => <Option
    key={index}
      value={obj.value}
    >
      {obj.label}
    </Option>)}
  </Select>
  );
};

export default DropDown;
