import { useContext } from "react";
import { SearchHotelsContext } from "../../../context/SearchHotelsContext/SearchHotelsContext";
import { HotelsSearchForm } from "./HotelsSearchForm";
import { SearchForm } from "./styles";

export const HotelsSearchFormList = () => {
  const { handleSubmit, handleChange } = useContext(SearchHotelsContext);

  return (
    <SearchForm className="searchForm">
      <HotelsSearchForm onSubmit={handleSubmit} onChange={handleChange} />
    </SearchForm>
  );
};
