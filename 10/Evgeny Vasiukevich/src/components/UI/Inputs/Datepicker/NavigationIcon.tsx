import { memo } from 'react';

type Props = {
    modifier: string,
    children: string,
}

const NavigationIcon = ({modifier, children}: Props) => {
    return (
        <span
            className={
                `react-datepicker__navigation-icon react-datepicker__navigation-icon--${modifier}`
            }
        >
            {children}
        </span>
    );
};

export default memo(NavigationIcon);