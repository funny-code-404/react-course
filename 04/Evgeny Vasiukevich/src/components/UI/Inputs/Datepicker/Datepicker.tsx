import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { StyledWrapper } from './styles';
import { getPreviousMonth } from "../../../../utils/utils";
import NavigationIcon from './NavigationIcon';
import MonthDate from './MonthDate';
import { baseTheme } from '../../../../styles/theme';

type TRange = Array<Date | null>;

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const Datepicker = () => {
    const [dateRange, setDateRange] = useState<TRange>([null, null]);
    const [startDate, endDate]: TRange = dateRange;
    const [currentDate, setCurrentDate] = useState(new Date());
    const [style, setStyle] = useState('')

    const presentDate = new Date();
    const compareStartAndPrevent = startDate?.getMonth() === getPreviousMonth(presentDate).getMonth();
    const handleCalendarClose = () => setStyle('');
    const handleCalendarOpen = () => setStyle(`border: 3px solid ${baseTheme.colors.acceptYellow};`);
    
    return (
        <StyledWrapper border={style}>
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
            startDate={
                compareStartAndPrevent ? null : startDate
            }
            endDate={endDate}
            onChange={(update) => setDateRange(update)}
            placeholderText="Check-in — Check-out"
            minDate={new Date()}
            dateFormat="DDDD, MMM d"
            monthsShown={2}
            onCalendarClose={handleCalendarClose}
            onCalendarOpen={handleCalendarOpen}
        />
        </StyledWrapper>
    );
};

export default Datepicker;