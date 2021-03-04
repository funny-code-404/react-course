export const initialCounterState = {
  counter: 0,
};

export const counter = (prevState = initialCounterState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...prevState,
        counter: prevState.counter + action.payload,
      };
    default:
      return {
        ...prevState,
      };
  }
};
