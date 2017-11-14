import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { assign } from 'lodash';

import GetStarted from './Pages/GetStarted';
import ReturningCustomer from './Pages/ReturningCustomer';
import YourLoan from './Pages/YourLoan';
import YourDetails from './Pages/YourDetails';
import MobileSecurity from './Pages/MobileSecurity';

import AppBar from 'material-ui/AppBar';

import * as PersonalFinanceActions from '../../actions/PersonalFinance/PersonalFinanceActions';

class PersonalFinanceForm extends Component {
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

    if (customer.isRepeatCustomer === null && customer.mobilePhone === ''){
      pageComponentToRender = GetStarted;
    }
    else if (customer.loanAmount != '') {
      pageComponentToRender = YourDetails;
    }
    else if (customer.mobilePhone != '' && !customer.isMobileConfirmed) {
      pageComponentToRender = MobileSecurity;
    }
    else if (customer.mobilePhone != '' && customer.isMobileConfirmed) {
      pageComponentToRender = YourLoan;
    }
    else if (customer.isRepeatCustomer) {
      pageComponentToRender = ReturningCustomer;
    }
    else if (!customer.isRepeatCustomer) {
      pageComponentToRender = YourLoan;
    }

    return (
      <div>
        <AppBar title="My Loan Application"/>
        <div className="loanForm contentArea">        
          {
            React.createElement(pageComponentToRender)
          }
        </div>
      </div>
    );
  }
}

function mapStateToProps(state/*, props*/) {
  return {
    customer: state.PersonalFinanceReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(assign({}, PersonalFinanceActions), dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PersonalFinanceForm);
