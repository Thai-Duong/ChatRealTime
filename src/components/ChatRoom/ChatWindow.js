import { UserAddOutlined } from "@ant-design/icons";
import { Alert, Avatar, Button, Form, Input, Tooltip } from "antd";
import React, { useContext, useMemo, useState } from "react";
import { AppContext } from "../../Context/AppProvider";
import { AuthContext } from "../../Context/AuthProvider";
import { addDocument } from "../../firebase/service";
import useFirestore from "../../hooks/useFirestore";
import Message from "./Message";

const ChatWindow = () => {
  const { selectedRoom, members, setIsInviteMemberVisible } =
    useContext(AppContext);
  const {
    user: { uid, photoURL, displayName },
  } = useContext(AuthContext);
  const [form] = Form.useForm();
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleOnSubmit = (e) => {
    addDocument("message", {
      text: inputValue,
      uid,
      photoURL,
      roomId: selectedRoom.id,
      displayName,
    });
    form.resetFields("message");
  };
  const condition = useMemo(
    () => ({
      fieldName: "roomId",
      operator: "==",
      compareValue: selectedRoom.id,
    }),
    [selectedRoom.id]
  );
  const messages = useFirestore("message", condition);
  console.log({ messages });
  return (
    <div className="h-[100vh]">
      {selectedRoom.id ? (
        <>
          <div className="flex justify-between h-[56px]  py-3 px-5 border-b-2 ">
            <div className="flex flex-col justify-center">
              <p className="text-2xl">{selectedRoom.name}</p>
              <span>{selectedRoom.des}</span>
            </div>
            <div className="flex items-center ">
              <Button
                type="text"
                className="flex items-center"
                icon={<UserAddOutlined />}
                onClick={() => setIsInviteMemberVisible(true)}
              >
                Moi
              </Button>
              <Avatar.Group size="small" maxCount={2}>
                {members.map((member) => (
                  <Tooltip title={member.displayName} key={member.id}>
                    <Avatar src={member.photoURL}>
                      {member.photoURL
                        ? ""
                        : member.displayName?.charAt(0)?.toUpperCase()}
                    </Avatar>
                  </Tooltip>
                ))}
              </Avatar.Group>
            </div>
          </div>
          <div className="h-[calc(100%-56px)] flex flex-col justify-end p-3">
            <div className="max-h-full overflow-auto">
              {messages.map((mess) => (
                <Message
                  key={mess.id}
                  text={mess.text}
                  photoURL={mess.photoURL}
                  displayName={mess.displayName}
                  createAt={mess.createAt}
                ></Message>
              ))}
            </div>
            <Form form={form} className="flex flex-row justify-between p-1 ">
              <Form.Item name="message">
                <Input
                  className="w-[1000px] p-2"
                  bordered={null}
                  onChange={handleInputChange}
                  onPressEnter={handleOnSubmit}
                  autoComplete="off"
                  placeholder="tin nhan"
                ></Input>
              </Form.Item>
              <Button
                className="flex items-center p-5"
                onPressEnter={handleOnSubmit}
              >
                Giu
              </Button>
            </Form>
          </div>
        </>
      ) : (
        <Alert
          message="Hya chon phong"
          type="info"
          showIcon
          className="m-3"
        ></Alert>
      )}
    </div>
  );
};

export default ChatWindow;
