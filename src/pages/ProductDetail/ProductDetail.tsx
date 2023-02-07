import { Rate } from "antd";
import products from "fakeData/product";
import React from "react";
import {
  Container,
  ProductDetailWrapper,
  ProductGalleryWrapper,
  ProductInfoWrapper,
  ProductMainImg,
  ProductName,
  RateWrapper,
  RateNumber,
  SpecificationDetail,
  SpecificationName,
  SpecificationsContainer,
  SpecificationWrapper,
  GalleryWrapper,
  GalleryImg,
} from "./ProductDetail.styled";

const ProductDetail = () => {
  return (
    <Container>
      <ProductDetailWrapper>
        <ProductGalleryWrapper>
          <ProductMainImg src={products[5].image} />
          <GalleryWrapper>
            <GalleryImg src={products[5].image} />
            <GalleryImg src={products[5].image} />
            <GalleryImg src={products[5].image} />
            <GalleryImg src={products[5].image} />
          </GalleryWrapper>
        </ProductGalleryWrapper>
        <ProductInfoWrapper>
          <ProductName>{products[5].name}</ProductName>
          <RateWrapper>
            <Rate disabled allowHalf defaultValue={+products[5].rate} />
            <RateNumber>({products[5].rate})</RateNumber>
          </RateWrapper>
          <SpecificationsContainer>
            <SpecificationWrapper>
              <SpecificationName>Brand:</SpecificationName>
              <SpecificationDetail>{products[5].brand}</SpecificationDetail>
            </SpecificationWrapper>
            <SpecificationWrapper>
              <SpecificationName>Type:</SpecificationName>
              <SpecificationDetail>{products[5].type}</SpecificationDetail>
            </SpecificationWrapper>
          </SpecificationsContainer>
        </ProductInfoWrapper>
      </ProductDetailWrapper>
    </Container>
  );
};

export default ProductDetail;
