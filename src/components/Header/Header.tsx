import {
  HeartOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import images from "assets/images";
import React from "react";
import { Container, Feature, FeatureWrapper, Logo } from "./Header.styled";
const Header = () => {
  return (
    <Container>
      <Logo src={images.logo} />
      <FeatureWrapper>
        <Feature>
          <HeartOutlined />
          Wishlist
        </Feature>
        <Feature>
          <ShoppingCartOutlined />
          Cart
        </Feature>
        <Feature>
          <UserOutlined />
          Login
        </Feature>
      </FeatureWrapper>
    </Container>
  );
};
export default Header;
