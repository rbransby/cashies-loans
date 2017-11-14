import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { assign } from 'lodash';

import * as PersonalFinanceActions from '../../../actions/PersonalFinance/PersonalFinanceActions';

class MobileSecurity extends Component {
  constructor(props) {
    super(props);  
    this.state = {confirmationCode: ''};
  }  

  submitMobileSecurityCode() {
    const { actions } = this.props;    
    actions.submitMobileSecurityCode({confirmationCode: this.state.confirmationCode});
  }

  havingTrouble() {
    const { actions } = this.props;    
    actions.mobileSecuritySuccess();
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    })
    
  }

  render() {    
    return (
      <div>
        <div className="heading">
          <h2>Mobile Security</h2>        
          <p>So that we can secure your account to you alone, please confirm the security code sent to your mobile phone number</p>
        </div>
        <div>
          <div>
            <label htmlFor="mobile_security_confirmation_code">Confirmation Code</label>
            <input id="mobile_security_confirmation_code" name="confirmationCode" type="text" value={this.state.confirmationCode} onChange={this.handleInputChange.bind(this)} />
          </div>                   
        </div>
        <div>
          <button className="button" onClick={this.submitMobileSecurityCode.bind(this)}>Submit</button>    
        </div>
        <div>
          <a onClick={this.havingTrouble.bind(this)}>Having trouble?</a>
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

export default connect(mapStateToProps, mapDispatchToProps)(MobileSecurity);
