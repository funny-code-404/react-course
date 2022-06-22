import styled from "styled-components";
import { ChangeEvent, FormEvent } from "react";
import { Button } from "../../../UI/Button";
import { DatePickerBlock } from "../DatePicker/DatePicker";
import { FilterContextProvider } from "../../../context/filterContextProvider";
import { Filter } from "../Filter/Filter";

type Props = {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
};

const inputDestinationTitle = "Your destination or hotel name";
const inputCheckInTitle = "Check-in — Check-out";
const inputPlaceholderText = "New York";

export const HotelsSearchForm = ({ onChange, onSubmit }: Props) => {
  return (
    <StyledHotelsSearchForm className="block">
      <div className="searchForm__upTitles-container">
        <h3 className="searchForm__destination-title">
          {inputDestinationTitle}
        </h3>
        <h3 className="searchForm__check-in-title">{inputCheckInTitle}</h3>
      </div>
      <form onSubmit={onSubmit} className="searchForm__container">
        <input
          onChange={onChange}
          placeholder={inputPlaceholderText}
          className="searchForm__input"
        />
        <DatePickerBlock />
        <FilterContextProvider>
          <Filter />
        </FilterContextProvider>
        <Button>Search</Button>
      </form>
    </StyledHotelsSearchForm>
  );
};

const StyledHotelsSearchForm = styled.div`
  padding-left: 0;
  padding-right: 0;
  padding-bottom: 25px;
`;
