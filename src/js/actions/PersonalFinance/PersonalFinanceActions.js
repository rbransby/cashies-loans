export const SAMPLE_ACTION = 'SAMPLE_ACTION';
export const NEW_CUSTOMER = 'NEW_CUSTOMER';
export const RETURNING_CUSTOMER = 'RETURNING_CUSTOMER';
export const RETURNING_CUSTOMER_SUBMIT = 'RETURNING_CUSTOMER_SUBMIT';
export const YOUR_LOAN_SUBMIT = 'YOUR_LOAN_SUBMIT';
export const YOUR_DETAILS_SUBMIT = 'YOUR_DETAILS_SUBMIT';
export const MOBILE_SECURITY_FAILED = 'MOBILE_SECURITY_FAILED';
export const FETCH_USER_DETAILS_SUCCESS = 'FETCH_USER_DETAILS_SUCCESS';
export const FETCH_USER_DETAILS_FAILED = 'FETCH_USER_DETAILS_FAILED';
export const YOUR_BANK_SUBMIT = 'YOUR_BANK_SUBMIT';

export const sampleAction = (value) => {
  return {
    type: SAMPLE_ACTION,
    key: value
  };
};
export const newCustomer = () => {
  return {
    type: NEW_CUSTOMER,
  };
};

export const returningCustomer = () => {
  return {
    type: RETURNING_CUSTOMER,
  };
};

export const returningCustomerSubmit = (data) => {
  return {
    type: RETURNING_CUSTOMER_SUBMIT,
    data: data
  };
};

export const yourLoanSubmit = (data) => {
  return {
    type: YOUR_LOAN_SUBMIT,
    data: data
  };
};

export const yourDetailsSubmit = (data) => {
  return {
    type: YOUR_DETAILS_SUBMIT,
    data: data
  };
};

export const submitMobileSecurityCode = (code, customerDOB, mobilePhone) => dispatch => {
  let url = '/data/PersonalFinance/mobilesecurityresponse.json';
  return fetch(url)
    .then(response => response.json())
    .then(json => {
      json.success ? dispatch(fetchUserDetails(customerDOB, mobilePhone)) : dispatch(mobileSecurityFailed());
    })
    .catch(() => dispatch(mobileSecurityFailed()));    
};

export const mobileSecurityFailed = () => {
  return {
    type: MOBILE_SECURITY_FAILED
  };  
};

export const fetchUserDetails = (customerDOB, mobilePhone) => dispatch => {
  let url = `/data/PersonalFinance/returningcustomer.json?customerDOB=${customerDOB}&mobilePhone=${mobilePhone}`;
  return fetch(url)
    .then(response => response.json())
    .then(json => {
      dispatch(fetchUserDetailsSuccess(json));
    })
    .catch(() => dispatch(fetchUserDetailsFailed()));
};

export const fetchUserDetailsSuccess = (customer) => {
  return {
    type: FETCH_USER_DETAILS_SUCCESS,
    data: customer
  };
};
  
export const fetchUserDetailsFailed = () => {
  return {
    type: FETCH_USER_DETAILS_FAILED
  };  
};

export const submitYourBank = (bankName) => {
  return {
    type: YOUR_BANK_SUBMIT,
    data: bankName
  };
};