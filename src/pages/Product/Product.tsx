import React, { useState } from "react";
import {
  Banner,
  BannerTitle,
  BannerWrapper,
  CategoriesContainer,
  CategoryImg,
  CategoryImgWarper,
  CategoryName,
  CategoryWrapper,
  Container,
  ListProductContainer,
  LoadingWrapper,
  Overlay,
  ProductContainer,
  SideBar,
  SideBarContainer,
  SideBarToggle,
  Title,
} from "./Product.styled";
import ListItem from "components/common/ListItem/ListItem";
import { IdataCategory } from "types/productType.type";
import images from "assets/images";
import Navigation from "components/common/Navigation/Pagination";
import { useNavigate, createSearchParams } from "react-router-dom";
import { Space, Spin } from "antd";
import useCategory from "hooks/useCategory";
import useProduct from "hooks/useProduct";
import ProductSideBar from "./components/ProductSideBar";
import { MenuUnfoldOutlined } from "@ant-design/icons";
const Loading = () => {
  return (
    <LoadingWrapper>
      <Space>
        <Spin tip="Loading" size="large">
          <div className="content" />
        </Spin>
      </Space>
    </LoadingWrapper>
  );
};
const Product = () => {
  const navigate = useNavigate();
  const categoryData: IdataCategory[] = useCategory();
  const handleFilter = (tag: string): void => {
    navigate({
      pathname: "/product",
      search: createSearchParams({
        category: String(tag),
      }).toString(),
    });
  };
  const { productData, totalItem, itemPerPage, productQuery } = useProduct();
  const [showSideBar, setShowSideBar] = useState<boolean>(false);
  if (productQuery.isLoading) {
    return <Loading />;
  }
  return (
    <Container>
      <Overlay isShow={showSideBar} />
      <BannerWrapper>
        <Banner src={images.productBanner} />
        <BannerTitle> Product </BannerTitle>
      </BannerWrapper>
      <ProductContainer>
        <SideBarContainer isShow={showSideBar}>
          <SideBar>
            <SideBarToggle
              onClick={() => {
                setShowSideBar((prev) => (prev ? false : true));
              }}
            >
              <MenuUnfoldOutlined />
            </SideBarToggle>
            <CategoriesContainer>
              <Title>Category</Title>
              {categoryData?.map((item: IdataCategory, index: number) => (
                <CategoryWrapper
                  key={index}
                  onClick={() => handleFilter(item.id)}
                >
                  <CategoryImgWarper>
                    <CategoryImg src={item.category_img} alt={item.name} />
                  </CategoryImgWarper>
                  <CategoryName>{item.name}</CategoryName>
                </CategoryWrapper>
              ))}
            </CategoriesContainer>
            <br />
            <ProductSideBar />
          </SideBar>
        </SideBarContainer>
        <ListProductContainer>
          <ListItem data={productData} ItemPerRow={5} ItemPerRowOnMobile={2} />
        </ListProductContainer>
      </ProductContainer>
      <Navigation totalItem={totalItem} itemPerPage={itemPerPage} />
    </Container>
  );
};

export default Product;
