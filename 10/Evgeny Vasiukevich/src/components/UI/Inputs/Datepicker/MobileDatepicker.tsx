import { memo } from 'react';
import DatePicker from 'react-datepicker';
import { css } from 'styled-components';
import { TDatePicker } from '../../../../types/types';

const MobileDatepicker = ({ startDate, endDate, handleSetDateRange, handleCalendarClose, handleCalendarOpen }: TDatePicker) => {
  return (
    <>
      <DatePicker
        selected={startDate}
        onChange={(update: Date | null) => handleSetDateRange([update, endDate])}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        minDate={new Date()}
        maxDate={endDate == null ? null: endDate}
        dateFormat="eee d MMM yyyy"
        onCalendarClose={handleCalendarClose}
        onCalendarOpen={handleCalendarOpen({borderStyle: `border: 3px solid ${({ theme }: any ) => theme.colors.acceptBlue};`, childWrapper: 1})}
      />
      <DatePicker
        selected={endDate}
        onChange={(update: Date | null) => handleSetDateRange([startDate, update])}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate == null ? new Date() : startDate}
        dateFormat="eee d MMM yyyy"
        onCalendarClose={handleCalendarClose}
        onCalendarOpen={handleCalendarOpen({borderStyle: css`border: 3px solid ${({ theme }: any ) => theme.colors.acceptBlue};`, childWrapper: 2})}
      />
    </>
  );
};

export default memo(MobileDatepicker);