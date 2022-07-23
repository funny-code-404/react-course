import { memo } from 'react';

type Props = {
    adults: number,
    children: number,
    rooms: number,
}

const MobileSearchCounterWindow = ({ adults, children, rooms }: Props) => {
    return (
        <>
            <div>
                <h6>Adults</h6>
                <p>{adults}</p>
            </div>
            <div>
                <h6>Children</h6>
                <p>{children}</p>
            </div>
            <div>
                <h6>Rooms</h6>
                <p>{rooms}</p>
            </div>
        </>
    );
};

export default memo(MobileSearchCounterWindow);