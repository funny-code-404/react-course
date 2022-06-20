import { useContext, useEffect, useState } from 'react';
import ApiService from '../../API/ApiService';
import { SearchContext } from '../../context/SearchContext/SearchContext';
import HotelsElem from './HotelsElem';

const HotelsBlock = () => {
    const { searchRef, hotels } = useContext(SearchContext)

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