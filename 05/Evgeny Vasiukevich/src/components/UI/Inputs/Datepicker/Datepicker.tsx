import React, { useState } from 'react';
import "react-datepicker/dist/react-datepicker.css";
import useWindowDimensions from '../../../../hooks/useWindowDimensions';
import DesktopDatepicker from './DesktopDatepicker';
import MobileDatepicker from './MobileDatepicker';
import { StyledWrapper } from './styles';

type TRange = Array<Date | null>;

type TStyles = {
    borderStyle: string, 
    childWrapper: number,
}

const Datepicker = () => {
    const { width } = useWindowDimensions();
    const [dateRange, setDateRange] = useState<TRange>([null, null]);
    const [startDate, endDate]: TRange = dateRange;
    const [style, setStyle] = useState<TStyles>({borderStyle: '', childWrapper: 0});
    const {borderStyle, childWrapper}: TStyles = style;

    const handleCalendarClose = () => setStyle({borderStyle: '', childWrapper});
    const handleCalendarOpen = ({borderStyle, childWrapper}: TStyles) => () => setStyle({borderStyle, childWrapper});
    const handleSetDateRange = (update: TRange) => setDateRange(update);
    
    return (
        <StyledWrapper border={borderStyle} child={childWrapper}>
            { width <= 768 ?
                <MobileDatepicker 
                    startDate={startDate} 
                    endDate={endDate} 
                    handleSetDateRange={handleSetDateRange} 
                    handleCalendarClose={handleCalendarClose}
                    handleCalendarOpen={handleCalendarOpen}
                />
                : <DesktopDatepicker 
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