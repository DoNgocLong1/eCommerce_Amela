import React /* { useEffect } */ from "react";
import { Button, Form, Input } from "antd";
import { Container, RegistryWrapper, RegistryTitle } from "./Registry.styled";
/* import * as searchService from "apiServices/searchService"; */
import { UserOutlined } from "@ant-design/icons";
import { LockOutlined } from "@ant-design/icons/lib/icons";
import { useNavigate } from "react-router-dom";
import { instance } from "apiServices/instance";
const Registry = () => {
  const navigate = useNavigate();
  const onFinish = async (values: any) => {
    const registryData = {
      name: values.fullname,
      email: values.username,
      password: values.password,
      c_password: values.retype_password,
    };
    console.log(registryData);
    await instance
      .post("register", registryData)
      .then((res) => {
        localStorage.setItem("token", res.data.data.data.token);
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
      <RegistryWrapper>
        <RegistryTitle>Registry to join Predator</RegistryTitle>
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
            name="fullname"
            rules={[
              { required: true, message: "Please input your full name!" },
            ]}
          >
            <Input prefix={<UserOutlined />} placeholder="Full name" />
          </Form.Item>
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
          <Form.Item
            name="retype_password"
            rules={[
              { required: true, message: "Please retype your password!" },
            ]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="Retype password"
            />
          </Form.Item>
          <Form.Item name="submit" wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </RegistryWrapper>
    </Container>
  );
};
export default Registry;
