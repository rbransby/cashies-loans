import React from 'react';
import { storiesOf } from '@storybook/react';
import SampleComponent from '../components/SampleComponent';
import { Provider } from 'react-redux';
import Store from '../store';

const StoreInstance = Store();

storiesOf('SampleComponent', module).add('Default', () => (
  <Provider store={StoreInstance}>
    <SampleComponent />
  </Provider>
));
