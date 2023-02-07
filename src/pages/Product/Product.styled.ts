import color from "utils/color";
import styled from "styled-components";
import breakPoints from "constants/breakpoint";
export const Container = styled.div`
  background-color: ${color.backgroundColor} !important;
  width: 100%;
  display: flex;
  padding-bottom: 2em;
  flex-direction: column;
  color: ${color.whiteColor};
`;
export const BannerWrapper = styled.div`
  height: 40em;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
`;
export const Banner = styled.img`
  width: 100%;
`;
export const BannerTitle = styled.h1`
  font-size: 5em;
  position: absolute;
  top: 1.5em;
  left: 1.5em;
  color: ${color.whiteColor};
`;
export const ProductContainer = styled.div`
  width: 100%;
  padding: 3em 0;
  display: flex;
`;
export const SideBarContainer = styled.div`
  flex: 1;
  transition: 0.25s ease;
  @media ${breakPoints.mobile} {
    width: 70%;
    height: 100%;
    flex: unset;
    position: fixed;
    top: 7em;
    left: 0;
    z-index: 90;
    transform: ${(props: any) =>
      props.isShow ? "translateX(0)" : "translateX(-100%)"};
  }
`;
export const SideBar = styled.div`
  background-color: ${color.backgroundItemColor};
  height: fit-content;
  .ant-menu {
    background-color: ${color.backgroundItemColor};
    color: ${color.whiteColor};
    .ant-menu-submenu-active {
      background-color: ${color.whiteColor};
      color: #000;
    }
  }
  @media ${breakPoints.mobile} {
    height: 80%;
    overflow-y: scroll;
  }
`;
export const Overlay = styled.div`
  display: none;
  @media ${breakPoints.mobile} {
    display: ${(props: any) => (props.isShow ? "block" : "none")};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #000;
    opacity: 0.8;
    z-index: 50;
  }
`;
export const SideBarToggle = styled.button`
  display: none;
  @media ${breakPoints.mobile} {
    display: flex;
    position: fixed;
    top: 1em;
    right: 0%;
    transform: translateX(100%);
    z-index: 90;
    width: 3em;
    height: 3em;
    background-color: #fff;
  }
`;
export const Title = styled.h1`
  font-size: 2em;
  padding: 1em 0;
  border-bottom: 1px solid ${color.orange};
`;
export const CategoriesContainer = styled.ul`
  padding: 1em;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 1em;
`;
export const CategoryImg = styled.img`
  width: 5em;
  flex: 1;
`;
export const CategoryName = styled.p`
  display: flex;
  align-items: center;
  font-size: 1.5em;
  color: ${color.whiteColor};
  flex: 3;
  @media ${breakPoints.mobile} {
    font-size: 1.3em;
  }
`;
export const CategoryWrapper = styled.li`
  cursor: pointer;
  padding: 1em;
  display: flex;
  justify-content: flex-start;
  gap: 1em;
  border: 1px solid ${color.whiteColor};
  border-radius: 1em;
  transition: 0.25s ease;
  &:hover {
    background-color: ${color.whiteColor};
    ${CategoryName} {
      font-weight: bold;
      color: #000;
    }
  }
`;
export const SideBarButton = styled.span`
  color: ${color.orange};
  font-size: 1.3em;
`;
export const ListProductContainer = styled.div`
  flex: 4;
  padding: 0 2em;
  z-index: 10;
`;
