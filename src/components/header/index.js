import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Layout } from "antd";
import { globalCss } from "../../styles/global";
import "./styles/header.scss";
import HeaderLeft from "./left/left";
import HeaderRight from "./right/right";
import HeaderRightResponsive from "./right/responsive";
const { Header } = Layout;

const headerStyle = {
  color: globalCss.color_text_1,
  display: "flex",
  alignItems: "center",
  backgroundColor: globalCss.color_background_white,
  boxShadow: "rgba(0, 0, 0, 0.45) 0px 25px 20px -20px",
  zIndex: 100,
  position: "fixed",
  width: "100vw",
  top: 0,
  left: 0,
};

export default function HeaderComponent() {
  return (
    <Header style={headerStyle}>
      <HeaderLeft />
      <HeaderRight />
      <HeaderRightResponsive />
    </Header>
  );
}
