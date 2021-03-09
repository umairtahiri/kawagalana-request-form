import React, { useState, useEffect } from "react";
import "./styles.scss";
// import DropdownList from "../../common/droplist";
// import { references } from "../../constants";
import { Select } from "antd";

import Fade from "react-reveal/Fade";

const Page32 = (props) => {
  const [showButton, setShowButton] = useState(false);
  const [companyName, setCompanyName] = useState("");

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

  useEffect(() => {
    if (companyName && companyName !== "") {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  }, [companyName]);
  const { Option } = Select;

  function onChange(value) {
    console.log(`selected ${value}`);
  }

  function onBlur() {
    console.log("blur");
  }

  function onFocus() {
    console.log("focus");
  }

  function onSearch(val) {
    console.log("search:", val);
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
          {/* <DropdownList data={references} /> */}
          <Select
            className="select-style"
            allowClear={true}
            showSearch
            bordered={false}
            style={{ width: "100%" }}
            placeholder="Select a person"
            optionFilterProp="children"
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            onSearch={onSearch}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            <Option
              // style={{ color: "blue" }}
              value="jack"
              style={{
                height: "30px",
                background: "rgba(58, 59, 56, 0.3)",
                boxSizing: "border-box",
                // background: "#3a3b38",
                boxShadow: "rgb(255 255 255 / 60%) 0px 0px 0px 1px",
                padding: "2px",
                border: "none",
                borderRadius: "4px",
                margin: "5px",
                cursor: "pointer",
                // backgroundColor: "rgba(255, 255, 255, 0.3)",
                color: "brown",
              }}
            >
              Jack
            </Option>
            <Option value="lucy">Lucy</Option>
            <Option value="tom">Tom</Option>
          </Select>
          ,
          {/* <input
            list="browsers"
            className="input-style"
            placeholder="Type or select an option"
            onChange={(e) => setCompanyName(e.target.value)}
          />
          <datalist id="browsers">
            <option value="Internet Explorer" />
            <option value="Firefox" />
            <option value="Google Chrome" />
            <option value="Opera" />
            <option value="Safari" />
          </datalist> */}
          {showButton && (
            <div className="btn-container">
              <button className="btn-style" onClick={() => props.moveNext(33)}>
                OK
                <svg height="14" width="14">
                  <path
                    fill="white"
                    d="M14.293.293l1.414 1.414L5 12.414.293 7.707l1.414-1.414L5 9.586z"
                  ></path>
                </svg>
              </button>
              <div className="press-enter-style">
                press <b>Enter ↵</b>
              </div>
            </div>
          )}
        </div>
      </div>
    </Fade>
  );
};
export default Page32;
