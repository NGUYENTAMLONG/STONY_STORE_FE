import { EyeOutlined } from "@ant-design/icons";
import { Button, Image, Modal } from "antd";
import React, { useState } from "react";
import moment from "moment";
import apiConfig from "../../../../../apis/apiConfig";

export default function ModalDetail({ record }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  console.log(record);
  return (
    <>
      <Button
        shape="circle"
        type="primary"
        icon={<EyeOutlined />}
        className="d-flex justify-content-center align-items-center bg-warning"
        onClick={showModal}
      />
      <Modal
        title="Chi tiết sản phẩm"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className="d-flex my-2">
          <span className="mx-3">
            <b>Tên sản phẩm: </b>
          </span>
          {record.name}
        </div>
        <div className="d-flex my-2">
          <span className="mx-3">
            <b>CodeID: </b>
          </span>
          {record.code}
        </div>
        <div className="d-flex my-2">
          <span className="mx-3">
            <b>Giá nhập: </b>
          </span>
          {record.importPrice}
        </div>
        <div className="d-flex my-2">
          <span className="mx-3">
            <b>Giá bán: </b>
          </span>
          {record.price}
        </div>
        <div className="d-flex my-2">
          <span className="mx-3">
            <b>Thuế: </b>
          </span>
          {record.tax}
        </div>
        <div className="d-flex my-2">
          <span className="mx-3">
            <b>Giảm giá: </b>
          </span>
          {record.discount}
        </div>
        <div className="d-flex my-2">
          <span className="mx-3">
            <b>Mô tả: </b>
          </span>
          {record.description}
        </div>
        <div className="d-flex my-2">
          <span className="mx-3">
            <b>Trạng thái: </b>
          </span>
          {record.status}
        </div>
        <div className="d-flex my-2">
          <span className="mx-3">
            <b>Tạo lúc: </b>
          </span>
          {moment(record.createdAt).format("YYYY-MM-DD HH:mm:ss")}
        </div>
        <div className="d-flex my-2">
          <span className="mx-3">
            <b>Cập nhật gần nhất: </b>
          </span>
          {moment(record.updatedAt).format("YYYY-MM-DD HH:mm:ss")}
        </div>
        <div className="d-flex my-2 flex-column">
          <div className="mx-3">
            <b>Ảnh: </b>
          </div>
          <div className="d-flex justify-content-center mt-4">
            <Image
              style={{ width: "200px", objectFit: "contain" }}
              src={apiConfig.baseUrl + record.thumbnail}
            />
          </div>
        </div>
      </Modal>
    </>
  );
}
