import { Col, Row } from "antd";
import React from "react";
import RoomList from "./RoomList";
import UseInfo from "./UseInfo";

const Sidebar = () => {
  return (
    <div className="bg-gray-600 text-white h-[100vh] ">
      <Row>
        <Col span={24}>
          <UseInfo />
        </Col>
        <Col span={24}>
          <RoomList />
        </Col>
      </Row>
    </div>
  );
};

export default Sidebar;
