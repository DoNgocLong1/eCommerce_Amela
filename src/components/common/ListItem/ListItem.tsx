import { HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Rate } from "antd";
import { addItem } from "features/cart/cartSlice";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { CartItemType } from "types/cartType.type";
import { IProductItem } from "types/productType.type";
import Notification from "../Notification/Notification";
import {
  AddButton,
  Container,
  Discount,
  ItemBottom,
  ItemImage,
  ItemImageWrapper,
  ItemName,
  ItemPrice,
  ItemType,
  ItemWrapper,
  ListItemWrapper,
  ProductAction,
  ProductActionWrapper,
  RateNumber,
  RateWrapper,
} from "./ListItem.styled";
interface IListItem {
  data?: IProductItem[];
  ItemPerRow?: number;
  ItemPerRowOnMobile?: number;
}
const ListItem = ({ data, ItemPerRow }: IListItem) => {
  const dispatch = useDispatch();
  const handleAddItem = (payload: any): void => {
    console.log(payload);
    const payloadData: CartItemType = {
      id: payload.id,
      img: payload.images[0]?.product_img,
      name: payload.name,
      price: +payload.price,
    };
    dispatch(addItem(payloadData));
  };
  return (
    <Container>
      <ListItemWrapper ItemPerRow={ItemPerRow}>
        {data?.map((item: any, index) => (
          <ItemWrapper key={index}>
            <Discount>-25%</Discount>
            <ItemImageWrapper>
              <Link to={"/"}>
                <ItemImage src={item.images[0]?.product_img} alt={item.name} />
              </Link>
              <ProductActionWrapper>
                <ProductAction>
                  <HeartOutlined style={{ fontSize: "3em", color: "orange" }} />
                </ProductAction>
                <ProductAction></ProductAction>
                <ProductAction></ProductAction>
              </ProductActionWrapper>
            </ItemImageWrapper>
            <ItemType>{item.type}</ItemType>
            <ItemName>{item.name}</ItemName>
            <RateWrapper>
              <Rate disabled allowHalf defaultValue={+item.rate} />
              <RateNumber>({item.rate})</RateNumber>
            </RateWrapper>
            <ItemBottom>
              <ItemPrice>{item.price} $</ItemPrice>
              <Notification
                button={
                  <AddButton onClick={() => handleAddItem(item)}>
                    <ShoppingCartOutlined /> Add
                  </AddButton>
                }
                messageType={"successful"}
                messageContent={"add to cart"}
              />
            </ItemBottom>
          </ItemWrapper>
        ))}
      </ListItemWrapper>
    </Container>
  );
};

export default ListItem;
