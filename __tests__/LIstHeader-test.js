import renderer from 'react-test-renderer';
import ListHeader from '../src/components/ListHeader';
import React from 'react';
import {Provider} from 'react-redux';
import {store} from '../src/redux/configureStore';

it('renders correctly', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <ListHeader />
    </Provider>,
  );
  expect(tree.toJSON()).toMatchSnapshot();
});
