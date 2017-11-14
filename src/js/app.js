import React, { Component } from 'react';

import Header from './components/global/Header';

class App extends Component {
  render() {
    return (
      <div id="app">        
        {this.props.children}
      </div>
    );
  }
}

export default App;
