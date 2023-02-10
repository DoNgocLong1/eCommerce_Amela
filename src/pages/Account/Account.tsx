import React from "react";
import {
  AccountContainer,
  AvatarUser,
  Container,
  Sidebar,
  SidebarContainer,
  SidebarHeader,
  SidebarHeaderImg,
  SidebarInfoWrapper,
  UploadAvatar,
  UserEmail,
  UserName,
} from "./Account.styled";
import { Button, DatePicker, Form, Input, message, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import type { UploadProps } from "antd";
import { updateUserProfile } from "apiServices/userServices";
const Account = () => {
  const props: UploadProps = {
    name: "file",
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };
  const onFinish = async (values: any) => {
    console.log(values);
    const formData = {
      name: values.username,
      phone: values.phoneNumber,
      address: values.address,
      date_of_birth: values.date,
    };
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    updateUserProfile(formData, config);
  };
  const user = localStorage.getItem("user");
  const userData = JSON.parse(user || "");
  return (
    <Container>
      <Sidebar>
        <SidebarContainer>
          <SidebarHeader>
            <SidebarHeaderImg src={userData.user_img} />
            <SidebarInfoWrapper>
              <UserName>{userData.name}</UserName>
              <UserEmail>{userData.email}</UserEmail>
            </SidebarInfoWrapper>
          </SidebarHeader>
        </SidebarContainer>
      </Sidebar>
      <AccountContainer>
        <Form layout="horizontal" size="large" onFinish={onFinish}>
          <Form.Item name="username">
            <Input placeholder="Username" />
          </Form.Item>
          <Form.Item name="email">
            <Input placeholder="Email" />
          </Form.Item>
          <Form.Item name="address">
            <Input placeholder="Address" />
          </Form.Item>
          <Form.Item name="phoneNumber">
            <Input placeholder="Phone number" />
          </Form.Item>
          <Form.Item name="date">
            <DatePicker />
          </Form.Item>
          <Form.Item name="submit">
            <Button htmlType="submit">Button</Button>
          </Form.Item>
        </Form>
        <UploadAvatar>
          <AvatarUser src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG6a6KfKK66Jy1eCuDau7yp2rb5dIfGvl45g&usqp=CAU" />
          <Upload {...props}>
            <Button icon={<UploadOutlined />}>Click to Upload</Button>
          </Upload>
        </UploadAvatar>
      </AccountContainer>
    </Container>
  );
};

export default Account;
