import styled from "styled-components";
import color from "utils/color";
export const SearchWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1em 2em;
  background-color: #000;
  border-radius: 2.5em;
  color: ${color.whiteColor};
`;
export const SearchInput = styled.input`
  border: none;
  outline: none;
  font-size: 1.5em;
  width: 40em;
  background-color: transparent;
  padding: 0.5em 1em;
  color: ${color.whiteColor};
`;
export const IconWrapper = styled.div`
  font-size: 1.8em;
  cursor: pointer;
`;
