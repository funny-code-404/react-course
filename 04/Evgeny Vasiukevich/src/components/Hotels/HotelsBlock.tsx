import React, { LegacyRef, useEffect, useState } from 'react';
import ApiService from '../../API/ApiService';
import { THotel } from '../../types/types';
import HotelsElem from './HotelsElem';

type Props = {
    searchRef: LegacyRef<HTMLDivElement>,
    hotels: THotel[],
}

const HotelsBlock = ({ searchRef, hotels }: Props) => {
    const [popularHotels, setPopularHotels] = useState([]);

    useEffect(() => {
        fetchPopularHotels();
    }, [])

    async function fetchPopularHotels() {
        const response = await ApiService.getPopularHotels();
        setPopularHotels(response.data);
    }

    return (
        <div className="hotels-block">
            <HotelsElem hotels={popularHotels} title='Homes guests loves'/>
            <HotelsElem searchRef={searchRef} hotels={hotels} title='Available hotels'/>
        </div>
    );
};

export default HotelsBlock;