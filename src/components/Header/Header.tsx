import {
  HeartOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { instance } from "apiServices/instance";
import images from "assets/images";
import PropDown from "components/common/PropDown/PropDown";
import SearchItem from "components/common/SearchItem/SearchItem";
import { selectCartList } from "features/cart/cartSlice";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  Container,
  Feature,
  FeatureLink,
  FeatureWrapper,
  IconWrapper,
  Logo,
  Quantity,
  QuantitySpan,
  SearchWrapper,
  UserImg,
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
  const user = localStorage.getItem("user");
  const userAvatar = JSON.parse(user || "").user_img;
  return (
    <Link to="/account">
      <Feature onClick={handleLogout}>
        <UserImg src={userAvatar} />
      </Feature>
    </Link>
  );
};
const Header = () => {
  const { listLength } = useSelector(selectCartList);
  const [show, setShow] = useState<boolean>(false);
  const token = localStorage.getItem("token");
  return (
    <Container>
      <Link to="/">
        <Logo src={images.logo} />
      </Link>
      <SearchWrapper>
        <SearchItem />
      </SearchWrapper>
      <FeatureWrapper>
        <Feature>
          <IconWrapper>
            <HeartOutlined />
          </IconWrapper>
          Wishlist
        </Feature>
        <Feature>
          <IconWrapper
            onClick={() => {
              setShow((prev) => (prev ? false : true));
            }}
          >
            <ShoppingCartOutlined />
          </IconWrapper>
          Cart
          <QuantitySpan>
            <Quantity>{listLength}</Quantity>
          </QuantitySpan>
          <PropDown isShow={show} />
        </Feature>
        {token ? (
          <Logout />
        ) : (
          <FeatureLink to="/login">
            <Feature>
              <IconWrapper>
                <UserOutlined />
              </IconWrapper>
              Login
            </Feature>
          </FeatureLink>
        )}
      </FeatureWrapper>
    </Container>
  );
};
export default Header;
