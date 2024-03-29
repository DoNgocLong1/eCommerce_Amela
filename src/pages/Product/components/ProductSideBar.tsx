import {
  DollarCircleOutlined,
  FallOutlined,
  FieldTimeOutlined,
  FontColorsOutlined,
  RiseOutlined,
  SortAscendingOutlined,
  SortDescendingOutlined,
} from "@ant-design/icons";
import { Menu, MenuProps, Slider } from "antd";
import useProduct from "hooks/useProduct";
import useUrlParams from "hooks/useUrlParams";
import React from "react";
import { SideBarButton } from "../Product.styled";
const ProductSideBar = () => {
  const { transmissionParams, twoKeysTransmissionParams } = useUrlParams();
  const { minPrice, maxPrice } = useProduct();
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
    getItem("Time", "sub1", <FieldTimeOutlined />, [
      getItem(
        <SideBarButton onClick={() => transmissionParams("time", "newest")}>
          Newest
        </SideBarButton>,
        "1"
      ),
      getItem(
        <SideBarButton onClick={() => transmissionParams("time", "oldest")}>
          Oldest
        </SideBarButton>,
        "2"
      ),
    ]),
    getItem("Character", "sub2", <FontColorsOutlined />, [
      getItem(
        <SideBarButton onClick={() => transmissionParams("sort", "az")}>
          <SortAscendingOutlined /> A-Z
        </SideBarButton>,
        "3"
      ),
      getItem(
        <SideBarButton onClick={() => transmissionParams("sort", "za")}>
          <SortDescendingOutlined /> Z-A
        </SideBarButton>,
        "4"
      ),
    ]),
    getItem("Price", "sub4", <DollarCircleOutlined />, [
      getItem(
        <SideBarButton onClick={() => transmissionParams("price", "increase")}>
          <RiseOutlined /> Increase
        </SideBarButton>,
        "5"
      ),
      getItem(
        <SideBarButton onClick={() => transmissionParams("price", "decrease")}>
          <FallOutlined /> Decrease
        </SideBarButton>,
        "6"
      ),
      getItem(
        <Slider
          range={{ draggableTrack: true }}
          defaultValue={[minPrice, maxPrice]}
          min={minPrice}
          max={maxPrice}
          onChange={(e: any) =>
            twoKeysTransmissionParams("price_from", e[0], "price_to", e[1])
          }
        />,
        "7"
      ),
    ]),
  ];
  return (
    <Menu
      style={{ width: "100%" }}
      defaultOpenKeys={["sub2"]}
      mode="inline"
      items={items}
    />
  );
};
export default ProductSideBar;
