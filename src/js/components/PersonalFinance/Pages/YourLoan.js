import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { assign } from 'lodash';

import Slider from 'material-ui/Slider';

import * as PersonalFinanceActions from '../../../actions/PersonalFinance/PersonalFinanceActions';

class YourLoan extends Component {
  constructor(props) {
    super(props);  
    const { customer } = this.props;
    this.state = customer;

    this.state.loanAmount = customer.loanAmount == '' ? 1500 : customer.loanAmount;
  }  

  handleSliderChange(e, newValue) {    
    this.setState({loanAmount: newValue});
  }

  yourLoanSubmit() {
    const { actions } = this.props;    
    actions.yourLoanSubmit({loanAmount: this.state.loanAmount});
  }

  render() {    

    return (
      <div>
        <div>
          <h2>Your Loan</h2>
          <p>How much money are you requesting and what will you use it for?</p>
        </div>
        <div> 
          <p>${this.state.loanAmount}</p>
          <Slider min={400} max={5000} value={this.state.loanAmount} onChange={this.handleSliderChange.bind(this)} />          
        </div>
        <div> 
          <div>
            <span>Excl Establishment Fee</span>
          </div>
          <div>
            <span>Loan Amount</span>
          </div>
          <div>
            <span>Weekly Repayment</span>
          </div>
          <div>
            <span>Totel over 9 months</span>
          </div>
        </div>
        <div> 
          <h2>What will you use it for?</h2>
          {/* What */}
        </div>
        <div>
          <button className="button" onClick={this.yourLoanSubmit.bind(this)}>Next</button>    
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

export default connect(mapStateToProps, mapDispatchToProps)(YourLoan);
