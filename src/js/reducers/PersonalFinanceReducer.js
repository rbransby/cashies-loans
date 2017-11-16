import { assign } from 'lodash';

import { SAMPLE_ACTION, 
  NEW_CUSTOMER, 
  RETURNING_CUSTOMER, RETURNING_CUSTOMER_SUBMIT, 
  YOUR_LOAN_SUBMIT, 
  YOUR_DETAILS_SUBMIT, 
  MOBILE_SECURITY_FAILED,
  FETCH_USER_DETAILS_SUCCESS, FETCH_USER_DETAILS_FAILED,
  YOUR_BANK_SUBMIT } 
  from '../actions/PersonalFinance/PersonalFinanceActions';

const initialState = {  
  isRepeatCustomer: null,
  mobilePhone: '',    
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
  bankName:'',
  formPage:'GetStarted',
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
        formPage:'YourLoan'        
      });

    case RETURNING_CUSTOMER:
      return assign({}, state, {        
        isRepeatCustomer: true,
        formPage:'ReturningCustomer'        
      });

    case RETURNING_CUSTOMER_SUBMIT:
      return assign({}, state, {        
        isRepeatCustomer: true,
        mobilePhone: action.data.mobilePhone,  
        customerDOB: action.data.customerDOB,
        isMobileConfirmed: false,
        formPage:'MobileSecurity'
      });

    case YOUR_LOAN_SUBMIT:
      return assign({}, state, {        
        isRepeatCustomer: true,
        loanAmount: action.data.loanAmount,  
        formPage:'YourDetails'      
      });

    case YOUR_DETAILS_SUBMIT:      
      return assign({}, state, { ...action.data, formPage: 'YourBank'});

    case FETCH_USER_DETAILS_SUCCESS:      
      return assign({}, state, {...action.data, isRepeatCustomer: true, formPage: 'YourDetails' });

    case FETCH_USER_DETAILS_FAILED:
      return assign({}, state, {        
        // do something ?
      });    

    case MOBILE_SECURITY_FAILED:
      return assign({}, state, {        
        formPage: 'MobileSecurity'
      });

    case YOUR_BANK_SUBMIT:
      return assign({}, state, {  
        bankName: action.data,      
        formPage: 'BankCredentials'
      });

    default:
      return state;
  }
};

export default PersonalFinanceReducer;
