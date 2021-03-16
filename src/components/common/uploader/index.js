import React, { useState } from "react";
import { Upload } from "antd";
import { CloudUploadOutlined } from "@ant-design/icons";

const Uploader = () => {
  const { Dragger } = Upload;

  return (
    <Dragger multiple={false} accept="image/*" listType="picture-card">
      <p className="ant-upload-drag-icon">
        <CloudUploadOutlined style={{ color: "#757575", fontSize: "100px" }} />
      </p>
      <p className="ant-upload-text" style={{ color: "#fff" }}>
        <strong>Choose file</strong> or <strong>Drag here</strong>
      </p>
      <p className="ant-upload-hint" style={{ color: "#fff" }}>
        Size Limit 10MB
      </p>
    </Dragger>
  );
};

export default Uploader;
