import React from "react";
import {
  AlignRightOutlined,
  LogoutOutlined,
  SearchOutlined,
  SettingFilled,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Dropdown, Space } from "antd";
const containerNavItemStyle = {
  textAlign: "center",
  width: "100px",
};
const headerResponsiveStyle = {
  padding: "10px",
};
const items = [
  {
    label: (
      <li className="nav-item" style={containerNavItemStyle}>
        HOME
      </li>
    ),
    key: "0",
  },
  {
    label: (
      <li className="nav-item" style={containerNavItemStyle}>
        SHOP
      </li>
    ),
    key: "1",
  },
  {
    label: (
      <li className="nav-item" style={containerNavItemStyle}>
        CONTACT
      </li>
    ),
    key: "2",
  },
  {
    label: (
      <li className="nav-item" style={containerNavItemStyle}>
        <SearchOutlined /> SEARCH
      </li>
    ),
    key: "3",
  },
  {
    label: (
      <li className="nav-item" style={containerNavItemStyle}>
        <ShoppingCartOutlined /> CART
      </li>
    ),
    key: "4",
  },
  {
    key: "5",
    label: (
      <li className="nav-item" style={containerNavItemStyle}>
        <UserOutlined /> ACCOUNT
      </li>
    ),
    children: [
      {
        key: "5-1",
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
        key: "5-2",
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.antgroup.com"
          >
            Logout
          </a>
        ),
        icon: <LogoutOutlined />,
      },
    ],
  },
];

export default function HeaderRightResponsive() {
  return (
    <div className="header-right-responsive" style={headerResponsiveStyle}>
      <Dropdown
        menu={{
          items,
        }}
        trigger={["click"]}
        arrow="true"
      >
        <Space>
          <AlignRightOutlined />
        </Space>
      </Dropdown>
    </div>
  );
}
