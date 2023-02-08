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
  return (
    <Container>
      <Sidebar>
        <SidebarContainer>
          <SidebarHeader>
            <SidebarHeaderImg src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG6a6KfKK66Jy1eCuDau7yp2rb5dIfGvl45g&usqp=CAU" />
            <SidebarInfoWrapper>
              <UserName>Đỗ Ngọc Long</UserName>
              <UserEmail>dongoclong101001</UserEmail>
            </SidebarInfoWrapper>
          </SidebarHeader>
        </SidebarContainer>
      </Sidebar>
      <AccountContainer>
        <Form layout="horizontal" size="large">
          <Form.Item label="User Name">
            <Input />
          </Form.Item>
          <Form.Item label="Email">
            <Input />
          </Form.Item>
          <Form.Item label="Address">
            <Input />
          </Form.Item>
          <Form.Item label="Phone number">
            <Input />
          </Form.Item>
          <Form.Item label="DatePicker">
            <DatePicker />
          </Form.Item>
          <Form.Item label="Button">
            <Button>Button</Button>
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
