import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import {store} from '../src/redux/configureStore';
import React from 'react';
import ToDoList from '../src/components/ToDoList';

describe('ToDoList', () => {
  let tree;

  beforeEach(() => {
    tree = renderer.create(
      <Provider store={store}>
        <ToDoList />
      </Provider>,
    );
  });


  it('renders correctly', () => {
    expect(tree.toJSON()).toMatchSnapshot();
  });

});
