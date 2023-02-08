import { Pagination, PaginationProps } from "antd";
import React, { useState } from "react";
import {
  createSearchParams,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { Container } from "./Navigation.styled";
interface INavigation {
  totalItem: number;
  itemPerPage: number;
}
const PaginationBar = ({ totalItem, itemPerPage }: INavigation) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [searchParams] = useSearchParams();
  const params = Object.fromEntries([...searchParams]);
  const pageNumber: number = Number(params.page) || 1;
  const [current, setCurrent] = useState(pageNumber);
  const onChange: PaginationProps["onChange"] = (page) => {
    setCurrent(page);
    navigate({
      pathname,
      search: createSearchParams({
        ...params,
        page: String(page),
      }).toString(),
    });
  };
  return (
    <Container>
      <Pagination
        current={current}
        pageSize={itemPerPage}
        onChange={onChange}
        total={totalItem}
        defaultCurrent={1}
      />
    </Container>
  );
};

export default PaginationBar;
