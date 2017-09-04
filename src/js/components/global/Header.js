import React, { Component } from 'react';
import { Link } from 'react-router';

class Header extends Component {
  render() {
    return (
      <header>
        <div className="row">
          <div className="columns small-6 text-left">
            <Link to="/"><img src="/images/logo.svg" alt="Isobar" /></Link>
          </div>
          <div className="columns small-6 text-right">
            <Link to="/sample-component">Sample Component</Link>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
