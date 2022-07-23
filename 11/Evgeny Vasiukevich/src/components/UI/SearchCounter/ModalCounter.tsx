import { LegacyRef } from 'react';
import { useSelector } from 'react-redux';
import { searchBarCounterPropertiesSelector, searchBarCounterStatesSelector } from '../../../redux/searchBar/selectors';
import ChooseAgeChildren from './ChooseAgeChildren';
import RowCounter from './RowCounter';
import { StyledModalCounter } from './styles';

type Props = {
    selectRef: LegacyRef<HTMLSelectElement>,
    selectChange: () => void,
}

const ModalCounter = ({selectRef, selectChange}: Props) => {
    const properties = useSelector(searchBarCounterPropertiesSelector);
    const states = useSelector(searchBarCounterStatesSelector);
    const { children } = properties;
    const { isSelectAvailable, isSelectChange } = states;

    return (
        <StyledModalCounter className='modal-counter'>
            <RowCounter title={'adults'} />
            <RowCounter title={'children'} isSelectChange={isSelectChange} />
            <RowCounter title={'rooms'} />
            {isSelectAvailable ? 
            <ChooseAgeChildren 
                selectRef={selectRef} 
                selectChange={selectChange} 
                agesChildren={children}
            /> 
            : ''}
        </StyledModalCounter>
    );
};

export default ModalCounter;