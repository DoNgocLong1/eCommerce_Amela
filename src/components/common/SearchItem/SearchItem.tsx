import { SearchOutlined } from "@ant-design/icons";
import { fetchProduct } from "apiServices/productService";
import React, { useState } from "react";
import {
  createSearchParams,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { IconWrapper, SearchInput, SearchWrapper } from "./SearchItem.styled";
const SearchItem = () => {
  const [search, setSearch] = useState<string>("");
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [searchParams] = useSearchParams();
  const params = Object.fromEntries([...searchParams]);

  const handleSearch = (): void => {
    navigate({
      pathname,
      search: createSearchParams({
        ...params,
        search: search,
      }).toString(),
    });
    fetchProduct(params);
  };
  return (
    <SearchWrapper>
      <SearchInput
        placeholder="input search"
        value={search}
        onChange={(e: any) => setSearch(e.target.value)}
      />
      <IconWrapper onClick={handleSearch}>
        <SearchOutlined />
      </IconWrapper>
    </SearchWrapper>
  );
};

export default SearchItem;
