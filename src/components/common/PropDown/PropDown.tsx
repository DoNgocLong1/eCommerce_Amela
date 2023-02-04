import { selectCartList } from "features/cart/cartSlice";
import React from "react";
import { useSelector } from "react-redux";
import {
  Container,
  ItemDetailName,
  ItemDetailPrice,
  ItemDetailQuantity,
  ItemDetailWrapper,
  ItemFooter,
  ItemFooterButton,
  ItemFooterContent,
  ItemFooterTitle,
  ItemFooterWrapper,
  ItemImg,
  PropDownItemWrapper,
  PropDownListItemWrapper,
  PropDownTitle,
} from "./PropDown.styled";
interface IPropDown {
  isShow: boolean;
}
const PropDown = ({ isShow }: IPropDown) => {
  const { cartList, totalPrice } = useSelector(selectCartList);
  return (
    <Container isShow={isShow}>
      <PropDownTitle>Your cart</PropDownTitle>
      <PropDownListItemWrapper>
        {cartList.map((item, index) => (
          <PropDownItemWrapper key={index}>
            <ItemImg src={item.img} />
            <ItemDetailWrapper>
              <ItemDetailName>{item.name}</ItemDetailName>
              <ItemDetailQuantity>{item.count} x</ItemDetailQuantity>
              <ItemDetailPrice>{item.price}$</ItemDetailPrice>
            </ItemDetailWrapper>
          </PropDownItemWrapper>
        ))}
      </PropDownListItemWrapper>
      <ItemFooter>
        <ItemFooterWrapper>
          <ItemFooterTitle>Total: </ItemFooterTitle>
          <ItemFooterContent> {totalPrice}$</ItemFooterContent>
        </ItemFooterWrapper>
        <ItemFooterButton>Check out</ItemFooterButton>
      </ItemFooter>
    </Container>
  );
};

export default PropDown;
