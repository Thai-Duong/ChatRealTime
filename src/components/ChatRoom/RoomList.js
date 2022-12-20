import { Button, Collapse, Typography } from "antd";
import React from "react";
import { PlusSquareOutlined } from "@ant-design/icons";
const { Panel } = Collapse;

const RoomList = () => {
  return (
    <Collapse ghost defaultActiveKey={["1"]}>
      <Panel header="Danh Sách Các Phòng">
        <Typography.Link className="block mt-5 text-white">
          Room 1
        </Typography.Link>
        <Typography.Link className="block mt-5 text-white">
          Room 1
        </Typography.Link>
        <Typography.Link className="block mt-5 text-white">
          Room 1
        </Typography.Link>
        <Button
          type="text"
          icon={<PlusSquareOutlined />}
          className="flex items-center p-0 mt-3 text-white"
        >
          Thêm Phòng
        </Button>
      </Panel>
    </Collapse>
  );
};

export default RoomList;
