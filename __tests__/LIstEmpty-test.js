import renderer from 'react-test-renderer';
import ListEmpty from '../src/components/ListEmpty';
import React from 'react';

it('renders correctly', () => {
  const tree = renderer.create(<ListEmpty />);
  expect(tree.toJSON()).toMatchSnapshot();
});
