import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { assign } from 'lodash';

import GetStarted from './Pages/GetStarted';
import ReturningCustomer from './Pages/ReturningCustomer';
import YourLoan from './Pages/YourLoan';
import YourDetails from './Pages/YourDetails';
import MobileSecurity from './Pages/MobileSecurity';
import YourBank from './Pages/YourBank';
import BankCredentials from './Pages/BankCredentials';

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
    let pageComponentToRender = this._getPageToRender(customer.formPage);  
    
    let appBarTitle = this._buildAppBarTitle(customer.firstName, customer.loanAmount);

    return (
      <div>
        <AppBar title={appBarTitle}/>
        <div className="loanForm contentArea">        
          {
            React.createElement(pageComponentToRender)
          }
        </div>
      </div>
    );
  }

  _buildAppBarTitle(firstName, loanAmount)
  {
    let appBarTitle = '';
    if (firstName != '' && firstName) {
      appBarTitle = `${firstName}'s Loan Application`;
    }
    else {      
      appBarTitle = 'My Loan Application';
    }

    if (loanAmount != '' && loanAmount) {
      appBarTitle += ` ($${loanAmount})`;      
    }

    return appBarTitle;
  }

  _getPageToRender(stringPageToRender){
    switch(stringPageToRender) {
      case 'GetStarted':
        return GetStarted;
      case 'YourLoan':
        return YourLoan;
      case 'YourDetails':
        return YourDetails;
      case 'ReturningCustomer':
        return ReturningCustomer;
      case 'MobileSecurity':
        return MobileSecurity;
      case 'YourBank':
        return YourBank;
      case 'BankCredentials':
        return BankCredentials;
      default:
        return GetStarted;

    }
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
