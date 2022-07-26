import { memo } from 'react';

type Props = {
    monthDate: Date,
}

const MonthDate = ({monthDate}: Props) => {
    return (
        <span className="react-datepicker__current-month">
            {monthDate.toLocaleString("en-US", {
                month: "long",
                year: "numeric",
            })}
        </span>
    );
};

export default memo(MonthDate);