import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useNavigate,
} from "react-router-dom";
import { NavLink } from "react-router-dom";
import {
  LoginOutlined,
  LogoutOutlined,
  SearchOutlined,
  SettingFilled,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Dropdown } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  handleLogoutRedux,
  handleRefreshRedux,
} from "../../../redux/actions/userAction";
import { toast } from "react-toastify";
import "../styles/header.scss";

export default function HeaderRight() {
  const { account } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(handleLogoutRedux());
  };
  useEffect(() => {
    if (account && account.auth === false) {
      navigate("/");
      toast.success("Logout Success !");
    }
  }, [account]);

  useEffect(() => {
    if (localStorage.getItem("access_token")) {
      dispatch(handleRefreshRedux());
    }
  }, []);

  const items = [
    {
      key: "1",
      label:
        account && account.auth ? (
          <div className="fw-6 fs-5">{account.username}</div>
        ) : (
          ""
        ),
    },
    {
      key: "2",
      label:
        account && account.auth ? (
          <NavLink to="/profile" activeClassName="active">
            Profile
          </NavLink>
        ) : (
          ""
        ),
      icon: account && account.auth && (
        <i className="fa-regular fa-address-card"></i>
      ),
    },
    {
      key: "3",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          Settings
        </a>
      ),
      icon: <SettingFilled />,
    },
    {
      key: "4",
      label:
        account && account.auth ? (
          <NavLink to="/login" activeClassName="active" onClick={handleLogout}>
            Logout
          </NavLink>
        ) : (
          <NavLink to="/login" activeClassName="active">
            Login
          </NavLink>
        ),
      icon: account && account.auth ? <LogoutOutlined /> : <LoginOutlined />,
    },
  ];

  return (
    <div className="header-right">
      <ul className="container-nav">
        <NavLink to="/" className="nav-item">
          HOME
        </NavLink>
        <li className="nav-item">SHOP</li>
        <NavLink to="/about" className="nav-item">
          ABOUT
        </NavLink>
        <li className="nav-item">CONTACT</li>
      </ul>
      <ul className="container-nav">
        <li className="nav-item">
          <SearchOutlined />
        </li>
        <li className="nav-item">
          <ShoppingCartOutlined />
        </li>
        <li className="nav-item">
          <Dropdown
            menu={{
              items,
            }}
            arrow={{ pointAtCenter: false }}
          >
            {account & account.auth ? (
              <>
                <UserOutlined />
              </>
            ) : (
              <UserOutlined />
            )}
          </Dropdown>
        </li>
      </ul>
    </div>
  );
}
