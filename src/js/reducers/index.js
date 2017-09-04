import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import SampleReducer from './SampleReducer';

const rootReducer = combineReducers({
  SampleReducer,

  // enhance store with routing
  routing: routerReducer
});

export default rootReducer;
