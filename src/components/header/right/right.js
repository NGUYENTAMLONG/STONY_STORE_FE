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
import { handleLoginRedux } from "../../../redux/actions/userAction";
const headerRightStyle = {
  height: "100%",
  width: "100%",
  display: "flex", // Add display flex to the headerRightStyle
  alignItems: "center", // Center align vertically
  justifyContent: "flex-end", // Align content to the right
};
const containerNavStyle = {
  listStyle: "none",
  display: "flex",
  justifyContent: "center", // Align the content to the right
  alignItems: "center",
  height: "100%",
};
const containerNavItemStyle = {
  display: "block",
  padding: "10px",
  cursor: "pointer",
};
// Add hover effect
containerNavItemStyle["&:hover"] = {};

const iconItemStyle = {
  fontSize: "1.5em",
};

export default function HeaderRight() {
  const { account } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(handleLoginRedux());
  };
  useEffect(() => {
    if (account && account.auth === false) {
      navigate("/");
    }
  }, [account]);

  const items = [
    {
      key: "1",
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
      key: "2",
      label:
        // <a
        //   target="_blank"
        //   rel="noopener noreferrer"
        //   href="https://www.antgroup.com"
        // >
        //   Login
        // </a>
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
    <div className="header-right" style={headerRightStyle}>
      <ul className="container-nav" style={containerNavStyle}>
        <li className="nav-item" style={containerNavItemStyle}>
          HOME
        </li>
        <li className="nav-item" style={containerNavItemStyle}>
          SHOP
        </li>
        <li className="nav-item" style={containerNavItemStyle}>
          CONTACT
        </li>
      </ul>
      <ul className="container-nav" style={containerNavStyle}>
        <li className="nav-item" style={containerNavItemStyle}>
          <SearchOutlined style={iconItemStyle} />
        </li>
        <li className="nav-item" style={containerNavItemStyle}>
          <ShoppingCartOutlined style={iconItemStyle} />
        </li>
        <li className="nav-item" style={containerNavItemStyle}>
          <Dropdown
            menu={{
              items,
            }}
            arrow={{ pointAtCenter: true }}
          >
            {account & account.auth ? (
              <>
                <UserOutlined style={iconItemStyle} /> {account.username}
              </>
            ) : (
              <UserOutlined style={iconItemStyle} />
            )}
          </Dropdown>
        </li>
      </ul>
    </div>
  );
}
