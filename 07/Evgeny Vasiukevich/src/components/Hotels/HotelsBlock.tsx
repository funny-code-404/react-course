import { RefObject } from 'react';
import { useRequestHotels } from '../../hooks/useRequestHotels';
import HotelsElem from './HotelsElem';

type Props = {
    scrollRef: RefObject<HTMLDivElement>,
}

const HotelsBlock = ({ scrollRef }: Props) => {
    const { popularHotels, allHotels } = useRequestHotels();

    return (
        <div className="hotels-block">
            <HotelsElem hotels={popularHotels} title='Homes guests loves'/>
            <HotelsElem searchRef={scrollRef} hotels={allHotels} title='Available hotels'/>
        </div>
    );
};

export default HotelsBlock;