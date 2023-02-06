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
import { instance } from "apiServices/instance";
import { IdataCategory, IProductItem } from "types/productType.type";
import { useQuery } from "react-query";
import images from "assets/images";
import Navigation from "components/common/Navigation/Navigation";
import { filter } from "apiServices/productService";
import {
  useNavigate,
  createSearchParams,
  useSearchParams,
} from "react-router-dom";
const Product = () => {
  const fetchCategory = async () => {
    const data = await instance
      .get("categories")
      .then((response) => response)
      .catch((error) => error);
    return data;
  };
  const categoryQuery = useQuery({
    queryKey: ["listCategory"],
    queryFn: fetchCategory,
  });
  const dataCategory: IdataCategory[] = categoryQuery.data?.data.data.data;
  console.log(dataCategory);
  const state = useSelector(selectCartList);
  console.log(state);
  const handleFilter = (tag: string): void => {
    console.log(tag);
  };
  const [searchParams] = useSearchParams();
  console.log(searchParams);
  const params = Object.fromEntries([...searchParams]);
  console.log(params.filter_time);
  const productQuery = useQuery({
    queryKey: ["product", params],
    queryFn: () => filter(params.filter_time),
  });
  const navigate = useNavigate();
  const onSort = (params: string) => {
    navigate({
      pathname: "/product",
      search: createSearchParams({
        filter_time: String(params),
      }).toString(),
    });
  };
  const productData: IProductItem[] = productQuery.data?.data.data;
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
            <button onClick={() => onSort("newest")}>newest</button>
            <button onClick={() => onSort("oldest")}>oldest</button>
          </CategoriesContainer>
        </SideBar>
        <ListProductContainer>
          <ListItem data={productData} ItemPerRow={5} ItemPerRowOnMobile={2} />
        </ListProductContainer>
      </ProductContainer>
      <Navigation />
    </Container>
  );
};

export default Product;
