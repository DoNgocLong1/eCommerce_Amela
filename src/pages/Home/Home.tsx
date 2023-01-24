import { categories } from "assets/images";
import Slideshow from "components/SlideShow";
import React from "react";
import {
  BrowserCategories,
  BrowserCategoriesTitle,
  CategoriesWrapper,
  CategoryItem,
  CategoryItemImg,
  CategoryItemImgWrapper,
  CategoryTitle,
  Container,
} from "./Home.styled";
const Home = () => {
  return (
    <Container>
      <Slideshow />
      <BrowserCategories>
        <BrowserCategoriesTitle>Browser categories</BrowserCategoriesTitle>
        <CategoriesWrapper>
          {categories.map((item, index) => (
            <CategoryItem key={index}>
              <CategoryTitle>{item.name}</CategoryTitle>
              <CategoryItemImgWrapper>
                <CategoryItemImg src={item.image} />
              </CategoryItemImgWrapper>
            </CategoryItem>
          ))}
        </CategoriesWrapper>
      </BrowserCategories>
    </Container>
  );
};

export default Home;
