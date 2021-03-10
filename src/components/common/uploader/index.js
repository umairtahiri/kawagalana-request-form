import React, { useState, useEffect } from "react";
import { Upload, Modal } from "antd";
import { CloudUploadOutlined } from "@ant-design/icons";

const Uploader = () => {
  const { Dragger } = Upload;

  const [previewImage, setPreviewImage] = useState("");
  const [previewVisible, setPreviewVisible] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [fileList, setFileList] = useState([]);

  const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  useEffect(() => {
    console.log({ previewImage, previewVisible, previewTitle, fileList });
  }, []);

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    setPreviewImage(file.url || file.preview);
    setPreviewVisible(true);
    setPreviewTitle(
      file.name || file.url.substring(file.url.lastIndexOf("/") + 1)
    );
  };

  const handleCancel = () => setPreviewVisible(false);

  const handleChange = ({ fileList }) => setFileList(fileList);

  return (
    <>
      {!previewVisible ? (
        <Dragger
          multiple={false}
          accept="image/*"
          onPreview={handlePreview}
          handleChange={handleChange}
          listType="picture-card"
          fileList={fileList}
        >
          <p className="ant-upload-drag-icon">
            <CloudUploadOutlined
              style={{ color: "#757575", fontSize: "100px" }}
            />
          </p>
          <p className="ant-upload-text" style={{ color: "#fff" }}>
            <strong>Choose file</strong> or <strong>Drag here</strong>
          </p>
          <p className="ant-upload-hint" style={{ color: "#fff" }}>
            Size Limit 10MB
          </p>
        </Dragger>
      ) : (
        <Modal
          visible={previewVisible}
          title={previewTitle}
          footer={null}
          onCancel={handleCancel}
        >
          <img alt="example" style={{ width: "100%" }} src={previewImage} />
        </Modal>
      )}
    </>
  );
};

export default Uploader;
