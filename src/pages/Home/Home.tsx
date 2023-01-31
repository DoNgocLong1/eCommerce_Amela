import { categories } from "assets/images";
import ListItem from "components/common/ListItem/ListItem";
import Slideshow from "components/SlideShow";
import React from "react";
import {
  Banner,
  BannerContent,
  BannerDescription,
  BannerImg,
  BannerTitle,
  BannerWrapper,
  BrowserCategories,
  BrowserCategoriesTitle,
  CategoriesWrapper,
  CategoryItem,
  CategoryItemImg,
  CategoryItemImgWrapper,
  CategoryTitle,
  Container,
  FilterWrapper,
  PopularProductHeader,
  PopularProductTitle,
  PopularProductWrapper,
  ShopNowButton,
} from "./Home.styled";
import products from "fakeData/product";
import { ArrowRightOutlined } from "@ant-design/icons";
const Home = () => {
  return (
    <Container>
      <Slideshow />
      <BannerWrapper>
        <Banner>
          <ShopNowButton>
            Shop now <ArrowRightOutlined />
          </ShopNowButton>
          <BannerImg src="https://static.acer.com/up/Resource/Acer/Predator_Minisite/Home/Highlights/20210618/Helios-500.png" />
          <BannerDescription>
            <BannerTitle>Laptops</BannerTitle>
            <BannerContent>
              Play wherever you want, with a slimmer laptop powered by the
              latest hardware.
            </BannerContent>
          </BannerDescription>
        </Banner>
        <Banner>
          <ShopNowButton>
            Shop now <ArrowRightOutlined />
          </ShopNowButton>
          <BannerImg src="https://static.acer.com/up/Resource/Acer/Predator_Minisite/Home/Highlights/20210617/X38.png" />
          <BannerDescription>
            <BannerTitle>Monitors</BannerTitle>
            <BannerContent>
              Your game monitor should be the best, whether curved, flat, 4K or
              FHD.
            </BannerContent>
          </BannerDescription>
        </Banner>
        <Banner>
          <ShopNowButton>
            Shop now <ArrowRightOutlined />
          </ShopNowButton>
          <BannerImg src="https://static.acer.com/up/Resource/Acer/Predator_Minisite/Home/Highlights/20210617/Aethon-301-TKL.png" />
          <BannerDescription>
            <BannerTitle>Accessory</BannerTitle>
            <BannerContent>
              Outfit your setup with super responsive mice, mechanical
              keyboards, sound-rich headphones, and comfortable gaming chairs.
            </BannerContent>
          </BannerDescription>
        </Banner>
      </BannerWrapper>
      <BrowserCategories>
        <BrowserCategoriesTitle>Browser categories</BrowserCategoriesTitle>
        <CategoriesWrapper>
          {categories.map((item, index) => (
            <CategoryItem key={index}>
              <CategoryTitle>{item.name}</CategoryTitle>
              <CategoryItemImgWrapper>
                <CategoryItemImg src={item.image} alt={item.name} />
              </CategoryItemImgWrapper>
            </CategoryItem>
          ))}
        </CategoriesWrapper>
      </BrowserCategories>
      {/* PopularProduct */}
      <PopularProductWrapper>
        <PopularProductHeader>
          <PopularProductTitle>Popular Products</PopularProductTitle>
          <FilterWrapper>brtntnrt</FilterWrapper>
        </PopularProductHeader>
        <ListItem data={products} ItemPerRow={5} ItemPerRowOnMobile={2} />
      </PopularProductWrapper>
    </Container>
  );
};

export default Home;
