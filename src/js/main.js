import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { Provider } from 'react-redux';
import Store from './store';

const StoreInstance = Store();

const root = document.getElementById('root');

if (root) {
  ReactDOM.render(
    <Provider store={StoreInstance}>
      <App />
    </Provider>,
    root
  );
}
