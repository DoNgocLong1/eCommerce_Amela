import color from "utils/color";
import styled from "styled-components";
export const Container = styled.div`
  background-color: ${color.backgroundColor} !important;
  width: 100%;
  display: flex;
  padding-bottom: 2em;
  flex-direction: column;
  color: ${color.whiteColor};
  .ant-pagination {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .ant-pagination-item,
  .ant-pagination-item-link {
    border: 1px solid ${color.whiteColor} !important;
    padding: 0.5em 0.7em !important;
    height: 100% !important;
    transition: 0.25s ease !important;
    a {
      color: ${color.whiteColor};
    }
    :hover a {
      color: #000;
      font-weight: bold;
    }
    :hover {
      color: #000;
      background-color: ${color.whiteColor} !important;
    }
  }
  .ant-pagination li {
    height: 100%;
  }
  .ant-pagination-item-link {
    padding: 1em 1.3em !important;
    :hover span {
      color: #000;
      font-weight: bold;
    }
    span {
      color: ${color.whiteColor};
      font-size: 1.2em;
    }
  }
  .ant-pagination-item-active a {
    color: #000;
    font-weight: bold;
  }
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
export const SideBar = styled.div`
  background-color: ${color.backgroundItemColor};
  flex: 1;
  height: fit-content;
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
export const ListProductContainer = styled.div`
  flex: 4;
  padding: 0 2em;
`;
