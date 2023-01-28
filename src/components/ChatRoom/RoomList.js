import { PlusSquareOutlined } from "@ant-design/icons";
import { Button, Collapse, Typography } from "antd";
import React, { useContext } from "react";
import { AppContext } from "../../Context/AppProvider";
const { Panel } = Collapse;

const RoomList = () => {
  const handleAddRoom = () => {
    setIsAddRoomVisible(true);
  };
  const { rooms, setIsAddRoomVisible, setSelectedRoomId } =
    useContext(AppContext);
  console.log({ setSelectedRoomId });
  return (
    <Collapse ghost defaultActiveKey={["1"]}>
      <Panel header="Danh Sách Các Phòng" className="text-lg text-white">
        <Typography.Link>
          {rooms.map((room) => (
            <div
              className="py-2 ml-6 text-sm text-white"
              key={room.id}
              onClick={() => setSelectedRoomId(room.id)}
            >
              {room.name}
            </div>
          ))}
        </Typography.Link>

        <Button
          type="text"
          icon={<PlusSquareOutlined />}
          className="flex items-center p-0 mt-3 text-sm text-white"
          onClick={handleAddRoom}
        >
          Thêm Phòng
        </Button>
      </Panel>
    </Collapse>
  );
};

export default RoomList;
