import { UserAddOutlined } from "@ant-design/icons";
import { Avatar, Button, Form, Input, Tooltip } from "antd";
import React from "react";
import Message from "./Message";

const ChatWindow = () => {
  return (
    <div className="h-[100vh]">
      <div className="flex justify-between h-[56px]  py-3 px-5 border-b-2 ">
        <div className="flex flex-col justify-center">
          <p className="text-2xl">Room 1</p>
          <span>Day la room 1</span>
        </div>
        <div className="flex items-center ">
          <Button
            type="text"
            className="flex items-center"
            icon={<UserAddOutlined />}
          >
            Moi
          </Button>
          <Avatar.Group size="small" maxCount={2}>
            <Tooltip title="A">
              <Avatar>a</Avatar>
            </Tooltip>
            <Tooltip title="A">
              <Avatar>b</Avatar>
            </Tooltip>
            <Tooltip title="A">
              <Avatar>c</Avatar>
            </Tooltip>
          </Avatar.Group>
        </div>
      </div>
      <div className="h-[calc(100%-56px)] flex flex-col justify-end p-3">
        <div className="max-h-full overflow-auto">
          <Message
            text="Text"
            photoURL={null}
            displayName="Thai"
            createAt={2344553}
          ></Message>
          <Message
            text="Text"
            photoURL={null}
            displayName="Thai"
            createAt={2344553}
          ></Message>
          <Message
            text="Text"
            photoURL={null}
            displayName="Thai"
            createAt={2344553}
          ></Message>
          <Message
            text="Text"
            photoURL={null}
            displayName="Thai"
            createAt={2344553}
          ></Message>
        </div>
        <Form className="flex flex-row justify-between p-1 ">
          <Form.Item>
            <Input
              className="w-[1000px] p-2"
              // bordered={null}
              autoComplete="off"
              placeholder="tin nhan"
            ></Input>
          </Form.Item>
          <Button className="flex items-center p-5">Giu</Button>
        </Form>
      </div>
    </div>
  );
};

export default ChatWindow;
