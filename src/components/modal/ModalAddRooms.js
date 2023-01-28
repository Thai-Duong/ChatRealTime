import { Form, Input, Modal } from "antd";
import React, { useContext } from "react";
import { AppContext } from "../../Context/AppProvider";
import { AuthContext } from "../../Context/AuthProvider";
import { addDocument } from "../../firebase/service";

const ModalAddRooms = () => {
  const { isAddRoomVisible, setIsAddRoomVisible } = useContext(AppContext);
  const [form] = Form.useForm();
  const {
    user: { uid },
  } = useContext(AuthContext);
  const handleOk = () => {
    // console.log({ formhh: form.getFieldValue() });
    addDocument("rooms", { ...form.getFieldsValue(), members: [uid] });
    form.resetFields();
    setIsAddRoomVisible(false);
  };
  const handleCancel = () => {
    form.resetFields();
    setIsAddRoomVisible(false);
  };
  return (
    <div>
      <Modal
        title="Tạo phòng"
        open={isAddRoomVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form form={form}>
          <Form.Item label="Tên Phòng" name="name">
            <Input placeholder="Nhập tên phòng"></Input>
          </Form.Item>
          <Form.Item label="Tên Phòng" name="des">
            <Input.TextArea placeholder="Mota"></Input.TextArea>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default ModalAddRooms;
