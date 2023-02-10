import color from "utils/color";
import styled from "styled-components";
import breakPoints from "constants/breakpoint";
export const Container = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 1em 5em;
  display: flex;
  justify-content: space-between;
  gap: 2em;
  align-items: center;
  z-index: 99;
  background-color: ${color.headerColor};
  box-shadow: 0 0.2em 0.5em #8b8b8b;
  @media ${breakPoints.tablet} {
    font-size: 8px;
  }
  @media ${breakPoints.mobile} {
    font-size: 8px;
  }
`;
