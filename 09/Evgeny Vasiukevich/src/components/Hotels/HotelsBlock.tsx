import { memo, useContext } from 'react';
import { RefsContext } from '../../context/RefsContext';
import { useRequestHotels } from '../../hooks/useRequestHotels';
import HotelsElem from './HotelsElem';

const HotelsBlock = () => {
    const { popularHotels, availableHotels } = useRequestHotels();
    const { toAvailableHotelsRef } = useContext(RefsContext);

    return (
        <div className="hotels-block">
            <HotelsElem 
                hotels={popularHotels} 
                title='Homes guests loves'
            />
            <HotelsElem 
                searchRef={toAvailableHotelsRef} 
                hotels={availableHotels} 
                title='Available hotels'
            />
        </div>
    );
};

export default memo(HotelsBlock);