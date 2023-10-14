import React, { useState } from "react";
import { Button, Modal } from "antd";
import { AppstoreAddOutlined } from "@ant-design/icons";
import CreateProductForm from "./create-form";

export default function CreateProduct() {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("Content of the modal");
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setModalText("The modal will be closed after two seconds");
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };
  const handleCancel = () => {
    setOpen(false);
  };
  return (
    <div>
      <>
        <Button
          type="primary"
          shape="round"
          icon={<AppstoreAddOutlined />}
          className="d-flex justify-content-center align-items-center"
          onClick={showModal}
        >
          Thêm sản phẩm
        </Button>
        <Modal
          title={<h2 className="text-center my-3">Thêm sản phẩm mới</h2>}
          open={open}
          onOk={handleOk}
          confirmLoading={confirmLoading}
          onCancel={handleCancel}
          width={1000}
        >
          <CreateProductForm />
        </Modal>
      </>
    </div>
  );
}
