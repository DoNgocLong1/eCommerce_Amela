import images from "assets/images";
import React from "react";
import { Link } from "react-router-dom";
import {
  Banner,
  BannerTitle,
  CartBannerWrapper,
  CartContainer,
  CartWrapper,
  Container,
  GotoProductPage,
  ItemName,
  ItemTh,
  ItemTr,
  ItemWrapper,
  NoteContent,
  NoteTitle,
  NoteWrapper,
  PaymentButton,
  ProductImg,
  ProductName,
  ProductNameAndImgWrapper,
  ProductQuantity,
  ProductQuantityButton,
  ProductQuantityButtonWrapper,
  ProductRemove,
  ProductTotal,
  ProductUnitPrice,
  SubTotal,
  SubTotalTitle,
  SubTotalWrapper,
  TitleName,
  TitleTh,
  TitleTr,
  TitleWrapper,
} from "./Cart.styled";
import { DeleteOutlined } from "@ant-design/icons";
import EmptyCart from "components/common/EmptyCart/EmptyCart";
import useCart from "hooks/useCart";
import { ICartList } from "types/cartType.type";
const Cart = () => {
  const {
    handleAddItem,
    handleDecreaseItem,
    handleRemove,
    cartList,
    totalPrice,
  } = useCart();
  if (cartList.length === 0)
    return (
      <Container>
        <EmptyCart />
        <Link to="/product">
          <GotoProductPage>Continues Shopping</GotoProductPage>
        </Link>
      </Container>
    );
  return (
    <Container>
      <CartBannerWrapper>
        <Banner src={images.cartBanner} />
        <BannerTitle>View cart</BannerTitle>
      </CartBannerWrapper>
      <CartContainer>
        <CartWrapper>
          <TitleWrapper>
            <TitleTr>
              <TitleName>Product</TitleName>
              <TitleTh>Unit Price</TitleTh>
              <TitleTh>Quantity</TitleTh>
              <TitleTh>Total</TitleTh>
              <TitleTh>Remove</TitleTh>
            </TitleTr>
          </TitleWrapper>
          <ItemWrapper>
            {cartList.map((item: ICartList, index: number) => (
              <ItemTr key={index}>
                <ItemName>
                  <ProductNameAndImgWrapper>
                    <ProductImg src={item.img} />
                    <ProductName>{item.name}</ProductName>
                  </ProductNameAndImgWrapper>
                </ItemName>
                <ItemTh>
                  <ProductUnitPrice>{item.price} $</ProductUnitPrice>
                </ItemTh>
                <ItemTh>
                  <ProductQuantity>
                    {item.count}
                    <ProductQuantityButtonWrapper>
                      <ProductQuantityButton
                        onClick={() => handleAddItem(item)}
                      >
                        +
                      </ProductQuantityButton>
                      <ProductQuantityButton
                        onClick={() => handleDecreaseItem(item)}
                      >
                        -
                      </ProductQuantityButton>
                    </ProductQuantityButtonWrapper>
                  </ProductQuantity>
                </ItemTh>
                <ItemTh>
                  <ProductTotal>{item.total} $</ProductTotal>
                </ItemTh>
                <ItemTh>
                  <ProductRemove onClick={() => handleRemove(item)}>
                    <DeleteOutlined />
                  </ProductRemove>
                </ItemTh>
              </ItemTr>
            ))}
          </ItemWrapper>
        </CartWrapper>
        <NoteWrapper>
          <NoteTitle>Order special instructions</NoteTitle>
          <NoteContent placeholder="input your requirement" />
          <SubTotalWrapper>
            <SubTotalTitle>Subtotal:</SubTotalTitle>
            <SubTotal>{totalPrice} $</SubTotal>
          </SubTotalWrapper>
          <Link to="/payment">
            <PaymentButton>Payment</PaymentButton>
          </Link>
        </NoteWrapper>
      </CartContainer>
      <Link to="/product">
        <GotoProductPage>Continues Shopping</GotoProductPage>
      </Link>
    </Container>
  );
};

export default Cart;
