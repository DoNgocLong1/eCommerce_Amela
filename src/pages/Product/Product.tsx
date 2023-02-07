import React, { useState } from "react";
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
  Overlay,
  ProductContainer,
  SideBar,
  SideBarButton,
  SideBarContainer,
  SideBarToggle,
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
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { MenuProps, Slider } from "antd";
import { Menu } from "antd";
const Product = () => {
  const navigate = useNavigate();
  const onSort = (params: string) => {
    navigate({
      pathname: "/product",
      search: createSearchParams({
        filter_time: String(params),
      }).toString(),
    });
  };
  type MenuItem = Required<MenuProps>["items"][number];

  const getItem = (
    label: React.ReactNode,
    key?: React.Key | null,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: "group"
  ): MenuItem => {
    return {
      key,
      icon,
      children,
      label,
      type,
    } as MenuItem;
  };
  const items: MenuItem[] = [
    getItem("Time", "sub1", <MailOutlined />, [
      getItem(
        <SideBarButton onClick={() => onSort("newest")}>newest</SideBarButton>,
        "1"
      ),
      getItem(
        <SideBarButton onClick={() => onSort("oldest")}>oldest</SideBarButton>,
        "2"
      ),
    ]),
    getItem("Character", "sub2", <AppstoreOutlined />, [
      getItem(
        <SideBarButton onClick={() => onSort("newest")}>A-Z</SideBarButton>,
        "3"
      ),
      getItem(
        <SideBarButton onClick={() => onSort("newest")}>Z-A</SideBarButton>,
        "4"
      ),
    ]),
    getItem("Price", "sub4", <SettingOutlined />, [
      getItem(
        <Slider range={{ draggableTrack: true }} defaultValue={[20, 50]} />,
        "5"
      ),
    ]),
  ];
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
  const params = Object.fromEntries([...searchParams]);
  console.log(Object.keys(params));
  console.log(Object.values(params));
  const productQuery = useQuery({
    queryKey: ["product", params],
    /* queryFn: () => filter(params.search), */
    queryFn: () => filter(params.filter_time),
  });
  const productData: IProductItem[] = productQuery.data?.data.data;
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
              on
            </SideBarToggle>
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
            <br />
            <Menu
              style={{ width: "100%" }}
              defaultOpenKeys={["sub1"]}
              mode="inline"
              items={items}
            />
          </SideBar>
        </SideBarContainer>
        <ListProductContainer>
          <ListItem data={productData} ItemPerRow={5} ItemPerRowOnMobile={2} />
        </ListProductContainer>
      </ProductContainer>
      <Navigation />
    </Container>
  );
};

export default Product;
