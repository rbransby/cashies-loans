import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { assign } from 'lodash';

import * as PersonalFinanceActions from '../../../actions/PersonalFinance/PersonalFinanceActions';

class YourBank extends Component {
  constructor(props) {
    super(props);  
    this.state = {bankName: '', banks:[], fetchFailed: false};
  }  

  componentWillMount() {
    let url = '/data/PersonalFinance/banks.json';
    return fetch(url)
      .then(response => response.json())
      .then(json => {
        this.setState({banks: json});
      })
      .catch(() => this.setState({fetchFailed: true}));
  }  

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });    
  }

  handleBankImageClick(event) {
    const target = event.target;
    const bankName = target.dataset['bankName'];
    const { actions } = this.props;
    actions.submitYourBank(bankName);  
  }

  render() {    
    return (
      <div>
        <div className="heading">
          <h2>Your Bank</h2>        
          <p>Connect to your bank.</p>
        </div>
        <div>
          <div>
            <label htmlFor="your_bank_search_text">Search below</label>
            <input id="your_bank_search_text" name="bankName" type="text" value={this.state.bankName} onChange={this.handleInputChange.bind(this)} />
          </div>                   
        </div>   
        <div className="cards">          
          {
            this.state.banks.map((bank, index) => {
              return (                
                <img key={index} data-bank-name={bank.name} onClick={this.handleBankImageClick.bind(this)} width="100px" height="100px" src={bank.logo} alt={bank.display_name} />                  
              );
            })
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

export default connect(mapStateToProps, mapDispatchToProps)(YourBank);
