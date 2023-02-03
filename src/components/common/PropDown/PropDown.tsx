import { selectCartList } from "features/cart/cartSlice";
import React from "react";
import { useSelector } from "react-redux";
import {
  Container,
  ItemDetailName,
  ItemDetailPrice,
  ItemDetailQuantity,
  ItemDetailWrapper,
  ItemImg,
  PropDownItemWrapper,
  PropDownListItemWrapper,
  PropDownTitle,
} from "./PropDown.styled";
interface IPropDown {
  isShow: boolean;
}
const PropDown = ({ isShow }: IPropDown) => {
  const { cartList } = useSelector(selectCartList);
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
    </Container>
  );
};

export default PropDown;
