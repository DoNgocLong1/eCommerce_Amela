import React from "react";
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
  RemoveButton,
} from "./ListItemLite.styled";
import { CloseOutlined, MinusOutlined, PlusOutlined } from "@ant-design/icons";
import useCart from "hooks/useCart";
import EmptyCart from "../EmptyCart/EmptyCart";
const ListItemLite = () => {
  const {
    handleAddItem,
    handleDecreaseItem,
    handleRemove,
    cartList,
    orderList,
    totalPrice,
  } = useCart();
  console.log(orderList);
  const onOrder = async () => {
    console.log("first");
    /* const params: any = {
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
      }); */
  };
  return (
    <Container>
      <PropDownTitle>Your cart</PropDownTitle>
      <PropDownListItemWrapper>
        {cartList.length === 0 ? (
          <EmptyCart />
        ) : (
          cartList.map((item, index) => (
            <PropDownItemWrapper key={index}>
              <RemoveButton onClick={() => handleRemove(item)}>
                <CloseOutlined />
              </RemoveButton>
              <ItemImg src={item.img} />
              <ItemDetailWrapper>
                <ItemDetailName>{item.name}</ItemDetailName>
                <ItemDetailPrice>{item.price}$/1</ItemDetailPrice>
                <QuantityWrapper>
                  <QuantityButton onClick={() => handleAddItem(item)}>
                    <PlusOutlined />
                  </QuantityButton>
                  <ItemDetailQuantity>{item.count} x</ItemDetailQuantity>
                  <QuantityButton onClick={() => handleDecreaseItem(item)}>
                    <MinusOutlined />
                  </QuantityButton>
                </QuantityWrapper>
                <ItemDetailPrice>{item.total} $</ItemDetailPrice>
              </ItemDetailWrapper>
            </PropDownItemWrapper>
          ))
        )}
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

export default ListItemLite;
