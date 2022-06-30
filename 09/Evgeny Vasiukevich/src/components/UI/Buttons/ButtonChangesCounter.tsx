import { memo } from 'react';
import iconDecrementDisabled from '../../../assets/icons/icon-decrement-disabled.svg';
import iconDecrement from '../../../assets/icons/icon-decrement.svg';
import iconIncrementDisabled from '../../../assets/icons/icon-increment-disabled.svg';
import iconIncrement from '../../../assets/icons/icon-increment.svg';

type Props = {
    operation: 'decrease' | 'increase',
    operationFunc: () => void,
    disabled: boolean,
    isSelectChange?: boolean,
}

const ButtonChangesCounter = ({ operation, operationFunc, disabled, isSelectChange }: Props) => {
    const compareOperation = operation === 'decrease';

    return (
        compareOperation ? 
        <button 
            className='decrement' 
            onClick={(e) => {
                e.preventDefault();
                operationFunc();
            }} 
            disabled={!disabled} >
            <img 
                src={disabled ? 
                    iconDecrement 
                    : iconDecrementDisabled} 
                alt="Decrement" 
            />
        </button>
        : <button 
            className='increment' 
            onClick={(e) => {
                e.preventDefault();
                operationFunc();
            }} 
            disabled={!disabled || !(isSelectChange ?? true)} >
            <img 
                src={disabled && (isSelectChange ?? true) ? 
                    iconIncrement 
                    : iconIncrementDisabled} 
                alt="Increment" 
            />
        </button>
    );
};

export default memo(ButtonChangesCounter);