import React, { useState } from "react";
import {
  BarcodeOutlined,
  GiftOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
  ReadOutlined,
  SkinOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme } from "antd";
import { NavLink, Outlet, useLocation } from "react-router-dom";
const { Header, Sider, Content } = Layout;
const Main = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const location = useLocation();

  const getMenuSelectedKeys = () => {
    const { pathname } = location;
    if (pathname === "/admin/dashboard/user") {
      return ["1"];
    } else if (pathname === "/admin/dashboard/product") {
      return ["2"];
    } else if (pathname === "/admin/dashboard/order") {
      return ["3"];
    } else if (pathname === "/admin/dashboard/statistical") {
      return ["4"];
    } else if (pathname === "/admin/dashboard/event") {
      return ["5"];
    } else if (pathname === "/admin/dashboard/blog") {
      return ["6"];
    }
    return [];
  };
  return (
    <div className="main">
      <Layout style={{ height: "100vh" }}>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="demo-logo-vertical text-light text-center m-4">
            <div className="fw-bold">STONY STORE</div>
            <span className="badge bg-primary">ADMIN</span>
          </div>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={getMenuSelectedKeys()}
            items={[
              {
                key: "1",
                icon: <UserOutlined />,
                label: (
                  <NavLink
                    to="/admin/dashboard/user"
                    className="text-decoration-none"
                  >
                    Ngươi Dùng
                  </NavLink>
                ),
              },
              {
                key: "2",
                icon: <SkinOutlined />,
                label: (
                  <NavLink
                    to="/admin/dashboard/product"
                    className="text-decoration-none"
                  >
                    Sản Phẩm
                  </NavLink>
                ),
              },
              {
                key: "3",
                icon: <BarcodeOutlined />,
                label: (
                  <NavLink
                    to="/admin/dashboard/order"
                    activeClassName="active"
                    className="text-decoration-none"
                  >
                    Đơn Hàng
                  </NavLink>
                ),
              },
              {
                key: "4",
                icon: <PieChartOutlined />,
                label: (
                  <NavLink
                    to="/admin/dashboard/statistical"
                    className="text-decoration-none"
                  >
                    Thống Kê
                  </NavLink>
                ),
              },
              {
                key: "5",
                icon: <GiftOutlined />,
                label: (
                  <NavLink
                    to="/admin/dashboard/event"
                    className="text-decoration-none"
                  >
                    Sự Kiện
                  </NavLink>
                ),
              },
              {
                key: "6",
                icon: <ReadOutlined />,
                label: (
                  <NavLink
                    to="/admin/dashboard/blog"
                    className="text-decoration-none"
                  >
                    Bài Viết
                  </NavLink>
                ),
              },
            ]}
          />
        </Sider>
        <Layout>
          <Header
            style={{
              padding: 0,
              background: colorBgContainer,
            }}
          >
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
              }}
            />
          </Header>
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};
export default Main;
