import { Avatar, Button, Typography } from "antd";
import React from "react";
import { auth } from "../../firebase/config";

const UseInfo = () => {
  return (
    <div className="flex justify-between h-[56px] px-2 py-2 border-b-2 ">
      <div>
        <Avatar>A</Avatar>
        <Typography.Text>Duong thai</Typography.Text>
      </div>
      <Button ghost onClick={() => auth.signOut()}>
        Đăng Xuất
      </Button>
    </div>
  );
};

export default UseInfo;
