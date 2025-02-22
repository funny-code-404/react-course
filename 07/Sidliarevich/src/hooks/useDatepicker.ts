import React, {useState} from "react";

export const useDatepicker = () => {
    type TDate = Date | null;
    const [startDate, setStartDate] = useState<TDate>(null);
    const [endDate, setEndDate] = useState<TDate>(null);
    const handleChangeStartDate = (date: React.SetStateAction<TDate>) => {
        setStartDate(date)
    }
    const handleChangeEndDate = (date: React.SetStateAction<TDate>) => {
        setEndDate(date)
    }

    return {startDate, endDate, handleChangeStartDate, handleChangeEndDate}
}