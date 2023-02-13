import React, { useState } from "react";
import { Button, Checkbox, Form, Input } from "antd";
import {
  Container,
  LoginWrapper,
  LoginTitle,
  LoginFeatureLogin,
  ForgotPassword,
  Registry,
  ButtonWrapper,
  ErrorMessage,
} from "./Login.styled";
import { UserOutlined } from "@ant-design/icons";
import { LockOutlined } from "@ant-design/icons/lib/icons";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux/es/exports";
import { loginSuccess } from "features/auth/authSlice";
import { instance } from "apiServices/instance";
const Login = () => {
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onFinish = async (values: any) => {
    const loginData: any = {
      email: values.username,
      password: values.password,
    };
    await instance
      .post("login", loginData)
      .then((res) => {
        if (!res.data.data) {
          console.log("login failed");
        }
        console.log(res.data.data);
        localStorage.setItem("token", res.data.data.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.data.user));
        dispatch(loginSuccess(res.data.data));
        navigate("/");
      })
      .catch(() => {
        setError("username or password incorrect");
      });
  };
  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Container>
      <LoginWrapper>
        <LoginTitle>Welcome to Predator</LoginTitle>
        <Form
          layout="horizontal"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            name="username"
            hasFeedback
            rules={[
              { required: true, message: "Please input your Username!" },
              { max: 200, message: "please input less than 200 characters" },
            ]}
          >
            <Input prefix={<UserOutlined />} placeholder="Username" />
          </Form.Item>
          <Form.Item
            name="password"
            hasFeedback
            rules={[
              { required: true, message: "Please input your password!" },
              { max: 200, message: "please input less than 200 characters" },
            ]}
          >
            <Input.Password prefix={<LockOutlined />} placeholder="Password" />
          </Form.Item>
          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          <LoginFeatureLogin>
            <ForgotPassword>Forgot password</ForgotPassword>
            <Registry to="/registry">Registry</Registry>
          </LoginFeatureLogin>
          {error && <ErrorMessage>{error}</ErrorMessage>}
          <ButtonWrapper name="submit" wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </ButtonWrapper>
        </Form>
      </LoginWrapper>
    </Container>
  );
};
export default Login;
