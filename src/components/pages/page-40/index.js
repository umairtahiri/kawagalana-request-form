import React from "react";
import { useDispatch } from "react-redux";
import * as act from "../../../libs/actions/actions";
import "./styles.scss";
import DropdownList from "../../common/dropdown";
import { maritaltatus } from "../../constants";
import Fade from "react-reveal/Fade";

const Page40 = (props) => {
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
  const dispatch = useDispatch();

  const onSelectOption = (value) => {
    console.log(`selected ${value}`);
    dispatch(act.setMaritalStatus(true));
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
        </div>
      </div>
    </Fade>
  );
};
export default Page40;
