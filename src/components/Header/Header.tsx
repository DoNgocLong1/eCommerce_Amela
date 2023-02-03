import {
  HeartOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { instance } from "apiServices/instance";
import images from "assets/images";
import PropDown from "components/common/PropDown/PropDown";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Feature,
  FeatureLink,
  FeatureWrapper,
  Logo,
} from "./Header.styled";
const Logout = () => {
  const handleLogout = async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    await instance
      .post("logout", config)
      .then((res) => {
        localStorage.removeItem("token");
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Feature onClick={handleLogout}>
      <UserOutlined />
      Logout
    </Feature>
  );
};
const Header = () => {
  const [show, setShow] = useState<boolean>(false);
  const token = localStorage.getItem("token");
  console.log(token);
  return (
    <Container>
      <Link to="/">
        <Logo src={images.logo} />
      </Link>
      <FeatureWrapper>
        <Feature>
          <HeartOutlined />
          Wishlist
        </Feature>
        <Feature
          onClick={() => {
            setShow((prev) => (prev ? false : true));
          }}
        >
          <ShoppingCartOutlined />
          Cart
          <PropDown isShow={show} />
        </Feature>
        {token ? (
          <Logout />
        ) : (
          <FeatureLink to="/login">
            <Feature>
              <UserOutlined />
              Login
            </Feature>
          </FeatureLink>
        )}
      </FeatureWrapper>
    </Container>
  );
};
export default Header;
