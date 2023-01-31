import { HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Rate } from "antd";
import React from "react";
import { Link } from "react-router-dom";
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
  data?: any[];
  ItemPerRow?: number;
  ItemPerRowOnMobile?: number;
}
const ListItem = ({ data, ItemPerRow }: IListItem) => {
  return (
    <Container>
      <ListItemWrapper ItemPerRow={ItemPerRow}>
        {data?.map((item, index) => (
          <ItemWrapper key={index}>
            <Discount>-25%</Discount>
            <ItemImageWrapper>
              <Link to={"/"}>
                <ItemImage src={item.image} alt={item.name} />
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
              <AddButton>
                <ShoppingCartOutlined /> Add
              </AddButton>
            </ItemBottom>
          </ItemWrapper>
        ))}
      </ListItemWrapper>
    </Container>
  );
};

export default ListItem;
