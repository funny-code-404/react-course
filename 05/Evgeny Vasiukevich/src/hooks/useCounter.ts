import { useState } from 'react';
import { TStateCounter } from '../types/types';

export const useGuestsRoomsCounter = () => {
    const [count, setCount] = useState<TStateCounter>({ adults: 0, children: 0, rooms: 1, agesChildren: [] });
    const { adults, children, rooms }: TStateCounter = count;

    const condition = {
        increase: {
            adults: adults < 30,
            children: children < 10,
            rooms: rooms < 30,
        },
        decrease: {
            adults: adults > 0,
            children: children > 0,
            rooms: rooms > 1,
        }
    }

    return {count, setCount, condition};
};

export const useStatesWindowCouner = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isSelectOpen, setIsSelectOpen] = useState(false);
    const [isSelectChange, setIsSelectChange] = useState(true);

    return {isOpen, setIsOpen, isSelectOpen, setIsSelectOpen, isSelectChange, setIsSelectChange};
}