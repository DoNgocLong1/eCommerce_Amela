import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import {
  Container,
  LoginWrapper,
  LoginTitle,
  LoginFeatureLogin,
  ForgotPassword,
  Registry,
  ButtonWrapper,
} from "./Login.styled";
import { UserOutlined } from "@ant-design/icons";
import { LockOutlined } from "@ant-design/icons/lib/icons";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux/es/exports";
import { loginSuccess } from "features/auth/authSlice";
import { instance } from "apiServices/instance";
const Login = () => {
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
        console.log(res.data.data.data.token);
        localStorage.setItem("token", res.data.data.data.token);
        dispatch(loginSuccess(res.data.data));
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
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
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input prefix={<UserOutlined />} placeholder="Username" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
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
