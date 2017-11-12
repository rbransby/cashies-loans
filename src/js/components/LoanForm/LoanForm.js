import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { assign } from 'lodash';

import GetStarted from './Pages/GetStarted';
import ReturningCustomer from './Pages/ReturningCustomer';
import YourLoan from './Pages/YourLoan';

import * as FormFlowActions from '../../actions/LoanForm/FormFlowActions';

class LoanForm extends Component {
  constructor(props) {
    super(props);    
  }

  signIn() {
    const { actions } = this.props;

    actions.signIn();
  }

  signOut() {
    const { actions } = this.props;

    actions.signOut();
  }

  render() {
    const { customer } = this.props;
    let pageComponentToRender;

    if (customer.isRepeatCustomer === null && customer.mobilePhone === -1){
      pageComponentToRender = GetStarted;
    }
    else if (customer.isRepeatCustomer) {
      pageComponentToRender = ReturningCustomer;
    }
    else if (!customer.isRepeatCustomer) {
      pageComponentToRender = YourLoan;
    }

    return (
      <div className="loanForm">        
        {
          React.createElement(pageComponentToRender)
        }
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

export default connect(mapStateToProps, mapDispatchToProps)(LoanForm);
