import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { resultSelector, memorySelector, operatorSelector, CALC_OFF, OPERATOR_PLUS, OPERATOR_MINUS, OPERATOR_DEVISION, OPERATOR_MULTIPLICATION, OPERATOR_RESULT, MEMORY_SAVE, MEMORY_READ, MEMORY_CLEAR } from '../../ducks/calculator'

const Culc = () => {
    const dispatch = useDispatch();
    const result = useSelector(resultSelector)
    const memory = useSelector(memorySelector)
    const operator = useSelector(operatorSelector)

    const [value, setValue] = useState('')

    const handleOnClick = () => {
        setValue('0')
    }
    const handleOffClick = () => {
        dispatch(CALC_OFF())
        setValue('')
    }
    const handleNumClick = (e) => {
        setValue(value.concat(e.target.innerText))
    }
    const handlePlusClick = () => {
        dispatch(OPERATOR_PLUS(value));
        setValue('0')
    }
    const handleMinusClick = () => {
        dispatch(OPERATOR_MINUS(value));
        setValue('0')
    }
    const handleDevisionClick = () => {
        dispatch(OPERATOR_DEVISION(value));
        setValue('0')
    }
    const handleMultiplicationClick = () => {
        dispatch(OPERATOR_MULTIPLICATION(value));
        setValue('0')
    }
    const handleResultClick = () => {
        dispatch(OPERATOR_RESULT(value));
        setValue('0')
    }
    const handleMSClick = () => {
        dispatch(MEMORY_SAVE(value));
    }
    const handleMRClick = () => {
        dispatch(MEMORY_READ());
        memory && setValue(memory)
    }
    const handleMCClick = () => {
        dispatch(MEMORY_CLEAR());
    }
    return <div>

        <div className='buttons'>
            <div className='result'>
                <div>{result}</div>
                <div>{operator}</div>
                <div>{operator ? value : !result ? value : ''}</div>
            </div>
            <div>
                <button onClick={handleOnClick}>On/AC</button>
                <button onClick={handleOffClick}>Off</button>
            </div>
            <div>
                <button {...(value && { onClick: handleMSClick })}>MS</button>
                <button {...(value && { onClick: handleMRClick })}>MR</button>
                <button {...(value && { onClick: handleMCClick })}>MC</button>
            </div>
            <button {...(value && { onClick: handleNumClick })}>1</button>
            <button {...(value && { onClick: handleNumClick })}>2</button>
            <button {...(value && { onClick: handleNumClick })}>3</button>
            <button {...(value && { onClick: handleNumClick })}>4</button>
            <button {...(value && { onClick: handleNumClick })}>5</button>
            <button {...(value && { onClick: handleNumClick })}>6</button>
            <button {...(value && { onClick: handleNumClick })}>7</button>
            <button {...(value && { onClick: handleNumClick })}>8</button>
            <button {...(value && { onClick: handleNumClick })}>9</button>
            <button {...(value && { onClick: handleNumClick })}>0</button>
            <button {...(value && { onClick: handlePlusClick })}>+</button>
            <button {...(value && { onClick: handleMinusClick })}>-</button>
            <button {...(value && { onClick: handleDevisionClick })}>/</button>
            <button {...(value && { onClick: handleMultiplicationClick })}>*</button>
            <button {...(value && { onClick: handleResultClick })}>=</button>
        </div>
    </div >
}

export default Culc