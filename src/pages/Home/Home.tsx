import images from "assets/images";
import ListItem from "components/common/ListItem/ListItem";
import Slideshow from "components/SlideShow";
import React from "react";
import {
  Banner,
  BannerContent,
  BannerDescription,
  BannerImg,
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
import { ArrowRightOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { IdataCategory } from "types/productType.type";
import useCategory from "hooks/useCategory";
import useProduct from "hooks/useProduct";
const Home = () => {
  const categoryData: IdataCategory[] = useCategory();
  const { popularProductData } = useProduct();
  return (
    <Container>
      <Slideshow />
      <BannerWrapper>
        <Banner>
          <Link to="/product">
            <ShopNowButton>
              Shop now <ArrowRightOutlined />
            </ShopNowButton>
          </Link>
          <BannerImg src={images.laptopBanner} />
          <BannerDescription>
            <BannerContent>
              Play wherever you want, with a slimmer laptop powered by the
              latest hardware.
            </BannerContent>
          </BannerDescription>
        </Banner>
        <Banner>
          <Link to="/product">
            <ShopNowButton>
              Shop now <ArrowRightOutlined />
            </ShopNowButton>
          </Link>
          <BannerImg src={images.monitorBanner} />
          <BannerDescription>
            <BannerContent>
              Your game monitor should be the best, whether curved, flat, 4K or
              FHD.
            </BannerContent>
          </BannerDescription>
        </Banner>
        <Banner>
          <Link to="/product">
            <ShopNowButton>
              Shop now <ArrowRightOutlined />
            </ShopNowButton>
          </Link>
          <BannerImg src={images.accessoryBanner} />
          <BannerDescription>
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
          {categoryData?.map((item: IdataCategory, index: number) => (
            <CategoryItem key={index}>
              <CategoryTitle>{item.name}</CategoryTitle>
              <CategoryItemImgWrapper>
                <CategoryItemImg src={item.category_img} alt={item.name} />
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
        <ListItem
          data={popularProductData}
          ItemPerRow={5}
          ItemPerRowOnMobile={2}
        />
      </PopularProductWrapper>
    </Container>
  );
};

export default Home;
