import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { assign } from 'lodash';

import * as PersonalFinanceActions from '../../../actions/PersonalFinance/PersonalFinanceActions';

class GetStarted extends Component {
  constructor(props) {
    super(props);    
  }

  newCustomer() {
    const { actions } = this.props;

    actions.newCustomer();
  }

  returningCustomer() {
    const { actions } = this.props;

    actions.returningCustomer();
  }

  render() {    
    return (
      <div>
        <h2>Let's get started!</h2>    
          <button className="button button-secondary" onClick={this.newCustomer.bind(this)}>New Customer</button>          
          <button className="button" onClick={this.returningCustomer.bind(this)}>Returning Customer</button>        
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

export default connect(mapStateToProps, mapDispatchToProps)(GetStarted);
