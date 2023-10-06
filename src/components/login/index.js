import React, { useEffect, useState } from "react";
import { Button, Checkbox, Form, Input, Spin } from "antd";
import { ToastContainer, toast } from "react-toastify";
import "./scss/login.scss";
import { useNavigate } from "react-router-dom";
// import { login } from "../../services/user-service";
import { useDispatch, useSelector } from "react-redux";
import { handleLoginRedux } from "../../redux/actions/userAction";
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
export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => {
    return state.user.isLoading;
  });
  const account = useSelector((state) => state.user.account);
  const handleSubmit = async () => {
    if (!username || !password) {
      toast.warning("Vui lòng nhập đầy đủ thông tin đăng nhập", {
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
    dispatch(handleLoginRedux(username.trim(), password.trim()));
    //   setLoadingLogin(true);
    // try {
    //   const response = await login({
    //     username,
    //     password,
    //   });
    //   if (response && response.accessToken) {
    //     console.log(response);
    //   } else {
    //     console.log("LOGIN FAIL");
    //   }
    // } catch (error) {
    //   console.log(error);
    // }
  };

  useEffect(() => {
    console.log("account", account);
    if (account && account.auth === true) {
      navigate("/");
    }
  }, [account]);
  return (
    <div className="login-page">
      <div className="login-form">
        {/* <div className="logo" style={logoStyle}>
          <img src="/logo.png" style={logoImgStyle} alt="Logo" />
        </div> */}
        <h3 className="text-center">Đăng nhập</h3>
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
            label="Tài khoản"
            name="username"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập tên tài khoản!",
              },
            ]}
          >
            <Input
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </Form.Item>

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
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Checkbox>Ghi nhớ tài khoản</Checkbox>
          </Form.Item>
          <Form.Item {...tailLayout}>
            {!isLoading ? (
              <Button
                type="primary"
                htmlType="submit"
                className="mx-2"
                onClick={handleSubmit}
              >
                Đăng nhập
              </Button>
            ) : (
              <Spin />
            )}
            <Button htmlType="button">Quên mật khẩu</Button>
          </Form.Item>
        </Form>
      </div>
      <ToastContainer />
    </div>
  );
}
