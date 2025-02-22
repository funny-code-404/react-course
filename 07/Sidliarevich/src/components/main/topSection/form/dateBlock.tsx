import React, {memo} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {useDatepicker} from "../../../../hooks/useDatepicker";


export const DateBlock = memo(() => {
    const {startDate, endDate, handleChangeStartDate, handleChangeEndDate} = useDatepicker();

    return (
        <div className="form__input-date">
            <DatePicker dateFormat="dd-MM-yyyy" minDate={new Date()} placeholderText="Check-in" selected={startDate}
                        onChange={handleChangeStartDate}/>—
            <DatePicker dateFormat="dd-MM-yyyy" placeholderText="Check-out" selected={endDate}
                        onChange={handleChangeEndDate}/>
        </div>
    )
})

