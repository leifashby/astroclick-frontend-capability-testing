import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import { reducer as formReducer } from "redux-form";

import Counter from './CounterReducer';
import Categories from './CategoryReducer';
import Quakes from './QuakeReducer';

// main reducers
export const reducers = combineReducers({
  routing: routerReducer,
  form: formReducer,
  categories: Categories,
  counter: Counter,
  quakes: Quakes
});
