import { Col, Row } from "antd";
import React from "react";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Menu, Space } from "antd";

const menu = (
  <Menu
    items={[
      {
        label: <a>French</a>,
        key: "0",
      },
      {
        label: <a>German</a>,
        key: "1",
      },
    ]}
  />
);

const menu2 = (
  <Menu
    items={[
      {
        label: <a>RPS</a>,
        key: "0",
      },
      {
        label: <a>CAD</a>,
        key: "1",
      },
    ]}
  />
);

export default function Header1() {
  return (
    <div
      style={{
        backgroundColor: "white",
        height: "30px",
        borderBottom: "1px solid gray",
      }}
    >
      <Row justify="center">
        <Col xs={24} sm={24} md={16}>
          <Space>
            <Dropdown overlay={menu} trigger={["click"]}>
              <a onClick={(e) => e.preventDefault()} style={{ color: "black" }}>
                <Space>
                  English
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
            <Dropdown overlay={menu2} trigger={["click"]}>
              <a onClick={(e) => e.preventDefault()} style={{ color: "black" }}>
                <Space>
                  USD
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
          </Space>
        </Col>
      </Row>
    </div>
  );
}
