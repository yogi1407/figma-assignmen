import { Badge, Button, Col, Divider, Progress, Rate, Row, Space } from "antd";
import Image from "next/image";
import React from "react";
import { AiOutlineShareAlt } from "react-icons/ai";
import BigImage from "../public/assets/Background.png";
import styles from "../styles/Home.module.scss";

export default function BodyOne() {
  return (
    <div style={{ minHeight: "841px", paddingTop: "112px" }}>
      <Row justify="center">
        <Col xs={24} sm={24} md={20} lg={18}>
          <Row gutter={[32, 32]}>
            <Col xs={24} sm={24} md={12} style={{ minHeight: "841px" }}>
              <Image
                src={BigImage}
                alt=""
                style={{ width: "100%", height: "840px" }}
                height={840}
              />
            </Col>
            <Col
              xs={24}
              sm={24}
              md={12}
              style={{ minHeight: "841px", paddingLeft: "50px" }}
            >
              <h4 style={{ color: "#A0A0A0", fontSize: "12px" }}>CLOTHING</h4>
              <Row>
                <Col span={20}>
                  <h4 style={{ fontSize: "20px" }}>
                    Leather boots with tall leg
                  </h4>
                </Col>
                <Col span={4} style={{ textAlign: "right" }}>
                  <Button
                    shape="circle"
                    icon={<AiOutlineShareAlt size={20} />}
                  ></Button>
                </Col>
              </Row>

              <p style={{ fontSize: "10px", color: "gray" }}>
                <Rate
                  defaultValue={4}
                  style={{ fontSize: "10px", color: "black" }}
                />
                <span style={{ color: "#616161" }}> (1.234 reviews)</span> |{" "}
                <span style={{ color: "black", fontWeight: "bold" }}>SKU:</span>{" "}
                <span>A515-56-36UT</span> |{" "}
                <span style={{ color: "green" }}>In Stock</span>
              </p>

              <Row gutter={[32, 32]}>
                <Col span={8} style={{ fontSize: "30px", color: "orangered" }}>
                  $68.00
                </Col>
                <Col
                  span={8}
                  style={{
                    fontSize: "12px",
                    color: "gray",
                    paddingTop: "20px",
                  }}
                >
                  $98.00
                </Col>
                <Col span={8}>
                  <Badge.Ribbon text="Save $12"></Badge.Ribbon>
                </Col>
              </Row>

              <p style={{ fontSize: "14px", color: " #616161" }}>
                The garments labelled as Committed are products that have been
                produced using sustainable fibres or processes, reducing their
                environmental impact.
              </p>
              <Divider style={{ backgroundColor: "#E5E5E5" }} />
              <Row gutter={[32, 32]}>
                <Col span={8} style={{ color: "black", fontWeight: "bold" }}>
                  Sold It:
                </Col>
                <Col span={16} style={{ fontSize: "14px" }}>
                  <div
                    style={{
                      width: "70%",
                      height: "8px",
                      backgroundColor: "#E5E5E5",
                    }}
                  >
                    <div className={styles.loader}></div>
                  </div>
                  Available:{" "}
                  <span style={{ color: "green", fontSize: "14px" }}>20</span>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
