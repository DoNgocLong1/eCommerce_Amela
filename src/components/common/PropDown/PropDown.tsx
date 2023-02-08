import { instance } from "apiServices/instance";
import { decreaseItem, selectCartList } from "features/cart/cartSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
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
  QuantityButton,
  QuantityWrapper,
} from "./PropDown.styled";
import { addItem } from "features/cart/cartSlice";
import { CartItemType } from "types/cartType.type";
interface IPropDown {
  isShow: boolean;
}
const PropDown = ({ isShow }: IPropDown) => {
  const { cartList, totalPrice } = useSelector(selectCartList);
  const dispatch = useDispatch();
  const handleAddItem = (payload: any): void => {
    console.log(payload);
    const payloadData: CartItemType = {
      id: payload.id,
      img: payload.img || "",
      name: payload.name,
      price: +payload.price,
    };
    dispatch(addItem(payloadData));
  };
  const handleDecreaseItem = (payload: any): void => {
    console.log(payload);
    const payloadData: CartItemType = {
      id: payload.id,
      img: payload.img || "",
      name: payload.name,
      price: +payload.price,
    };
    dispatch(decreaseItem(payloadData));
  };
  let orderList: any = [];
  for (const item of cartList) {
    const params = {
      product_id: item.id,
      quantity: item.count,
    };
    orderList = [...orderList, params];
  }
  const onOrder = async () => {
    const params: any = {
      user_id: 1,
      amount: totalPrice,
      obj: orderList,
    };
    const config = {
      headers: {
        "Content-Type": `application/json`,
      },
    };
    await instance
      .post("order", JSON.stringify(params), config)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Container isShow={isShow}>
      <PropDownTitle>Your cart</PropDownTitle>
      <PropDownListItemWrapper>
        {cartList.map((item, index) => (
          <PropDownItemWrapper key={index}>
            <ItemImg src={item.img} />
            <ItemDetailWrapper>
              <ItemDetailName>{item.name}</ItemDetailName>
              <QuantityWrapper>
                <QuantityButton onClick={() => handleAddItem(item)}>
                  in
                </QuantityButton>
                <ItemDetailQuantity>{item.count} x</ItemDetailQuantity>
                <QuantityButton onClick={() => handleDecreaseItem(item)}>
                  de
                </QuantityButton>
              </QuantityWrapper>
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
        <Link to="/cart">
          <ItemFooterButton onClick={onOrder}>View cart</ItemFooterButton>
        </Link>
      </ItemFooter>
    </Container>
  );
};

export default PropDown;
