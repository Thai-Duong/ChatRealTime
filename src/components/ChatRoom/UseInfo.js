import { Avatar, Button, Typography } from "antd";
import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import { auth } from "../../firebase/config";

const UseInfo = () => {
  const {
    user: { displayName, photoURL },
  } = useContext(AuthContext);
  return (
    <div className="flex justify-between h-[56px] px-2 py-2 border-b-2 ">
      <div className="flex justify-center">
        <Avatar className="mr-5" src={photoURL}>
          {photoURL ? "" : displayName.charAt(0).toUpperCase()}
        </Avatar>
        <Typography.Text className="text-xl ">{displayName}</Typography.Text>
      </div>
      <Button ghost onClick={() => auth.signOut()}>
        Đăng Xuất
      </Button>
    </div>
  );
};

export default UseInfo;
