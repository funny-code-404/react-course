import { memo, RefObject } from 'react';
import { THotel } from '../../types/types';
import Loader from '../UI/Loader/Loader';
import Slider from '../UI/Slider.tsx/Slider';
import { Hotels } from './styles';

type Props = {
    searchRef?: RefObject<HTMLDivElement> | null,
    hotels: THotel[] | null,
    title: string,
    loading: boolean,
};

const HotelsElem = memo(({searchRef, hotels, title, loading}: Props) => {
    return (
        <Hotels className='hotels'>
            <div ref={searchRef} className='container hotels__container'>
                <h2 className='hotels__title'>{title}</h2>
                {loading ?
                <Loader />
                : <Slider hotels={hotels} />
                }
            </div>
        </Hotels>
    );
});

export default HotelsElem;