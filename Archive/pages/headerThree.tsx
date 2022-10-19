import { Space } from "antd";
import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

export default function HeaderThree() {
  return (
    <div
      style={{
        backgroundColor: "black",
        height: "30px",
        width: "100%",
        textAlign: "center",
      }}
    >
      <Space>
        <span style={{ color: "white", fontSize: "14px" }}>
          Free Delivery on orders above Rs. 1000, DON’T MISS
        </span>{" "}
        <span style={{ color: "orangered" }}>
          {" "}
          SHOP NOW <AiOutlineArrowRight style={{ color: "white" }} />{" "}
        </span>
      </Space>
    </div>
  );
}
