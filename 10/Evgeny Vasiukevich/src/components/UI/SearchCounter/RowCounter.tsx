import { memo } from 'react';
import { useSelector } from 'react-redux';
import { useChangePropertiesCounter } from '../../../hooks/useChangePropertiesCounter';
import { searchBarCounterPropertiesSelector } from '../../../redux/searchBar/selectors';
import { TCounter } from '../../../types/types';
import { getCapitalLetter, getComparisonCounter } from '../../../utils/utils';
import ButtonChangesCounter from '../Buttons/ButtonChangesCounter';
import { StyledRowCounter } from './styles';

type Props = {
    title: TCounter,
    isSelectChange?: boolean,
}

const RowCounter = memo(({ title, isSelectChange }: Props) => {
    const properties = useSelector(searchBarCounterPropertiesSelector);
    const { onDecrease, onIncrease } = useChangePropertiesCounter();
    const comparisonDecreaseCounter = getComparisonCounter(title, 'decrease', properties[title]);
    const comparisonIncreaseCounter = getComparisonCounter(title, 'increase', properties[title]);
    const conditionForCounter = title === 'children' ? properties[title].length : properties[title];

    return (
        <StyledRowCounter>
            <p className='category'>{getCapitalLetter(title)}</p>
            <ButtonChangesCounter 
                operation='decrease'
                operationFunc={onDecrease[title]}
                disabled={comparisonDecreaseCounter}
            />
            <p className='count'>{conditionForCounter}</p>
            <ButtonChangesCounter 
                operation='increase'
                operationFunc={onIncrease[title]}
                disabled={comparisonIncreaseCounter}
                isSelectChange={isSelectChange}
            />
        </StyledRowCounter>
    );
});

export default RowCounter;