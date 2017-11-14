import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import SampleReducer from './SampleReducer';
import PersonalFinanceReducer from './PersonalFinanceReducer';

const rootReducer = combineReducers({
  SampleReducer,
  PersonalFinanceReducer,  // enhance store with routing
  routing: routerReducer
});

export default rootReducer;
