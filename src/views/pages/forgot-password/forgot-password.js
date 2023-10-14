import React, { useEffect, useState } from "react";
import "./styles/forgot-password.scss";
import { Button, Checkbox, Form, Input, Spin } from "antd";
import { ToastContainer, toast } from "react-toastify";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  handleForgotAccountRedux,
  handleLoginRedux,
} from "../../../redux/actions/userAction";
import { validateEmail } from "../../../helpers/validator";
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
export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading, forgotPassword } = useSelector((state) => {
    return state.user;
  });
  const handleSubmit = async () => {
    if (!email) {
      toast.warning("Vui lòng nhập email", {
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
    if (!validateEmail(email)) {
      toast.warning("Email sai định dạng!", {
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
    dispatch(handleForgotAccountRedux(email.trim()));
  };
  const handleGoToCheckMail = () => {
    window.open("https://mail.google.com/", "_blank");
  };
  return (
    <div className="forgot-password">
      <div className="forgot-password-form">
        {/* <div className="logo" style={logoStyle}>
          <img src="/logo.png" style={logoImgStyle} alt="Logo" />
        </div> */}
        <h3 className="text-center">Quên mật khẩu</h3>
        <Form
          name="basic"
          labelCol={{
            span: 8,
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
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập email đã đăng ký!",
              },
            ]}
          >
            <Input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </Form.Item>

          <div className="d-flex">
            {!isLoading ? (
              forgotPassword.result ? (
                <Button
                  type="primary"
                  htmlType="submit"
                  className="mx-2"
                  onClick={handleGoToCheckMail}
                >
                  Di chuyển tới email
                </Button>
              ) : (
                <Button
                  type="primary"
                  htmlType="submit"
                  className="mx-2"
                  onClick={handleSubmit}
                >
                  Xác nhận
                </Button>
              )
            ) : (
              <Spin />
            )}
            <Button htmlType="button">
              <NavLink
                to="/another-way"
                className="nav-item text-decoration-none"
              >
                Thử cách khác
              </NavLink>
            </Button>
          </div>
        </Form>
      </div>
      <ToastContainer />
    </div>
  );
}
