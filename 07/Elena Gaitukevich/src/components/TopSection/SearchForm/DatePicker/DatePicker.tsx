import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";
import { LightTheme } from "../../../../styles/styled-components/LightTheme";
import { getFont } from "../../../../styles/styled-components/mixins";

export const DatePickerBlock = () => {
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([
    null,
    null,
  ]);
  const [startDate, endDate] = dateRange;
  return (
    <StyledDatePicker>
      <DatePicker
        selectsRange={true}
        startDate={startDate}
        endDate={endDate}
        onChange={(update) => {
          setDateRange(update);
        }}
        monthsShown={2}
        className="datepicker"
        placeholderText="Check-in — Check-out"
        dateFormat="EEE, MMM d"
      />
    </StyledDatePicker>
  );
};

const StyledDatePicker = styled.div`
  max-width: 259px;
  width: 100%;
  height: 58px;
  position: relative;
  left: 7px;

  & .datepicker {
    max-width: 259px;
    width: 100%;
    height: 64px;
    padding: 13px;
    position: relative;
    bottom: 3px;

    ${getFont("sm", "regular", "sm")};
    color: ${LightTheme.colors.mainText};
    text-align: center;

    border: 2px solid #cecece;

    border-radius: 8px;

    @media ${LightTheme.media.sm} {
      top: 8px;
      height: 42px;
    }
  }

  & .datepicker:focus {
    border: 3px solid ${LightTheme.colors.accentYellow};
  }

  .react-datepicker {
    width: 484px;
  }

  & .react-datepicker-wrapper {
    max-width: 259px;
    width: 100%;
  }
`;
