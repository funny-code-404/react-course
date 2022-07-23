import { memo, useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { css } from 'styled-components';
import { TDatePicker } from '../../../../types/types';
import { getPreviousMonth } from "../../../../utils/utils";
import MonthDate from './MonthDate';
import NavigationIcon from './NavigationIcon';

const DesktopDatepicker = ({ startDate, endDate, handleSetDateRange, handleCalendarClose, handleCalendarOpen }: TDatePicker) => {
    const [currentDate, setCurrentDate] = useState(new Date());

    const presentDate = new Date();
    const compareStartAndPrevent = startDate?.getMonth() === getPreviousMonth(presentDate).getMonth();

    return (
        <DatePicker
            renderCustomHeader={({
                monthDate,
                customHeaderCount,
                decreaseMonth,
                increaseMonth,
            }) => (
                <div>
                    {presentDate.getDay() === currentDate.getDay() ? ''
                    : <button
                        aria-label="Previous Month"
                        className={
                            "react-datepicker__navigation react-datepicker__navigation--previous"
                        }
                        style={customHeaderCount === 1 ? { visibility: "hidden" } : undefined}
                        onClick={() => {
                            decreaseMonth()
                            setCurrentDate(getPreviousMonth(monthDate))
                        }}
                    >
                        <NavigationIcon modifier='previous'>{'<'}</NavigationIcon>
                    </button>
                    }
                    <MonthDate monthDate={monthDate} />
                    <button
                        aria-label="Next Month"
                        className={
                            "react-datepicker__navigation react-datepicker__navigation--next"}
                        style={customHeaderCount === 0 ? { visibility: "hidden" } : undefined}
                        onClick={() => {
                            increaseMonth()
                            setCurrentDate(monthDate)
                        }}
                    >
                        <NavigationIcon modifier='next'>{'>'}</NavigationIcon>
                    </button>
                </div>
            )}
            selectsRange={true}
            startDate={ compareStartAndPrevent ? null : startDate }
            endDate={endDate}
            onChange={(update: Array<Date | null>) => handleSetDateRange(update)}
            placeholderText="Check-in – Check-out"
            minDate={new Date()}
            dateFormat="eee d MMM"
            monthsShown={2}
            onCalendarClose={handleCalendarClose}
            onCalendarOpen={handleCalendarOpen({borderStyle: css`border: 3px solid ${({ theme }: any ) => theme.colors.acceptYellow};`, childWrapper: 0})}
        />
    );
};

export default memo(DesktopDatepicker);