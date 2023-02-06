import color from "utils/color";
import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 2em 0;
`;
export const CartBannerWrapper = styled.div`
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
