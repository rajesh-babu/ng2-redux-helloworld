import { combineReducers } from 'redux';
import { count } from './counter.reducer';

export const rootReducer = combineReducers({
  count
});
