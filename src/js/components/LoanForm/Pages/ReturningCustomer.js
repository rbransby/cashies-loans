import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { assign } from 'lodash';

import * as FormFlowActions from '../../../actions/LoanForm/FormFlowActions';

class ReturningCustomer extends Component {
  constructor(props) {
    super(props);    
  }  

  render() {    

    return (
      <div>
        <h2>Returning Customer</h2>
        
      </div>
    );
  }
}

function mapStateToProps(state/*, props*/) {
  return {
    customer: state.LoanFormReducer.customer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(assign({}, FormFlowActions), dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ReturningCustomer);
