import { combineReducers } from 'redux';
import itemReducer from './items';

const rootReducer = combineReducers({
  items: itemReducer,
});

export default rootReducer;