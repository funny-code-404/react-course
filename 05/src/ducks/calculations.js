import { createSlice } from "@reduxjs/toolkit";

export const initialCalculationsState = {
  value: "",
  storedValue: "",
  typeOfFunction: "",
};

const calculationsReducer = createSlice({
  name: "calc-calculations",
  initialState: initialCalculationsState,
  reducers: {
    ACTION_SET_VALUE: (state, action) => {
      console.log(action);

      if (
        (!state.value.includes(".") || action.payload !== ".") &&
        state.value.length < 6
      ) {
        const valueToSet = `${(state.value + action.payload).replace(
          /^0+/,
          ""
        )}`;
        console.log(valueToSet);

        state.value = valueToSet;
      }
    },

    ACTION_SET_TYPEOF_FUNCTION: (state, action) => {
      console.log(action);

      if (state.value) {
        state.typeOfFunction = action.payload;
        state.storedValue = state.value;
        state.value = "";
      }

      if (state.storedValue) {
        state.typeOfFunction = action.payload;
      }
    },

    ACTION_CLEAR_VALUE: (state) => {
      state.value = "";
      state.storedValue = "";
      state.typeOfFunction = "";
    },

    ACTION_BACK_FORWARD: (state) => {
      if (state.value !== "") {
        state.value = state.value.slice(0, state.value.length - 1);
      }
    },

    ACTION_NEGATIVE: (state) => {
      if (state.value) {
        if (state.value > 0) {
          state.value = `-${state.value}`;
        } else {
          state.value = state.value.slice(1);
        }
      } else if (state.storedValue > 0) {
        state.storedValue = `-${state.storedValue}`;
      } else {
        state.storedValue = state.storedValue.slice(1);
      }
    },

    ACTION_MATH_RESULT: (state) => {
      if (state.value && state.storedValue) {
        switch (state.typeOfFunction) {
          case "+":
            state.storedValue = `${
              Math.round(
                `${
                  (parseFloat(state.storedValue) + parseFloat(state.value)) *
                  100
                }`
              ) / 100
            }`;

            break;

          case "-":
            state.storedValue = `${
              Math.round(
                `${
                  (parseFloat(state.storedValue) - parseFloat(state.value)) *
                  1000
                }`
              ) / 1000
            }`;

            break;

          case "/":
            state.storedValue = `${
              Math.round(
                `${
                  (parseFloat(state.storedValue) / parseFloat(state.value)) *
                  1000
                }`
              ) / 1000
            }`;

            break;

          case "*":
            state.storedValue = `${
              Math.round(
                `${
                  parseFloat(state.storedValue) * parseFloat(state.value) * 1000
                }`
              ) / 1000
            }`;

            break;

          default:
            break;
        }

        state.value = "";
      }
    },
  },
});

export default calculationsReducer.reducer;

export const {
  ACTION_SET_VALUE,
  ACTION_SET_TYPEOF_FUNCTION,
  ACTION_CLEAR_VALUE,
  ACTION_BACK_FORWARD,
  ACTION_NEGATIVE,
  ACTION_MATH_RESULT,
} = calculationsReducer.actions;
