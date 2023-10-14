import React, { useEffect, useState } from "react";
import "./styles/recover-password.scss";
import { Button, Checkbox, Form, Input, Spin } from "antd";
import { ToastContainer, toast } from "react-toastify";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { handleRecoverAccountRedux } from "../../../redux/actions/userAction";
const logoStyle = {
  width: "150px",
  height: "100%",
};
const logoImgStyle = {
  objectFit: "contain",
  width: "150px",
  height: "100%",
};
const tailLayout = {
  wrapperCol: {
    offset: 2,
  },
};
export default function RecoverPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { recoverPassword } = useSelector((state) => {
    return state.user;
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const jwt = searchParams.get("jwt");
  const isLoading = useSelector((state) => {
    return state.user.isLoading;
  });
  if (recoverPassword && recoverPassword.result === true) {
    navigate("/login");
  }
  const handleSubmit = async () => {
    if (!password || !confirmPassword) {
      toast.warning("Vui lòng nhập đầy đủ thông tin!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }
    dispatch(handleRecoverAccountRedux(password, confirmPassword, jwt));
  };
  const handleBackToLogin = () => {
    navigate("/login");
  };
  return (
    <div className="forgot-password">
      <div className="forgot-password-form">
        {/* <div className="logo" style={logoStyle}>
          <img src="/logo.png" style={logoImgStyle} alt="Logo" />
        </div> */}
        <h3 className="text-center">Khôi phục mật khẩu</h3>
        <Form
          name="basic"
          labelCol={{
            span: 10,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            remember: true,
          }}
          // onFinish={onFinish}
          // onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Mật khẩu"
            name="password"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập mật khẩu!",
              },
            ]}
          >
            <Input.Password
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </Form.Item>
          <Form.Item
            label="Xác nhận mật khẩu"
            name="confirmPassword"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập lại mật khẩu!",
              },
            ]}
          >
            <Input.Password
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
            />
          </Form.Item>

          <div className="d-flex justify-content-center">
            <Button htmlType="button" onClick={handleBackToLogin}>
              Hủy bỏ
            </Button>
            {!isLoading ? (
              <Button
                type="primary"
                htmlType="submit"
                className="mx-2"
                onClick={handleSubmit}
              >
                Xác nhận
              </Button>
            ) : (
              <Spin />
            )}
          </div>
        </Form>
      </div>
      <ToastContainer />
    </div>
  );
}
