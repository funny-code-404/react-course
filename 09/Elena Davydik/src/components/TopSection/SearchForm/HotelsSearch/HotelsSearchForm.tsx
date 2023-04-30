import styled from "styled-components";
import { ChangeEvent, FormEvent } from "react";
import { Button } from "../../../UI/Button";
import { DatePickerBlock } from "../DatePicker/DatePicker";
import { Filter } from "../Filter/Filter";
import { config } from "./config";

type Props = {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
};

export const HotelsSearchForm = ({ onChange, onSubmit }: Props) => {
  return (
    <StyledHotelsSearchForm className="block">
      <div className="searchForm__upTitles-container">
        <h3 className="searchForm__destination-title">
          {config.destinationTitle}
        </h3>
        <h3 className="searchForm__check-in-title">{config.checkInTitle}</h3>
      </div>
      <form onSubmit={onSubmit} className="searchForm__container">
        <input
          onChange={onChange}
          placeholder={config.placeholderText}
          className="searchForm__input"
        />
        <DatePickerBlock />
        <Filter />
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
