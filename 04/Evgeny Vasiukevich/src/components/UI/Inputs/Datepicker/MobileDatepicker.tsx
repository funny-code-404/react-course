import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import styled from 'styled-components';
import { baseTheme } from '../../../../styles/theme';
import { getFontsFragment } from '../../../../utils/utils';

type Props = {
    startDate: Date | null,
    endDate: Date | null,
    handleSetDateRange: (date: Array<Date | null>) => void,
    handleCalendarClose: () => void,
    handleCalendarOpen: (borderStyle: string) => () => void,
}

const MobileDatepicker = ({ startDate, endDate, handleSetDateRange, handleCalendarClose, handleCalendarOpen }: Props) => {
    return (
      <>
        <StyledStartDatepicker
          selected={startDate}
          onChange={(update: Date | null) => handleSetDateRange([update, endDate])}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          minDate={new Date()}
          dateFormat="eee d MMM yyyy"
          onCalendarClose={handleCalendarClose}
          onCalendarOpen={handleCalendarOpen(`border: 3px solid ${baseTheme.colors.acceptBlue};`)}
        />
        <DatePicker
          selected={endDate}
          onChange={(update: Date | null) => handleSetDateRange([startDate, update])}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          dateFormat="eee d MMM yyyy"
          onCalendarClose={handleCalendarClose}
          onCalendarOpen={handleCalendarOpen(`border: 3px solid ${baseTheme.colors.acceptBlue};`)}
        />
      </>
    );
  };

const StyledStartDatepicker = styled(DatePicker)`
    &::before {
        content: 'Check-out date';
        position: relative;
        z-index: 100;
        top: 0px;
        left: 500px;
        width: 400px;
        height: 100px;
        background: black;
        ${getFontsFragment('xs')}
        color: ${baseTheme.colors.textColor};
            
    }
`

export default MobileDatepicker;