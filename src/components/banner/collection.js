import React from "react";
import banner1 from "../../assets/images/home/banner-1.jpg";
import banner2 from "../../assets/images/home/banner-2.jpg";
import banner3 from "../../assets/images/home/banner-3.jpg";

export default function Collection() {
  return (
    <div className="collection container">
      <div className="row">
        <div className="col-12 col-md-6 bg-success">
          <div className="collection__intro">
            <div className="collection__intro__title">
              Clothing Collections 2030
            </div>
            <div className="collection__intro__go">MUA NGAY</div>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <img src={banner1} />
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-6">
          <img src={banner2} />
        </div>
        <div className="col-12 col-md-6">
          <div className="collection__intro">
            <div className="collection__intro__title">Accessories</div>
            <div className="collection__intro__go">MUA NGAY</div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-6">
          <div className="collection__intro">
            <div className="collection__intro__title">Shoes Spring 2030</div>
            <div className="collection__intro__go">MUA NGAY</div>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <img src={banner3} />
        </div>
      </div>
    </div>
  );
}
