import { Breadcrumb } from "antd";
import React from "react";

export default function HeaderFour() {
  return (
    <div
      style={{
        minHeight: "38px",
        backgroundColor: "#F7F7F7",
        paddingLeft: "50px",
      }}
    >
      <Breadcrumb>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Category Sports</Breadcrumb.Item>
        <Breadcrumb.Item>Football Shirt</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
}
