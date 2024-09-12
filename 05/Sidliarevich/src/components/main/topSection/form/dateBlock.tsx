import React, {memo, useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

type TDate = Date | null;

export const DateBlock = memo(() => {
    const [startDate, setStartDate] = useState<TDate>(null);
    const [endDate, setEndDate] = useState<TDate>(null);
    const handleChangeStartDate = (date: React.SetStateAction<TDate>) => {
        setStartDate(date)
    }
    const handleChangeEndDate = (date: React.SetStateAction<TDate>) => {
        setEndDate(date)
    }

    return (
        <div className="form__input-date">
            <DatePicker dateFormat="dd-MM-yyyy" minDate={new Date()} placeholderText="Check-in" selected={startDate}
                        onChange={handleChangeStartDate}/>—
            <DatePicker dateFormat="dd-MM-yyyy" placeholderText="Check-out" selected={endDate}
                        onChange={handleChangeEndDate}/>
        </div>
    )
})

