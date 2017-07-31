import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Store from '../store';

import SampleComponent from '../components/sampleComponent';

const StoreInstance = Store();

test('Test the sample component', () => {
  const component = renderer.create(
    <Provider store={StoreInstance}>
      <SampleComponent />
    </Provider>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the function
  // Sign in
  tree.children[1].props.onClick();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // Sign out
  tree.children[1].props.onClick();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

