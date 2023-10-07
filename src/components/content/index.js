import React from "react";
import { Layout } from "antd";
import Banner from "./banner/banner";
import MainNav from "./main-nav/main-nav";
import Products from "../products/products";
import News from "../news/news";
import Collection from "../banner/collection";
const { Content } = Layout;

export default function BodyComponent() {
  return (
    <Content>
      <Banner />
      {/* <MainNav /> */}
      <div className="products">
        <h1>Body</h1>
        <Collection />
        <Products />
        <News />
      </div>
    </Content>
  );
}
