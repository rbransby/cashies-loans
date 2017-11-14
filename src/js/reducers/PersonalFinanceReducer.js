import { assign } from 'lodash';

import { SAMPLE_ACTION, 
  NEW_CUSTOMER, 
  RETURNING_CUSTOMER, RETURNING_CUSTOMER_SUBMIT, 
  YOUR_LOAN_SUBMIT, 
  YOUR_DETAILS_SUBMIT, 
  MOBILE_SECURITY_SUCCESS, MOBILE_SECURITY_FAILED,
  FETCH_USER_DETAILS_SUCCESS, FETCH_USER_DETAILS_FAILED } 
  from '../actions/PersonalFinance/PersonalFinanceActions';

const initialState = {  
  isRepeatCustomer: null,
  mobilePhone: '',  
  isMobileConfirmed: false,
  loanAmount: '', 
  title:'',
  firstName:'',
  middleName:'',
  lastName:'',
  customerDOB:'',  
  emailAddress:'',
  address:'',
  isAustralianResident:false,
  consentToContact:false,     
};

const PersonalFinanceReducer = (state = initialState, action) => {
  switch(action.type) {
    case SAMPLE_ACTION:
      return assign({}, state, {
        key: action.key
      });

    case NEW_CUSTOMER:
      return assign({}, state, {        
        isRepeatCustomer: false,
        mobilePhone: -1        
      });

    case RETURNING_CUSTOMER:
      return assign({}, state, {        
        isRepeatCustomer: true        
      });

    case RETURNING_CUSTOMER_SUBMIT:
      return assign({}, state, {        
        isRepeatCustomer: true,
        mobilePhone: action.data.mobilePhone,  
        customerDOB: action.data.customerDOB,
        isMobileConfirmed: false
      });

    case YOUR_LOAN_SUBMIT:
      return assign({}, state, {        
        isRepeatCustomer: true,
        loanAmount: action.data.loanAmount,        
      });

    case YOUR_DETAILS_SUBMIT:
      return assign({}, state, action.data);

    case FETCH_USER_DETAILS_SUCCESS:
      return assign({}, state, action.data);

    case FETCH_USER_DETAILS_FAILED:
      return assign({}, state, {        
        // do something ?
      });

    case MOBILE_SECURITY_SUCCESS:
      return assign({}, state, {        
        isMobileConfirmed: true
      });

    case MOBILE_SECURITY_FAILED:
      return assign({}, state, {        
        isMobileConfirmed: false
      });

    default:
      return state;
  }
};

export default PersonalFinanceReducer;
