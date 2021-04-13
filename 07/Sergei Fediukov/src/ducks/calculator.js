import { createSlice } from '@reduxjs/toolkit'

export const resultSelector = state => state.calculator.result
export const memorySelector = state => state.calculator.memory
export const operatorSelector = state => state.calculator.operator

export const initialCalculatorState = {
    result: '',
    operator: '',
    memory: ''
}

const calculatorReducer = createSlice({
    name: 'calculator-reducer',
    initialState: initialCalculatorState,
    reducers: {
        CALC_OFF: (state) => {
            state.result = '';
            state.operator = '';
        },
        OPERATOR_PLUS: (state, action) => {
            if (state.operator === "-") {
                state.result = Number(state.result) - Number(action.payload)
            }
            else if (state.operator === "*") {
                state.result = Number(state.result) * Number(action.payload)
            }
            else if (state.operator === "/") {
                state.result = Number(state.result) / Number(action.payload)
            }
            else {
                (state.result = Number(state.result) + Number(action.payload))
            }
            state.operator = '+';
        },
        OPERATOR_MINUS: (state, action) => {
            if (!state.result) {
                state.result = Number(action.payload);
                state.operator = '-';
            }
            else if (state.operator === "+") {
                state.result = Number(state.result) + Number(action.payload);
            }
            else if (state.operator === "*") {
                state.result = Number(state.result) * Number(action.payload);
            }
            else if (state.operator === "/") {
                state.result = Number(state.result) / Number(action.payload);
            }
            else (state.result = Number(state.result) - Number(action.payload));
            state.operator = '-';
        },
        OPERATOR_DEVISION: (state, action) => {
            if (!state.result) {
                state.result = Number(action.payload);
                state.operator = '/';
            }
            else if (!state.operator) {
                state.operator = '/';
            }
            else if (state.operator === "+") {
                state.result = Number(state.result) + Number(action.payload);
                state.operator = '/';
            }
            else if (state.operator === "-") {
                state.result = Number(state.result) - Number(action.payload);
                state.operator = '/';
            }
            else if (state.operator === "*") {
                state.result = Number(state.result) * Number(action.payload);
                state.operator = '/';
            }
            else {
                state.result = Number(state.result) / Number(action.payload);
                state.operator = '/';
            }
        },
        OPERATOR_MULTIPLICATION: (state, action) => {
            if (!state.result) {
                state.result = Number(action.payload);
                state.operator = '*';
            }
            else if (!state.operator) {
                state.operator = '*';
            }
            else if (state.operator === "+") {
                state.result = Number(state.result) + Number(action.payload);
                state.operator = '*';
            }
            else if (state.operator === "-") {
                state.result = Number(state.result) - Number(action.payload);
                state.operator = '*';
            }
            else if (state.operator === "/") {
                state.result = Number(state.result) / Number(action.payload);
                state.operator = '*';
            }
            else {
                state.result = Number(state.result) * Number(action.payload);
                state.operator = '*';
            }
        },
        OPERATOR_RESULT: (state, action) => {
            switch (state.operator) {
                case "+":
                    state.result = Number(state.result) + Number(action.payload);
                    state.operator = '';
                    break
                case "-":
                    state.result = Number(state.result) - Number(action.payload);
                    state.operator = '';
                    break
                case "/":
                    state.result = Number(state.result) / Number(action.payload);
                    state.operator = '';
                    break
                case "*":
                    state.result = Number(state.result) * Number(action.payload);
                    state.operator = '';
                    break
                default:
                    break;
            }
        },
        MEMORY_SAVE: (state, action) => {
            !state.result ? state.memory = action.payload : state.memory = state.result;
        },
        MEMORY_READ: (state) => {
            return state
        },
        MEMORY_CLEAR: (state) => {
            state.memory = ''
        }
    }
})
export default calculatorReducer.reducer
export const { CALC_OFF, OPERATOR_PLUS, OPERATOR_MINUS, OPERATOR_DEVISION, OPERATOR_MULTIPLICATION, OPERATOR_RESULT, MEMORY_SAVE, MEMORY_READ, MEMORY_CLEAR } = calculatorReducer.actions