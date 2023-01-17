import color from "utils/color";
import styled from "styled-components";
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
  background-color: ${color.primaryColor};
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
  color: #fff;
  font-size: 1.5em;
  gap: 1em;
`;
export const Feature = styled.li`
  display: flex;
`;
