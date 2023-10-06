import React from "react";

export default function News() {
  return (
    <div className="news container">
      <div className="news__title">
        <div className="news__title-latest">LATEST NEWS</div>
        <div className="news__title">XU HƯỚNG THỜI TRANG</div>
      </div>
      <div className="row">
        <div className="col-4">
          <div className="news__item">
            <div className="news__item__img">
              <img src="https://preview.colorlib.com/theme/malefashion/img/blog/blog-1.jpg" />
            </div>
            <div className="news__item__infor">
              <div className="news__item__infor-time"></div>
              <div className="news__item__infor-title">
                <p>What Curling Irons Are The Best Ones</p>
              </div>
              <div className="news__item__infor-action">
                <button>ĐỌC BÀI VIẾT</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4"></div>
        <div className="col-4"></div>
      </div>
    </div>
  );
}
