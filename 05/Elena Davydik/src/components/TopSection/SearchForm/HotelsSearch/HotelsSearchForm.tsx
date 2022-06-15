import { ChangeEvent, FormEvent, FormEventHandler } from "react";
import { Button } from "../../../UI/Button";
import { DatePickerBlock } from "../DatePicker/DatePicker";
import { TopSectionBlock } from "../../index";
import { FilterContextProvider } from "../../../context/filterContextProvider";
import { FilterContext } from "../../../context/filterContext";
import { Filter } from "../Filter/Filter";

type Props = {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
};

const inputDestinationTitle = "Your destination or hotel name";
const inputCheckInTitle = "Check-in — Check-out";
const inputPlaceholderText = "New York";

export const HotelsSearchForm = ({ onChange, onSubmit }: Props) => (
  <TopSectionBlock className="top-section">
    <div className="container block">
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
    </div>
  </TopSectionBlock>
);
