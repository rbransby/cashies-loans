import React, { Component } from 'react';

import SampleComponent from './components/sampleComponent';

class App extends Component {
  render() {
    return (
      <div id="app">
        <h1>Hello World!</h1>
        <SampleComponent />
      </div>
    );
  }
}

export default App;
