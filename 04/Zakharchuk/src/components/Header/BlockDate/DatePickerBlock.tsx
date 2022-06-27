import { useState } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import { TextColorMain } from "../../../styles/variables/style";
import { GeneralWhite } from "../../../styles/variables/style";
import { AccentYellow } from "../../../styles/variables/style";
import "react-datepicker/dist/react-datepicker.css";

export const DatePickerBlock = () => {
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([null, null]);
  const [startDate, endDate] = dateRange;
  return (
    <InputDatePicker>
        <DatePicker
      selectsRange={true}
      startDate={startDate}
      endDate={endDate}
      onChange={(update) => {
        setDateRange(update);
      }}
      isClearable={true}
      monthsShown={2}
      className='date_picker'
      placeholderText='Check-in — Check-out'
      dateFormat="EEE, MMM d"
    />
    </InputDatePicker>
  );
}

export const InputDatePicker = styled.div`
  display: flex;
  align-items: center;
  width: 330px;
  height: 64px;
  font-size: 18px;
  border: none;
  border-radius: 8px;
  color: ${ TextColorMain };
  background:${ GeneralWhite };
  text-align: center;
  &:hover {
        border: 2px solid ${ AccentYellow };
    }
`;

