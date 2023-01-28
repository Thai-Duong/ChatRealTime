import { Avatar, Typography } from "antd";
import { formatRelative } from "date-fns";
import React from "react";

const Message = ({ text, displayName, createAt, photoURL }) => {
  function formatDate(seconds) {
    let formattedDate = "";

    if (seconds) {
      formattedDate = formatRelative(new Date(seconds * 1000), new Date());

      formattedDate =
        formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
    }

    return formattedDate;
  }
  return (
    <div className="mb-2">
      <div>
        <Avatar src={photoURL}>A</Avatar>
        <Typography.Text className="ml-5 text-xl bold">
          {displayName}
        </Typography.Text>
        <Typography.Text className="ml-5 text-[15px] ">
          {formatDate(createAt?.seconds)}
        </Typography.Text>
      </div>
      <div className="">
        <Typography.Text className="ml-12 text-lg">{text}</Typography.Text>
      </div>
    </div>
  );
};

export default Message;
