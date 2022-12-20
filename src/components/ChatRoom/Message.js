import { Avatar, Typography } from "antd";
import React from "react";

const Message = ({ text, displayName, createAt, photoURL }) => {
  return (
    <div className="mb-2">
      <div>
        <Avatar src={photoURL}>A</Avatar>
        <Typography.Text className="ml-5 text-xl bold">
          {displayName}
        </Typography.Text>
        <Typography.Text className="ml-5 text-[15px] ">
          {createAt}
        </Typography.Text>
      </div>
      <div className="">
        <Typography.Text className="ml-12 text-lg">{text}</Typography.Text>
      </div>
    </div>
  );
};

export default Message;
