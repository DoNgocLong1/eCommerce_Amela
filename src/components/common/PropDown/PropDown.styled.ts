import styled from "styled-components";
import color from "utils/color";
export const Container = styled.div`
  display: ${(props: any) => (props.isShow ? "block" : "none")};
  position: absolute;
  top: 2.75em;
  transform: translateX(-70%);
  max-height: 30em;
  width: 25em;
  height: 70em;
  color: #000;
  padding: 1em;
  border-radius: 0.5em;
  background-color: ${color.whiteColor};
  overflow-y: scroll;
`;
export const PropDownTitle = styled.h1`
  font-size: 1.5em;
`;
export const PropDownListItemWrapper = styled.ul`
  width: 100%;
  list-style: none;
  display: flex;
  gap: 1em;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
export const PropDownItemWrapper = styled.li`
  gap: 0.5em;
  display: flex;
  padding: 0.3em;
  width: 100%;
  border-radius: 0.2em;
  border: 1px solid ${color.orange};
`;
export const ItemImg = styled.img`
  width: 6em;
  object-fit: cover;
`;
export const ItemDetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
export const ItemDetailName = styled.p`
  font-size: 0.8em;
`;
export const ItemDetailQuantity = styled.p`
  font-size: 0.9em;
`;
export const ItemDetailPrice = styled.p`
  font-size: 0.9em;
  color: ${color.orange};
`;
