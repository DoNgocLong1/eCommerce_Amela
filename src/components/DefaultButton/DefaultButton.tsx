import React from "react";
import styled from "styled-components";
const Button = styled.button`
  background-color: initial;
  border: 0.3em solid #fff;
  border-radius: 0.5em;
  color: #fff;
  font-size: 1.5em;
  font-weight: 700;
  padding: 1em 2em;
  transition: all 0.2s linear;
`;
interface IButton {
  text: string;
}
const DefaultButton = ({ text }: IButton) => {
  return <Button>{text}</Button>;
};

export default DefaultButton;
