import React from "react";
import { Col, Row } from "antd";
import "./main-nav.scss";

export default function MainNav() {
  return (
    <div className="main-nav">
      <Row gutter={[16, 16]}>
        <Col span={8} xl={8} xs={24}>
          <div className="nav-item">
            <img src="./men.jpg" />
          </div>
        </Col>
        <Col span={8} xl={8} xs={24}>
          <div className="nav-item">
            <img src="./men.jpg" />
          </div>
        </Col>
        <Col span={8} xl={8} xs={24}>
          <div className="nav-item">
            <img src="./men.jpg" />
          </div>
        </Col>
      </Row>
    </div>
  );
}
