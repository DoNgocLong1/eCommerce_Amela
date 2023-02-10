import images from "assets/images";
import { selectCartList } from "features/cart/cartSlice";
import React from "react";
import { useSelector } from "react-redux";
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
const Cart = () => {
  const { cartList, totalPrice } = useSelector(selectCartList);
  console.log(cartList);
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
            {cartList.map((item, index) => (
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
                  <ProductQuantity>{item.count}</ProductQuantity>
                </ItemTh>
                <ItemTh>
                  <ProductTotal>
                    {item.price * Number(item.count)} $
                  </ProductTotal>
                </ItemTh>
                <ItemTh>
                  <ProductRemove>
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
          <PaymentButton>Payment</PaymentButton>
        </NoteWrapper>
      </CartContainer>
      <Link to="/product">
        <GotoProductPage>Continues Shopping</GotoProductPage>
      </Link>
    </Container>
  );
};

export default Cart;
