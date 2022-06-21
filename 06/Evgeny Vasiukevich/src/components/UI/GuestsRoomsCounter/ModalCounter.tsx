import { LegacyRef } from 'react';
import styled from 'styled-components';
import { TCounter } from '../../../types/types';
import ChooseAgeChildren from './ChooseAgeChildren';
import RowCounter from './RowCounter';
import { StyledModalCounter } from './styles';

type Props = {
    count: {
        adults: number,
        children: number,
        rooms: number,
        agesChildren: string[],
    },
    onIncrease: (category: TCounter) => void,
    onDecrease: (category: TCounter) => void,
    selectRef: LegacyRef<HTMLSelectElement>,
    isSelectOpen: boolean,
    isSelectChange: boolean,
    selectChange: () => void,
}

const ModalCounter = ({count, onIncrease, onDecrease, selectRef, isSelectOpen, isSelectChange, selectChange}: Props) => {
    return (
        <StyledModalCounter className='modal-counter'>
            <RowCounter title={'adults'} count={count.adults} onIncrease={onIncrease} onDecrease={onDecrease} />
            <RowCounter title={'children'} count={count.children} onIncrease={onIncrease} onDecrease={onDecrease} isSelectChange={isSelectChange} />
            <RowCounter title={'rooms'} count={count.rooms} onIncrease={onIncrease} onDecrease={onDecrease} />
            {isSelectOpen ? <ChooseAgeChildren selectRef={selectRef} selectChange={selectChange} agesChildren={count.agesChildren} /> : ''}
        </StyledModalCounter>
    );
};

export default ModalCounter;