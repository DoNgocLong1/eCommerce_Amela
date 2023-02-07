import images from "assets/images";
import React from "react";
import {
  Banner,
  BannerTitle,
  CartBannerWrapper,
  Container,
} from "./Cart.styled";

const Cart = () => {
  return (
    <Container>
      <CartBannerWrapper>
        <Banner src={images.cartBanner} />
        <BannerTitle>View cart</BannerTitle>
      </CartBannerWrapper>
    </Container>
  );
};

export default Cart;
