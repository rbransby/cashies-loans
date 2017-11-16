import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { assign } from 'lodash';

import * as PersonalFinanceActions from '../../../actions/PersonalFinance/PersonalFinanceActions';

class BankCredentials extends Component {
  constructor(props) {
    super(props);  
    this.state = {credentials: {}, credentialFields: []};
  }  

  submitBankCredentials() {
    const { actions } = this.props;        
    actions.submitBankCredentials(this.state.credentials);
  } 
  
  showMoreAboutProcess() {

  }

  goBack() {

  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  componentWillMount() {
    const { customer } = this.props;
    let url = `/data/PersonalFinance/BankCredentialFields/${customer.bankName}.json`;
    return fetch(url)
      .then(response => response.json())
      .then(json => {
        this.setState({credentialFields: json.institution.credentials});
      })
      .catch(() => this.setState({fetchFailed: true}));
  }

  _renderBankCredentialField(field, index) {
    switch (field.type) {
      case 'TEXT':
        return (
          <div key={index}>
            <label htmlFor={`bank_credentials_${field.fieldID}`}>
              {field.name + (field.optional ? ' (Optional)' : '')}
            </label>                 
            <input id={`bank_credentials_${field.fieldID}`} 
                  type={field.keyboardType == 'default' || (!field.keyboardType) ? 'text' : field.keyboardType}
                  placeholder={field.description}
                  onChange={this.handleInputChange.bind(this)}
                  value={this.state[field.fieldID]}
                  />
          </div>
        );
      case 'password': 
        return (
          <div key={index}>
            <label htmlFor={`bank_credentials_${field.fieldID}`}>
              {field.name + (field.optional ? ' (Optional)' : '')}
            </label>                 
            <input id={`bank_credentials_${field.fieldID}`} 
                  type={field.keyboardType == 'default' || (!field.keyboardType) ? 'text' : field.keyboardType}
                  placeholder={field.description}
                  onChange={this.handleInputChange.bind(this)}
                  value={this.state[field.fieldID]}
                  />
          </div>
        );
      case 'captcha':
        return (
          <div key={index}>
            <label htmlFor={`bank_credentials_${field.fieldID}`}>
              {field.name + (field.optional ? ' (Optional)' : '')}
            </label>                 
            <input id={`bank_credentials_${field.fieldID}`} 
                  type={field.keyboardType == 'default' || (!field.keyboardType) ? 'text' : field.keyboardType}
                  placeholder={field.description}
                  onChange={this.handleInputChange.bind(this)}
                  value={this.state[field.fieldID]}
                  />
            <img src={field.src} />
          </div>
        );
      default: 
        return;
    }
  }

  render() {
    const { customer } = this.props;    
    return (      
      <div>
        <div className="heading">
          <h2>Your bank statement</h2>        
          <p>Good news, we support secure document uploads from {customer.bankName}. Simple enter your internet banking details below to submit the last 90 days of transactions.</p>
          <p>This allows us to process your application quickly</p>
        </div>
        <div>
          {this.state.credentialFields.map((field, index) => {
            return (
              this._renderBankCredentialField(field, index)
            );
          })
          }                  
        </div>
        <div>
          <button className="button" onClick={this.submitBankCredentials.bind(this)}>Connect</button>    
          <button className="button" onClick={this.showMoreAboutProcess.bind(this)}>More about this process</button> 
          <button className="button" onClick={this.goBack.bind(this)}>Choose a different bank</button> 
        </div>
        <div>
          
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

export default connect(mapStateToProps, mapDispatchToProps)(BankCredentials);
