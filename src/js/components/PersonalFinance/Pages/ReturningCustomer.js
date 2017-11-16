import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { assign } from 'lodash';

import * as PersonalFinanceActions from '../../../actions/PersonalFinance/PersonalFinanceActions';

class ReturningCustomer extends Component {
  constructor(props) {
    super(props);  
    this.state = {customerDOB: '', mobilePhone:''};
  }  

  returningCustomerSubmit() {
    const { actions } = this.props;        
    actions.returningCustomerSubmit({customerDOB: this.state.customerDOB, mobilePhone: this.state.mobilePhone});
  }

  newCustomer() {
    const { actions } = this.props;    
    actions.newCustomer();
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  render() {    
    return (
      <div>
        <div className="heading">
          <h2>Returning Customer</h2>        
          <p>Have you completed an online application with us before?</p>
        </div>
        <div>
          <div>
            <label htmlFor="returning_customer_dob">Date of Birth</label>
            <input id="returning_customer_dob" name="customerDOB" type="text" value={this.state.customerDOB} onChange={this.handleInputChange.bind(this)} />
          </div>
          <div>
            <label htmlFor="returning_customer_mobile_number">Australian mobile number</label>
            <input id="returning_customer_mobile_number" name="mobilePhone" type="text" value={this.state.mobilePhone} onChange={this.handleInputChange.bind(this)} />
          </div>          
        </div>
        <div>
          <button className="button" onClick={this.returningCustomerSubmit.bind(this)}>Submit</button>    
        </div>
        <div>
          <a onClick={this.newCustomer.bind(this)}>New customer? Start here.</a>
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

export default connect(mapStateToProps, mapDispatchToProps)(ReturningCustomer);
