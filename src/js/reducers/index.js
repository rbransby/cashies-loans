import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import SampleReducer from './SampleReducer';
import LoanFormReducer from './LoanFormReducer';

const rootReducer = combineReducers({
  SampleReducer,
  LoanFormReducer,
  // enhance store with routing
  routing: routerReducer
});

export default rootReducer;
