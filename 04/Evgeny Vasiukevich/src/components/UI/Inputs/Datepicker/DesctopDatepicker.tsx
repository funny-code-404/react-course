import React, { useState } from 'react';
import "react-datepicker/dist/react-datepicker.css";
import { baseTheme } from '../../../../styles/theme';
import { getPreviousMonth } from "../../../../utils/utils";
import DatePicker from 'react-datepicker';
import MonthDate from './MonthDate';
import NavigationIcon from './NavigationIcon';

type Props = {
    startDate: Date | null,
    endDate: Date | null,
    handleSetDateRange: (date: Array<Date | null>) => void,
    handleCalendarClose: () => void,
    handleCalendarOpen: (borderStyle: string) => () => void,
}

const DesctopDatepicker = ({ startDate, endDate, handleSetDateRange, handleCalendarClose, handleCalendarOpen }: Props) => {
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
            placeholderText="Check-in — Check-out"
            minDate={new Date()}
            dateFormat="eee d MMM"
            monthsShown={2}
            onCalendarClose={handleCalendarClose}
            onCalendarOpen={handleCalendarOpen(`border: 3px solid ${baseTheme.colors.acceptYellow};`)}
        />
    );
};

export default DesctopDatepicker;