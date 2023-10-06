import React from "react";
import { Carousel } from "antd";
import "./banner.scss";

export default function Banner() {
  return (
    <div>
      <Carousel autoplay draggable="true">
        <div>
          <div className="banner">
            <a href="/">
              <img
                src="https://quintuslabs.github.io/fashion-cube/static/media/slider_3.035f02ed.jpg"
                alt="banner"
              />
            </a>
          </div>
        </div>
        <div>
          <div className="banner">
            <a href="/">
              <img src="./gucci.jpg" alt="banner" />
            </a>
          </div>
        </div>
        <div>
          <div className="banner">
            <a href="/">
              <img src="./bape.jpg" alt="banner" />
            </a>
          </div>
        </div>
      </Carousel>
    </div>
  );
}
