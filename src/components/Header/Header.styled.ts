import color from "utils/color";
import styled from "styled-components";
import { Link } from "react-router-dom";
export const Container = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 0.5em 5em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 99;
  background-color: ${color.headerColor};
  box-shadow: 0 0.2em 0.5em #8b8b8b;
`;
export const Logo = styled.img`
  width: 14em;
  object-fit: cover;
  filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(213deg)
    brightness(105%) contrast(101%);
`;
export const FeatureWrapper = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${color.whiteColor};
  font-size: 1.7em;
  gap: 1.3em;
`;
export const Feature = styled.li`
  position: relative;
  display: flex;
  gap: 0.3em;
  cursor: pointer;
  span {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
export const FeatureLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;
