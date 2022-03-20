export const combineReducers = (reducers) => (state, action) =>
  Object.keys(reducers).reduce(
    (acc, item) => ({ ...acc, [item]: reducers[item](acc[item], action) }),
    state
  );
