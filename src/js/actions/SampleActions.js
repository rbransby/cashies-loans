export const SAMPLE_ACTION = 'SAMPLE_ACTION';
export const SIGN_IN = 'SIGN_IN';
export const SIGN_OUT = 'SIGN_OUT';

export const sampleAction = (value) => {
  return {
    type: SAMPLE_ACTION,
    key: value
  };
};

export const signIn = () => {
  return {
    type: SIGN_IN,
    logged: true
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
    logged: false
  };
};

