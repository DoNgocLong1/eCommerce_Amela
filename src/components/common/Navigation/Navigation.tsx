import { Pagination, PaginationProps } from "antd";
import React, { useState } from "react";
import { Container } from "./Navigation.styled";

const Navigation = () => {
  const [current, setCurrent] = useState(3);
  const onChange: PaginationProps["onChange"] = (page) => {
    console.log(page);
    setCurrent(page);
  };
  return (
    <Container>
      <Pagination current={current} onChange={onChange} total={50} />
    </Container>
  );
};

export default Navigation;
