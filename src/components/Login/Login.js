import { Col, Row, Button, Typography } from "antd";
import React from "react";
import firebase, { auth, db } from "../../firebase/config";
import { addDocument, generateKeywords } from "../../firebase/service";
const { Title } = Typography;

const fbProvider = new firebase.auth.FacebookAuthProvider();
const Login = () => {
  const handleLogin = async () => {
    const { additionalUserInfo, user } = await auth.signInWithPopup(fbProvider);
    if (additionalUserInfo?.isNewUser) {
      addDocument("users", {
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        uid: user.uid,
        providerId: additionalUserInfo.providerId,
        keywords: generateKeywords(user.displayName?.toLowerCase()),
      });
    }
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
