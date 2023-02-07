import React, { useState } from "react";
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
import { fetchProduct, minMax } from "apiServices/productService";
import {
  useNavigate,
  createSearchParams,
  useSearchParams,
  useLocation,
} from "react-router-dom";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { MenuProps, Slider } from "antd";
import { Menu } from "antd";
const Product = () => {
  //lay ve tat ca params
  const { pathname } = useLocation();
  const navigate = useNavigate();
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
  const handleFilter = (tag: string): void => {
    console.log(tag);
    navigate({
      pathname: "/product",
      search: createSearchParams({
        category: String(tag),
      }).toString(),
    });
  };
  const [searchParams] = useSearchParams();
  const params = Object.fromEntries([...searchParams]);
  console.log(params);
  const productQuery = useQuery({
    queryKey: ["product", params],
    queryFn: () => fetchProduct(params || ""),
  });
  console.log(productQuery);
  const minMaxQuery = useQuery({
    queryKey: ["minmax"],
    queryFn: minMax,
  });
  const minPrice = minMaxQuery.data?.data.data.min;
  const maxPrice = minMaxQuery.data?.data.data.max;
  console.log("minNumber", minPrice);
  console.log("maxNumber", maxPrice);
  const productData: IProductItem[] = productQuery.data?.data.data.data;
  const [showSideBar, setShowSideBar] = useState<boolean>(false);
  const items: MenuItem[] = [
    getItem("Time", "sub1", <MailOutlined />, [
      getItem(
        <SideBarButton
          onClick={() =>
            navigate({
              pathname,
              search: createSearchParams({
                ...params,
                time: "newest",
              }).toString(),
            })
          }
        >
          newest
        </SideBarButton>,
        "1"
      ),
      getItem(
        <SideBarButton
          onClick={() =>
            navigate({
              pathname,
              search: createSearchParams({
                ...params,
                time: "oldest",
              }).toString(),
            })
          }
        >
          oldest
        </SideBarButton>,
        "2"
      ),
    ]),
    getItem("Character", "sub2", <AppstoreOutlined />, [
      getItem(
        <SideBarButton
          onClick={() =>
            navigate({
              pathname,
              search: createSearchParams({
                ...params,
                sort: "az",
              }).toString(),
            })
          }
        >
          A-Z
        </SideBarButton>,
        "3"
      ),
      getItem(
        <SideBarButton
          onClick={() =>
            navigate({
              pathname,
              search: createSearchParams({
                ...params,
                sort: "za",
              }).toString(),
            })
          }
        >
          Z-A
        </SideBarButton>,
        "4"
      ),
    ]),
    getItem("Price", "sub4", <SettingOutlined />, [
      getItem(
        <Slider
          range={{ draggableTrack: true }}
          defaultValue={[4, 9]}
          min={minPrice}
          max={maxPrice}
          onChange={(e: any) =>
            navigate({
              pathname,
              search: createSearchParams({
                ...params,
                price_from: String(e[0]),
                price_to: String(e[1]),
              }).toString(),
            })
          }
        />,
        "5"
      ),
    ]),
  ];
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
                  onClick={() => handleFilter(item.id)}
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
