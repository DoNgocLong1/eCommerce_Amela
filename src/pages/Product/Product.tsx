import React from "react";
import { useSelector } from "react-redux";
import { selectCartList } from "features/cart/cartSlice";
import {
  Banner,
  BannerTitle,
  BannerWrapper,
  CategoriesContainer,
  CategoryImg,
  CategoryName,
  CategoryWrapper,
  Container,
  ListProductContainer,
  ProductContainer,
  SideBar,
  Title,
} from "./Product.styled";
import ListItem from "components/common/ListItem/ListItem";
import products from "fakeData/product";
import { instance } from "apiServices/instance";
import { IdataCategory } from "types/productType.type";
import { useQuery } from "react-query";
import images from "assets/images";
const Product = () => {
  const fetchCategory = async () => {
    const data = await instance
      .get("categories")
      .then((response) => response)
      .catch((error) => {
        console.log(error);
      });
    return data;
  };
  console.log(fetchCategory());
  const { data } = useQuery({
    queryKey: ["listCategory"],
    queryFn: fetchCategory,
  });
  const dataCategory: IdataCategory[] = data?.data.data.data;
  const state = useSelector(selectCartList);
  console.log(state);
  const list = products.slice(0, 9);
  const handleFilter = (tag: string): void => {
    console.log(tag);
  };
  return (
    <Container>
      <BannerWrapper>
        <Banner src={images.productBanner} />
        <BannerTitle> Product </BannerTitle>
      </BannerWrapper>
      <ProductContainer>
        <SideBar>
          <CategoriesContainer>
            <Title>Category</Title>
            {dataCategory?.map((item: IdataCategory, index: number) => (
              <CategoryWrapper
                key={index}
                onClick={() => handleFilter(item.name)}
              >
                <CategoryImg src={item.category_img} alt={item.name} />
                <CategoryName>{item.name}</CategoryName>
              </CategoryWrapper>
            ))}
          </CategoriesContainer>
        </SideBar>
        <ListProductContainer>
          <ListItem data={list} ItemPerRow={5} ItemPerRowOnMobile={2} />
        </ListProductContainer>
      </ProductContainer>
    </Container>
  );
};

export default Product;
