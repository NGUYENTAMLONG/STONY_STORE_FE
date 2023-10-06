import React from "react";
import "./scss/footer.scss";
import { Layout } from "antd";
import { Col, Row } from "antd";
import { AimOutlined } from "@ant-design/icons";
import "bootstrap/dist/css/bootstrap.css";
const { Footer } = Layout;
export default function FooterComponent() {
  return (
    <>
      <Footer className="footer">
        <div className="container">
          <Row>
            <Col span={6} className="px-3">
              <div className="footer__about">
                <div className="footer__about__title d-flex align-items-center justify-content-start">
                  <div className="footer__about__title__icon d-flex align-items-center justify-content-start">
                    <AimOutlined />
                  </div>
                  <div className="footer__about__title__text fs-4">
                    Về chúng tôi
                  </div>
                </div>
                <div className="footer__about__location d-flex justify-content-start align-items-center mt-4">
                  <div className="footer__about__location__icon">
                    <i className="fa-solid fa-location-dot"></i>
                  </div>
                  <div className="footer__about__location__textd-block text-light">
                    THPT Yên Dũng số 2, Tân An - Yên Dũng - Bắc Giang
                  </div>
                </div>
                <div className="footer__about__phone d-flex justify-content-start align-items-center mt-3">
                  <div className="footer__about__phone__icon">
                    <i className="fa-solid fa-phone"></i>
                  </div>
                  <div className="footer__about__phone__text">
                    + 084 0366 686 868
                  </div>
                </div>
                <div className="footer__about__mail d-flex justify-content-start align-items-center mt-3">
                  <div className="footer__about__mail__icon">
                    <i className="fa-solid fa-envelope"></i>
                  </div>
                  <div className="footer__about__mail__text">
                    stonystore@gmail.com
                  </div>
                </div>
                <div className="footer__about__form d-flex justify-content-start align-items-center mt-3">
                  <div className="footer__about__form__container">
                    <input
                      className="form-control footer__about__form__input"
                      value=""
                      placeholder="Nhập email của bạn ..."
                    />
                    <button className="footer__about__form__submit">
                      <i className="fa-regular fa-paper-plane"></i>
                    </button>
                  </div>
                </div>
              </div>
            </Col>
            <Col span={6} className="px-3">
              <div className="footer__support">
                <div className="footer__support__title d-flex align-items-center justify-content-start">
                  <div className="footer__support__title__icon d-flex align-items-center justify-content-center">
                    <i className="fa-brands fa-teamspeak"></i>
                  </div>
                  <div className="footer__support__title__text fs-4">
                    Tư vấn
                  </div>
                </div>
                <div className="footer__support__hotline d-flex justify-content-start align-items-center">
                  <div className="footer__support__hotline__text">
                    <a href="#" className="text-decoration-none text-light">
                      Hỗ trợ đường dây nóng
                    </a>
                  </div>
                </div>
                <div className="footer__support__collaborator d-flex justify-content-start align-items-center">
                  <div className="footer__support__collaborator__text mt-3">
                    <a href="#" className="text-decoration-none text-light">
                      Cộng tác viên
                    </a>
                  </div>
                </div>
                <div className="footer__support__recruitment d-flex justify-content-start align-items-center mt-3">
                  <div className="footer__support__recruitment__text ">
                    <a href="#" className="text-decoration-none text-light">
                      Tuyển dụng
                    </a>
                  </div>
                </div>
              </div>
            </Col>
            <Col span={6} className="px-3">
              <div className="footer__follow">
                <div className="footer__follow__title d-flex align-items-center justify-content-start">
                  <div className="footer__follow__title__icon d-flex align-items-center justify-content-center">
                    <i className="fa-regular fa-note-sticky"></i>
                  </div>
                  <div className="footer__infor__title__text fs-4">
                    Thông tin
                  </div>
                </div>
                <div className="footer__infor__homepage d-flex justify-content-start align-items-center">
                  <div className="footer__infor__homepage__textmt-3">
                    <a href="#" className="text-decoration-none text-light">
                      Trang chủ
                    </a>
                  </div>
                </div>
                <div className="footer__infor__about d-flex justify-content-start align-items-center">
                  <div className="footer__infor__about__text mt-3">
                    <a href="#" className="text-decoration-none text-light">
                      Về chúng tôi
                    </a>
                  </div>
                </div>
                <div className="footer__infor__news d-flex justify-content-start align-items-center">
                  <div className="footer__infor__news__text mt-3">
                    <a href="#" className="text-decoration-none text-light">
                      Bài viết
                    </a>
                  </div>
                </div>
                <div className="footer__infor__item d-flex justify-content-start align-items-center">
                  <div className="footer__infor__item__text mt-3">
                    <a href="#" className="text-decoration-none text-light">
                      Sản phẩm mới
                    </a>
                  </div>
                </div>
              </div>
            </Col>
            <Col span={6} className="px-3">
              <div className="footer__follow">
                <div className="footer__follow__title d-flex align-items-center justify-content-start">
                  <div className="footer__follow__title__icon d-flex align-items-center justify-content-center">
                    <i className="fa-solid fa-earth-americas"></i>
                  </div>
                  <div className="footer__follow__title__text fs-4">
                    Theo dõi chúng tôi
                  </div>
                </div>
                <div className="d-flex justify-content-start">
                  <div className="footer__follow__facebook">
                    <div className="footer__follow__facebook__icon">
                      <a href="#" className="text-decoration-none text-light">
                        <i className="fa-brands fa-square-facebook"></i>
                      </a>
                    </div>
                  </div>
                  <div className="footer__follow__instagram">
                    <div className="footer__follow__instagram__icon">
                      <a href="#" className="text-decoration-none text-light">
                        <i className="fa-brands fa-square-instagram"></i>
                      </a>
                    </div>
                  </div>
                  <div className="footer__follow__twitter">
                    <div className="footer__follow__twitter__icon">
                      <a href="#" className="text-decoration-none text-light">
                        <i className="fa-brands fa-square-x-twitter"></i>
                      </a>
                    </div>
                  </div>
                  <div className="footer__follow__youtube">
                    <div className="footer__follow__youtube__icon">
                      <a href="#" className="text-decoration-none text-light">
                        <i className="fa-brands fa-square-youtube"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Footer>
      <div className="footer__map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4421.715893532514!2d106.27408643222606!3d21.263349681538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31356e15b5aaaaab%3A0xd9ce6b1e95d3cc28!2zVEhQVCBZw6puIETFqW5nIHPhu5EgMg!5e0!3m2!1svi!2s!4v1695880139562!5m2!1svi!2s"
          width="100%"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
}
