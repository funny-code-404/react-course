import iconDecrementDisabled from '../../../assets/icons/icon-decrement-disabled.svg';
import iconDecrement from '../../../assets/icons/icon-decrement.svg';
import iconIncrementDisabled from '../../../assets/icons/icon-increment-disabled.svg';
import iconIncrement from '../../../assets/icons/icon-increment.svg';
import { TCounter } from '../../../types/types';
import { getCapitalLetter, getComparisonCounter } from '../../../utils/utils';
import { StyledRowCounter } from './styles';

type Props = {
    title: TCounter,
    count: number,
    onIncrease: (category: TCounter) => void, 
    onDecrease: (category: TCounter) => void,
    isSelectChange?: boolean,
}

const RowCounter = ({ title, count, onIncrease, onDecrease, isSelectChange }: Props) => {
    return (
        <StyledRowCounter>
            <p className='category'>{getCapitalLetter(title)}</p>
            <button className='decrement' onClick={() => onDecrease(title)} disabled={!getComparisonCounter(title, 'decrease', count)} >
                <img 
                    src={getComparisonCounter(title, 'decrease', count) ? iconDecrement : iconDecrementDisabled} 
                    alt="Decrement" 
                />
            </button>
            <p className='count'>{count}</p>
            <button className='increment' onClick={() => onIncrease(title)} disabled={!getComparisonCounter(title, 'increase', count) || !(isSelectChange ?? true)} >
                <img 
                    src={getComparisonCounter(title, 'increase', count) && (isSelectChange ?? true) ? iconIncrement : iconIncrementDisabled} 
                    alt="Increment" 
                />
            </button>
        </StyledRowCounter>
    );
};

export default RowCounter;