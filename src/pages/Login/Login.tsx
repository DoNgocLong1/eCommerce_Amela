/* import React, { useEffect } from "react"; */
import { Button, Checkbox, Form, Input } from "antd";
import {
  Container,
  LoginWrapper,
  LoginTitle,
  LoginFeatureLogin,
  ForgotPassword,
  Registry,
} from "./Login.styled";
/* import * as searchService from "apiServices/searchService"; */
import { UserOutlined } from "@ant-design/icons";
import { LockOutlined } from "@ant-design/icons/lib/icons";
/* import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { loginSuccess, selectAuth } from "features/auth/authSlice";
import userData from "fakeData/data"; */
import axios from "axios";
const Login = () => {
  /* const navigate = useNavigate();
  const dispatch = useDispatch(); */
  const loginUrl = "http://ecommerce.fresher.ameladev.click/api/login";
  const onFinish = (values: any) => {
    const instance = axios.create({
      baseURL: loginUrl,
      timeout: 1000,
      headers: {
        "X-CSRF-TOKEN": document
          .querySelector('meta[name="csrf-token"]')
          ?.getAttribute("content"),
      },
    });
    const loginData: any = {
      email: values.username,
      password: values.password,
    };
    instance
      .post(loginUrl, loginData)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    /* const findUser: any = userData.find(
      (user) =>
        user.email === values.username && user.password === values.password
    );
    if (!findUser) {
      return;
    }
    dispatch(loginSuccess(findUser));
    console.log(findUser);
    navigate("/home"); */
  };
  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  /*  useEffect(() => {
    const fetchApi = async () => {
      const result = await searchService.search("le");
      console.log(result);
    };
    fetchApi();
  }, []); */
  return (
    <Container>
      <LoginWrapper>
        <LoginTitle>Welcome to Predator</LoginTitle>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
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
          <Form.Item name="submit" wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </LoginWrapper>
    </Container>
  );
};
export default Login;
