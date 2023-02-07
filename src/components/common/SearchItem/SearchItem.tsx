import { SearchOutlined } from "@ant-design/icons";
import { searchProduct } from "apiServices/productService";
import React, { useState } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
import { IconWrapper, SearchInput, SearchWrapper } from "./SearchItem.styled";

const SearchItem = () => {
  const [search, setSearch] = useState<string>("");
  const navigate = useNavigate();
  const handleSearch = (): void => {
    console.log(searchProduct(search));
    searchProduct(search);
    navigate({
      pathname: "/product",
      search: createSearchParams({
        search: String(search),
      }).toString(),
    });
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
