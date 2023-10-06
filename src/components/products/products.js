import React, { useEffect, useState } from "react";
import Tippy from "@tippyjs/react";
// import { usePopper } from "react-popper";
import "./scss/product.scss";
import axios from "axios";
import { Row, Col } from "antd";
import apiConfig from "../../apis/apiConfig";
import * as _ from "lodash";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [reviewProducts, setReviewProducts] = useState([]);
  const [reviewId, setReviewId] = useState(7);
  const [activeLabel, setActiveLabel] = useState(1);

  const getProducts = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/products?page=1&limit=10"
      );
      console.log(response);
      if (response.status === 200 && response.data) {
        setProducts([...response.data.data]);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const handleClickReview = (reviewId, activeLabel) => {
    setReviewId(reviewId);
    setActiveLabel(activeLabel);
  };

  const getReviewProducts = async (categoryId, page, limit) => {
    try {
      const response = await axios.get(
        `http://localhost:3000/categories/${categoryId}/products?page=${page}&limit=${limit}`
      );
      console.log(response);
      if (response.status === 200 && response.data) {
        setReviewProducts([...response.data.data.products]);
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    // getProducts();
    getReviewProducts(reviewId, 1, 4);
  }, [reviewId]);

  return (
    <div style={{ padding: "0px 50px" }} className="container">
      <div className="breadcrumb">
        <div
          className={"breadcrumb__item " + `${activeLabel == 1 && "active"}`}
          onClick={() => handleClickReview(7, 1)}
        >
          <h3>Balo</h3>
        </div>
        <div
          className={"breadcrumb__item " + `${activeLabel == 2 && "active"}`}
          onClick={() => handleClickReview(3, 2)}
        >
          <h3>Áo Phông</h3>
        </div>
        <div
          className={"breadcrumb__item " + `${activeLabel == 3 && "active"}`}
          onClick={() => handleClickReview(4, 3)}
        >
          <h3>Giày Nam</h3>
        </div>
      </div>

      <div className="row">
        {reviewProducts.map((item, index) => {
          return (
            <div key={item.id} className="col-lg-3">
              <div className="item">
                <div className="item__image">
                  <img
                    src={`http://localhost:3000/${item.thumbnail}`}
                    alt={item.name}
                  />
                </div>
                <div className="item__infor">
                  <div className="item__infor__title">
                    <div className="item__infor__title-name">
                      <p>{item.name}</p>
                    </div>
                  </div>
                  <div className="item__infor__star d-flex">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star-half-stroke"></i>
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                  </div>
                  <div className="item__infor__price">
                    <div className="item__infor__price-sell">
                      {item.price.toLocaleString("it-IT", {
                        style: "currency",
                        currency: "VND",
                      })}
                    </div>
                  </div>
                  <div className="item__infor__color">
                    <div className="item__infor__color__box">
                      {_.uniqBy(item.variants, "colorId").map((variant) => (
                        <div className="item__infor__color__box__item">
                          <img src={apiConfig.baseUrl + variant.color.image} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="item__top">
                  <div className="item__top__state">Sale</div>
                </div>
                <div className="item__side">
                  <div className="item__side__action">
                    <i className="fa-regular fa-heart"></i>
                  </div>
                  <div className="item__side__action">
                    <i className="fa-solid fa-arrow-right-arrow-left"></i>
                  </div>
                  <div className="item__side__action">
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </div>
                </div>
                <div className="item__bottom">
                  <div className="item__bottom__action">MUA NGAY</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
