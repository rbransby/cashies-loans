import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { assign } from 'lodash';

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import * as PersonalFinanceActions from '../../../actions/PersonalFinance/PersonalFinanceActions';

class YourDetails extends Component {
  constructor(props) {
    super(props);  
    const { customer } = this.props;

    this.state = {
      title: customer.title,
      firstName: customer.firstName,
      middleName: customer.middleName,
      lastName: customer.lastName,
      customerDOB: customer.customerDOB,
      mobilePhone: customer.mobilePhone,
      emailAddress: customer.emailAddress,
      address: customer.address,
      isAustralianResident: customer.isAustralianResident,
      consentToContact: customer.consentToContact,
    }      
  }    

  handleInputChange(event){
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    })
  }    

  yourDetailsSubmit() {
    const { actions } = this.props;    
    actions.yourDetailsSubmit(this.state);
  }

  render() {    

    return (
      <div>
        <h2>Your Details</h2>
        <div>
          <SelectField
            floatingLabelText="Title"
            value={this.state.title}
            name="title"
            onChange={this.handleInputChange.bind(this)}
          >
            <MenuItem value={'Mr'} primaryText="Mr" />
            <MenuItem value={'Mrs'} primaryText="Mrs" />
            <MenuItem value={'Ms'} primaryText="Ms" />            
          </SelectField>
        </div>
        <div>
          <label htmlFor="your_details_firstname">Name</label>
          <input id="your_details_firstname" name="firstName" type="text" value={this.state.firstName} onChange={this.handleInputChange.bind(this)} />
          <input id="your_details_middlename" name="middleName" type="text" value={this.state.middleName} onChange={this.handleInputChange.bind(this)} />
          <input id="your_details_lastname" name="lastName" type="text" value={this.state.lastName} onChange={this.handleInputChange.bind(this)} />
        </div>
        <div>
          <label htmlFor="your_details_dob">Date of Birth</label>
          <input id="your_details_dob" name="customerDOB" type="text" value={this.state.customerDOB} onChange={this.handleInputChange.bind(this)} />
          <label htmlFor="your_details_mobile_number">Australian mobile number</label>
          <input id="your_details_mobile_number" name="mobilePhone" type="text" value={this.state.mobilePhone} onChange={this.handleInputChange.bind(this)} />
        </div>
        <div>
          <label htmlFor="your_details_emailaddress">Email Address</label>
          <input id="your_details_emailaddress" name="emailAddress" type="text" value={this.state.emailAddress} onChange={this.handleInputChange.bind(this)} />
          <label htmlFor="your_details_address">Address</label>
          <input id="your_details_address" name="address" type="text" value={this.state.mobilePhone} onChange={this.handleInputChange.bind(this)} />
        </div>
        <div>
          <button className="button" onClick={this.yourDetailsSubmit.bind(this)}>Next</button>    
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

export default connect(mapStateToProps, mapDispatchToProps)(YourDetails);
