import { assign } from 'lodash';

import { SAMPLE_ACTION, SIGN_IN, SIGN_OUT } from '../actions/sampleActions';

const initialState = {
  login: {
    logged: false
  },
};

const SampleReducer = (state = initialState, action) => {
  switch(action.type) {
    case SAMPLE_ACTION:
      return assign({}, state, {
        key: action.key
      });

    case SIGN_IN:
    case SIGN_OUT:
      return assign({}, state, {
        login: {
          logged: action.logged
        }
      });

    default:
      return state;
  }
};

export default SampleReducer;
