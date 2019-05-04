import { combineReducers, createStore } from "redux";
import { reducerRegistry, Reducers } from "./reducerRegistry";

const initialState = {};

const combine = (reducers: Reducers) => {
  const reducerNames = Object.keys(reducers);
  Object.keys(initialState).forEach(item => {
    if (!reducerNames.includes(item)) {
      reducers[item] = (state = null) => state;
    }
  });
  return combineReducers(reducers);
};

const reducer = combine(reducerRegistry.getReducers());
export const store = createStore(reducer, initialState);

reducerRegistry.setChangeListener((reducers: Reducers) => {
  store.replaceReducer(combine(reducers));
});
