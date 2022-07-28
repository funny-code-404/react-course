import { memo, useContext } from 'react';
import { useSelector } from 'react-redux';
import { RefsContext } from '../../context/RefsContext/RefsContext';
import { useRequestHotels } from '../../hooks/useRequestHotels';
import { availableHotelsLoadingSelector, popularHotelsLoadingSelector } from '../../redux/hotels/selectors';
import HotelsElem from './HotelsElem';

const HotelsBlock = () => {
    const { popularHotels, availableHotels } = useRequestHotels();
    const { toAvailableHotelsRef } = useContext(RefsContext);
    const popularHotelsLoading = useSelector(popularHotelsLoadingSelector);
    const availableHotelsLoading = useSelector(availableHotelsLoadingSelector);

    return (
        <div className="hotels-block">
            <HotelsElem 
                hotels={popularHotels} 
                title='Homes guests loves'
                loading={popularHotelsLoading}
            />
            <HotelsElem 
                searchRef={toAvailableHotelsRef} 
                hotels={availableHotels} 
                title='Available hotels'
                loading={availableHotelsLoading}
            />
        </div>
    );
};

export default memo(HotelsBlock);