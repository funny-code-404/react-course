import { LegacyRef } from 'react';
import { useSelector } from 'react-redux';
import { searchCounterPropertiesSelector, searchCounterStatesSelector } from '../../../redux/searchCounter/selectors';
import ChooseAgeChildren from './ChooseAgeChildren';
import RowCounter from './RowCounter';
import { StyledModalCounter } from './styles';

type Props = {
    selectRef: LegacyRef<HTMLSelectElement>,
    selectChange: () => void,
}

const ModalCounter = ({selectRef, selectChange}: Props) => {
    const properties = useSelector(searchCounterPropertiesSelector);
    const states = useSelector(searchCounterStatesSelector);
    const { agesChildren } = properties;
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
                agesChildren={agesChildren}
            /> 
            : ''}
        </StyledModalCounter>
    );
};

export default ModalCounter;