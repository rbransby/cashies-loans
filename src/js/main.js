import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { Provider } from 'react-redux';
import Store from './store';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import Home from './components/Home';
import SampleComponent from './components/SampleComponent';
import LoanForm from './components/LoanForm/LoanForm';

const StoreInstance = Store();
const history = syncHistoryWithStore(browserHistory, StoreInstance);

const root = document.getElementById('root');

if (root) {
  ReactDOM.render(
    <Provider store={StoreInstance}>
      <Router history={history}>
        <Route path="/" component={App}>
          <IndexRoute component={Home}/>
          <Route path="/sample-component" component={SampleComponent} />
          <Route path="/loans" component={LoanForm} />
        </Route>
      </Router>
    </Provider>,
    root
  );
}
