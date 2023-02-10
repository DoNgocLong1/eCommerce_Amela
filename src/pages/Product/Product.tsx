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
import useCategory from "hooks/useCategory";
import useProduct from "hooks/useProduct";
import ProductSideBar from "./components/ProductSideBar";
import { MenuUnfoldOutlined } from "@ant-design/icons";
import Loading from "components/common/Loading/Loading";
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
          {productQuery.isLoading ? (
            <Loading />
          ) : (
            <ListItem
              data={productData}
              ItemPerRow={4}
              ItemPerRowOnMobile={2}
              ItemPerRowOnTablet={3}
              size="1fr"
            />
          )}
        </ListProductContainer>
      </ProductContainer>
      <Navigation totalItem={totalItem} itemPerPage={itemPerPage} />
    </Container>
  );
};

export default Product;
