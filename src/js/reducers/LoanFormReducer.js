import { assign } from 'lodash';

import { SAMPLE_ACTION, NEW_CUSTOMER, RETURNING_CUSTOMER } from '../actions/LoanForm/FormFlowActions';

const initialState = {
  login: {
    logged: false
  },
  customer: {
    isRepeatCustomer: null,
    mobilePhone: -1,    
  }
};

const LoanFormReducer = (state = initialState, action) => {
  switch(action.type) {
    case SAMPLE_ACTION:
      return assign({}, state, {
        key: action.key
      });

    case NEW_CUSTOMER:
      return assign({}, state, {
        customer: {
          isRepeatCustomer: false
        }
      });
    case RETURNING_CUSTOMER:
      return assign({}, state, {
        customer: {
          isRepeatCustomer: true
        }
      });

    default:
      return state;
  }
};

export default LoanFormReducer;
