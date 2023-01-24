import breakPoints from "constants/breakpoint";
import styled from "styled-components";
import color from "utils/color";
export const Container = styled.div`
  background-color: ${color.backgroundColor} !important;
  width: 100%;
`;
export const BrowserCategory = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;
export const BrowserCategories = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 2em;
  padding: 2em;
  flex-direction: column;
  padding-top: 5em;
  @media ${breakPoints.mobile} {
    padding: 0 0;
  }
`;
export const BrowserCategoriesTitle = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3em;
  color: #fff;
`;
export const CategoriesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 3.2em 2em 0 2em;
  gap: 2em;
  flex-wrap: wrap;
  @media ${breakPoints.mobile} {
    padding: 3.2em 0 0 0;
  }
`;
export const CategoryTitle = styled.span`
  text-align: center;
  width: 100%;
  padding: 0.5em;
  background-color: #26ad60;
  font-size: 1.5em;
  color: #000;
  font-weight: bold;
  align-self: flex-end;
  z-index: 1;
`;
export const CategoryItemImg = styled.img`
  transition: 0.3s ease;
  width: 100%;
  @media ${breakPoints.mobile} {
    width: 80%;
  }
`;
export const CategoryItemImgWrapper = styled.div`
  z-index: 2;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  transition: 0.3s ease;
  background-color: ${color.backgroundColor};
`;
export const CategoryItem = styled.div`
  min-height: 30em;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  position: relative;
  @media ${breakPoints.tablet} {
    flex: unset;
    flex-basis: 30%;
    min-height: 30em;
  }
  @media ${breakPoints.mobile} {
    flex: unset;
    flex-basis: 45%;
    min-height: 23em;
  }
  &:hover {
    ${CategoryItemImgWrapper} {
      background-color: ${color.backgroundItemColor};
      transform: translateY(-3.5em);
      border-top: 0.5em solid #26ad60;
    }
    ${CategoryItemImg} {
      transform: scale(1.2);
    }
  }
`;
