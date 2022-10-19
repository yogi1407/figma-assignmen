import { Col, Divider, Input, Row, Space } from "antd";
import React from "react";
import { BsFacebook, BsTelephoneInbound } from "react-icons/bs";
import {
  AiOutlineInstagram,
  AiOutlineYoutube,
  AiOutlineTwitter,
  AiOutlineMail,
} from "react-icons/ai";
import { FaPinterest } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import styles from "../styles/Home.module.scss";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <Row justify="center">
        <Col xs={24} sm={24} md={20}>
          <Row gutter={[32, 32]}>
            <Col xs={24} sm={24} md={12} lg={6} xl={4.8}>
              <h3
                style={{
                  color: "white",
                  fontSize: "20px",
                }}
              >
                Sign Up Today and get <br />
                Rs. 200 off On your first order.
              </h3>
              <Input
                style={{ width: "337px", marginBlock: "20px" }}
                placeholder="Enter your e-mail"
              />
              <br />
              <Space>
                <BsFacebook style={{ color: "white", fontSize: "20px" }} />
                <AiOutlineInstagram
                  style={{
                    color: "white",
                    fontSize: "20px",
                    marginLeft: "10px",
                  }}
                />
                <AiOutlineYoutube
                  style={{
                    color: "white",
                    fontSize: "20px",
                    marginLeft: "10px",
                  }}
                />
                <AiOutlineTwitter
                  style={{
                    color: "white",
                    fontSize: "20px",
                    marginLeft: "10px",
                  }}
                />
                <FaPinterest
                  style={{
                    color: "white",
                    fontSize: "20px",
                    marginLeft: "10px",
                  }}
                />
              </Space>
            </Col>
            <Col xs={24} sm={24} md={12} lg={6} xl={4.8}>
              <h4 style={{ color: "white" }}>Collection</h4>
              <br />
              <p style={{ color: "gray" }}>Clothing</p>
              <p style={{ color: "gray" }}>Tops</p>
              <p style={{ color: "gray" }}>Sweaters</p>
              <p style={{ color: "gray" }}>Dresses</p>
              <p style={{ color: "gray" }}>Shoes</p>
            </Col>
            <Col xs={24} sm={24} md={12} lg={6} xl={4.8}>
              <h4 style={{ color: "white" }}>Company</h4>
              <br />
              <p style={{ color: "gray" }}>Careers at Toppers</p>
              <p style={{ color: "gray" }}>About Toppers</p>
              <p style={{ color: "gray" }}>Contacts Us</p>
              <p style={{ color: "gray" }}>Gift Cards</p>
              <p style={{ color: "gray" }}>Blog</p>
            </Col>
            <Col xs={24} sm={24} md={12} lg={6} xl={4.8}>
              <h4 style={{ color: "white" }}>Need Help</h4>
              <br />
              <p style={{ color: "gray" }}>Order Status</p>
              <p style={{ color: "gray" }}>Shipping & Delivery</p>
              <p style={{ color: "gray" }}>FAQ & Help</p>
              <p style={{ color: "gray" }}>Terms & Conditions</p>
              <p style={{ color: "gray" }}>Legal & Privacy</p>
            </Col>
            <Col xs={24} sm={24} md={12} lg={6} xl={4.8}>
              <h4 style={{ color: "white" }}>Exclusive Services</h4>
              <br />
              <p style={{ color: "gray" }}>
                <Space>
                  <BsTelephoneInbound
                    style={{ color: "white", fontSize: "20px" }}
                  />{" "}
                  Call Us +1 666 22322
                </Space>
              </p>
              <p style={{ color: "gray" }}>
                <Space>
                  <AiOutlineMail style={{ color: "white", fontSize: "20px" }} />{" "}
                  Send us an email
                </Space>
              </p>
              <p style={{ color: "gray" }}>
                <Space>
                  <CiLocationOn style={{ color: "white", fontSize: "20px" }} />{" "}
                  See out stores
                </Space>
              </p>
            </Col>
          </Row>
          <Divider style={{ color: "white", backgroundColor: "white" }} />
          <p style={{ color: "white" }}>
            © 2022 Company Name. All Rights Reserved.
          </p>
        </Col>
      </Row>
    </div>
  );
}
