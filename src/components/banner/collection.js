import React from "react";
import "./scss/collection.scss";
import banner1 from "../../assets/images/home/banner-1.jpg";
import banner2 from "../../assets/images/home/banner-2.jpg";
import banner3 from "../../assets/images/home/banner-3.jpg";

export default function Collection() {
  return (
    <div className="collection container">
      {/* <div className="row">
        <div className="col-12 col-md-6 collection__box">
          <div className="collection__box__intro" id="intro-1">
            <div className="collection__box__intro__title">
              Clothing Collections 2030
            </div>
            <div className="collection__box__intro__go">
              <a href="#">MUA NGAY</a>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 bg-danger collection__show">
          <img src={banner1} className="collection__show__img" />
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-6 bg-danger collection__show">
          <img src={banner2} className="collection__show__img" />
        </div>
        <div className="col-12 col-md-6 collection__box">
          <div className="collection__box__intro" id="intro-2">
            <div className="collection__box__intro__title">Accessories</div>
            <div className="collection__box__intro__go">
              <a href="#">MUA NGAY</a>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-6 collection__box">
          <div className="collection__box__intro" id="intro-3">
            <div className="collection__box__intro__title">
              Shoes Spring 2030
            </div>
            <div className="collection__box__intro__go">
              <a href="#">MUA NGAY</a>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 bg-danger collection__show">
          <img src={banner3} className="collection__show__img" />
        </div>
      </div> */}

      <div className="row">
        <div className="col-lg-7 offset-lg-4">
          <div className="banner__item">
            <div className="banner__item__pic">
              <img src={banner1} alt="" />
            </div>
            <div className="banner__item__text">
              <h2>Clothing Collections 2030</h2>
              <a href="#">Shop now</a>
            </div>
          </div>
        </div>
        <div className="col-lg-5">
          <div className="banner__item banner__item--middle">
            <div className="banner__item__pic">
              <img src={banner2} alt="" />
            </div>
            <div className="banner__item__text">
              <h2>Accessories</h2>
              <a href="#">Shop now</a>
            </div>
          </div>
        </div>
        <div className="col-lg-7">
          <div className="banner__item banner__item--last">
            <div className="banner__item__pic">
              <img src={banner3} alt="" />
            </div>
            <div className="banner__item__text">
              <h2>Shoes Spring 2030</h2>
              <a href="#">Shop now</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
