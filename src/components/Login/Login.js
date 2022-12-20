import { Col, Row, Button, Typography } from "antd";
import React from "react";
import firebase, { auth } from "../../firebase/config";
const { Title } = Typography;

const fbProvider = new firebase.auth.FacebookAuthProvider();
const Login = () => {
  const handleLogin = async () => {
    const data = await auth.signInWithPopup(fbProvider);
    console.log({ data });
  };

  return (
    <div>
      <Row justify="center" className="h-[800px]">
        <Col span={8}>
          <Title className="text-center" level={3}>
            Fun Chat
          </Title>
          <Button className="w-full mb-1">google</Button>
          <Button className="w-full" onClick={handleLogin}>
            facebook
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
