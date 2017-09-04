import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { assign } from 'lodash';

import * as SampleActions from '../actions/SampleActions';

class SampleComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      logged: false
    };
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
    const { login } = this.props;

    return (
      <div>
        <h2>You are {`${login.logged ? 'logged in' : 'logged out'}`}</h2>
        {
          login.logged ?
          <button className="button button-secondary" onClick={this.signOut.bind(this)}>Sign out</button>
          :
          <button className="button" onClick={this.signIn.bind(this)}>Sign in</button>
        }
      </div>
    );
  }
}

function mapStateToProps(state/*, props*/) {
  return {
    login: state.SampleReducer.login
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(assign({}, SampleActions), dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SampleComponent);
