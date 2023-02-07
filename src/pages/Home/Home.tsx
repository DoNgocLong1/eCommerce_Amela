import images from "assets/images";
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
/* import products from "fakeData/product"; */
import { ArrowRightOutlined } from "@ant-design/icons";
import { instance } from "apiServices/instance";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { IdataCategory, IProductItem } from "types/productType.type";
import { fetchProduct } from "apiServices/productService";
const Home = () => {
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
  const categoryQuery = useQuery({
    queryKey: ["listCategory"],
    queryFn: fetchCategory,
  });
  const productQuery = useQuery({
    queryKey: ["product"],
    queryFn: fetchProduct,
  });
  const categoryData: IdataCategory[] = categoryQuery.data?.data.data.data;
  const productData: IProductItem[] = productQuery.data?.data.data.data;
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
            <BannerTitle>Laptops</BannerTitle>
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
            <BannerTitle>Monitors</BannerTitle>
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
        <ListItem data={productData} ItemPerRow={5} ItemPerRowOnMobile={2} />
      </PopularProductWrapper>
    </Container>
  );
};

export default Home;
