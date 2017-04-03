import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import { reducer as formReducer } from "redux-form";

import Counter from './CounterReducer';
import Categories from './CategoryReducer';

// main reducers
export const reducers = combineReducers({
  routing: routerReducer,
  form: formReducer,
  categories: Categories,
  counter: Counter
});
