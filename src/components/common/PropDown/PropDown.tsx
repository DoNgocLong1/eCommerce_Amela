import React from "react";
import { Container } from "./PropDown.styled";

interface IPropDown {
  children: React.ReactNode;
  isShow: boolean;
  translateX: string;
}
const PropDown = ({ children, isShow, translateX = "70%" }: IPropDown) => {
  console.log(isShow);
  return (
    <Container isShow={isShow} translateX={translateX}>
      {children}
    </Container>
  );
};

export default PropDown;
