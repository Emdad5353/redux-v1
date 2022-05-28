const { createStore, applyMiddleware } = require("redux");
const { default: logger } = require("redux-logger");

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";
const INCREMENT_BY_VALUE = "INCREMENT_BY_VALUE";

const initialCounterState = {
  count: 0,
};

const incrementCounter = () => {
  return {
    type: INCREMENT,
  };
};
const decrementCounter = () => {
  return {
    type: DECREMENT,
  };
};
const resetCounter = () => {
  return {
    type: RESET,
  };
};

const incrementCounterByValue = (value) => {
    return {
      type: INCREMENT_BY_VALUE,
      payload: value,
    };
  };

const counterReducer = (state = initialCounterState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    case RESET:
      return {
        ...state,
        count: 0,
      };

    case INCREMENT_BY_VALUE:
        return {
          ...state,
          count: state.count + action.payload,
    };

    default:
      state;
  }
};

const store = createStore(counterReducer, applyMiddleware(logger));

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementCounter());
store.dispatch(incrementCounter());
store.dispatch(decrementCounter());
store.dispatch(resetCounter());
store.dispatch(incrementCounterByValue(5));