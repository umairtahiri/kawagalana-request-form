import React, { useState, useEffect } from "react";
import "./styles.scss";
import DropdownList from "../../common/dropdown";
import { maritaltatus } from "../../constants";
import Fade from "react-reveal/Fade";

const Page40 = (props) => {
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
  const onSelectOption = (value) => {
    console.log(`selected ${value}`);
    props.moveNext(41);
  };

  return (
    <Fade bottom>
      <div style={centerAlignStyle}>
        <div className="page-number">
          <div className="page-number-style">
            <div style={{ marginRight: "5px" }}> 40</div>{" "}
            <i class="fa fa-arrow-right" style={{ fontSize: "12px" }}></i>{" "}
          </div>
        </div>
        <div>
          <div className="main-text-sub">Marital status *</div>
          <DropdownList
            onSelect={onSelectOption}
            list={maritaltatus.map((r) => ({
              label: r.status,
              value: r.status,
            }))}
          />
          {showButton && (
            <div className="btn-container">
              <button className="btn-style" onClick={() => props.moveNext(41)}>
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
export default Page40;
