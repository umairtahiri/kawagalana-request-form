import React from "react";
import "./styles.scss";

const ErrorMessage = ({ msg }) => {
  return <div className="error-msg">{msg}</div>;
};

export default ErrorMessage;
