import { Col, Row, Typography, Tabs, Space, Badge } from "antd";
import React from "react";
import {
  AiOutlineSearch,
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";

export default function HeaderTwo() {
  return (
    <div style={{ minHeight: "60px" }}>
      <Row gutter={[32, 32]}>
        <Col span={4} style={{ textAlign: "right", paddingTop: "10px" }}>
          <Typography.Title level={3}>LOGO</Typography.Title>
        </Col>
        <Col span={14}>
          <Tabs defaultActiveKey="1">
            <Tabs.TabPane tab="   Home" key="1" />
            <Tabs.TabPane tab="School Uniforms" key="2" />
            <Tabs.TabPane tab="Corporate" key="3" />
            <Tabs.TabPane tab="Sports" key="4" />
            <Tabs.TabPane tab="  Blog" key="5" />
          </Tabs>
        </Col>
        <Col
          span={6}
          style={{
            textAlign: "right",
            paddingTop: "10px",
            paddingRight: "10px",
          }}
        >
          <Space>
            <AiOutlineSearch size={20} />
            <AiOutlineHeart size={20} />
            <Badge count={1} size="small">
              <AiOutlineShoppingCart size={20} />
            </Badge>

            <AiOutlineUser size={20} />
          </Space>
        </Col>
      </Row>
    </div>
  );
}
