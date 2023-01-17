import Header from "components/Header/Header";
import React from "react";
import { Container } from "./DefaultLayout.styled";
interface IDefaultLayout {
  children: React.ReactNode;
}
const DefaultLayout = ({ children }: IDefaultLayout) => {
  return (
    <Container>
      <Header />
      {children}
    </Container>
  );
};

export default DefaultLayout;
