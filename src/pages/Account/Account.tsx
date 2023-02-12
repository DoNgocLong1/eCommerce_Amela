import React, { useState } from "react";
import {
  AccountContainer,
  AvatarUser,
  Container,
  Feature,
  FeatureWrapper,
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
import ChangePass from "./components/ChangePass/ChangePass";
const Account = () => {
  const [isProfileComponent, setIsProfileComponent] = useState<boolean>(true);
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
    const date = `${values.date.$y}-${values.date.$M + 1}-${values.date.$D}`;
    const formData = {
      name: values.username,
      phone: values.phoneNumber,
      address: values.address,
      date_of_birth: date,
    };
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        "Content-Type":
          "multipart/form-data; boundary=<calculated when request is sent>",
        Authorization: token ? `Bearer ${token}` : "",
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
        <FeatureWrapper>
          <Feature onClick={() => setIsProfileComponent(true)}>Profile</Feature>
          <Feature onClick={() => setIsProfileComponent(false)}>
            Change Password
          </Feature>
        </FeatureWrapper>
      </Sidebar>
      <AccountContainer>
        {!isProfileComponent ? (
          <ChangePass />
        ) : (
          <Form layout="horizontal" size="large" onFinish={onFinish}>
            <Form.Item name="username" label="Username">
              <Input placeholder="Username" defaultValue={userData.name} />
            </Form.Item>
            <Form.Item name="email" label="Email">
              <Input
                placeholder="Email"
                disabled
                defaultValue={userData.email}
              />
            </Form.Item>
            <Form.Item name="address" label="Address">
              <Input placeholder="Address" />
            </Form.Item>
            <Form.Item name="phoneNumber" label="PhoneNumber">
              <Input placeholder="Phone number" />
            </Form.Item>
            <Form.Item name="date" label="Date of birth">
              <DatePicker />
            </Form.Item>
            <Form.Item name="avatar" label="Avatar">
              <UploadAvatar>
                <AvatarUser src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG6a6KfKK66Jy1eCuDau7yp2rb5dIfGvl45g&usqp=CAU" />
                <Upload {...props}>
                  <Button icon={<UploadOutlined />}>Click to Upload</Button>
                </Upload>
              </UploadAvatar>
            </Form.Item>
            <Form.Item name="submit">
              <Button htmlType="submit">Button</Button>
            </Form.Item>
          </Form>
        )}
      </AccountContainer>
    </Container>
  );
};

export default Account;
