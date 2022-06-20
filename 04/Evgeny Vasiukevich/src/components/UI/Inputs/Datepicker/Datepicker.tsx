import React, { useState } from 'react';
import "react-datepicker/dist/react-datepicker.css";
import useWindowDimensions from '../../../../hooks/useWindowDimensions';
import DesctopDatepicker from './DesctopDatepicker';
import MobileDatepicker from './MobileDatepicker';
import { StyledWrapper } from './styles';

type TRange = Array<Date | null>;

const Datepicker = () => {
    const { width } = useWindowDimensions();
    const [dateRange, setDateRange] = useState<TRange>([null, null]);
    const [startDate, endDate]: TRange = dateRange;
    const [style, setStyle] = useState('')

    const handleCalendarClose = () => setStyle('');
    const handleCalendarOpen = (borderStyle: string) => () => setStyle(borderStyle);
    const handleSetDateRange = (update: TRange) => setDateRange(update);
    
    return (
        <StyledWrapper border={style}>
            { width <= 768 ?
                <MobileDatepicker 
                    startDate={startDate} 
                    endDate={endDate} 
                    handleSetDateRange={handleSetDateRange} 
                    handleCalendarClose={handleCalendarClose}
                    handleCalendarOpen={handleCalendarOpen}
                />
                : <DesctopDatepicker 
                    startDate={startDate} 
                    endDate={endDate} 
                    handleSetDateRange={handleSetDateRange} 
                    handleCalendarClose={handleCalendarClose}
                    handleCalendarOpen={handleCalendarOpen}
                />
            }
        </StyledWrapper>
    );
};

export default Datepicker;