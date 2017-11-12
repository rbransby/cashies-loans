export const SAMPLE_ACTION = 'SAMPLE_ACTION';
export const NEW_CUSTOMER = 'NEW_CUSTOMER';
export const RETURNING_CUSTOMER = 'RETURNING_CUSTOMER';

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
