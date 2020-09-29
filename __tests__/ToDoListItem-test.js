import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import {store} from '../src/redux/configureStore';
import React from 'react';
import TodoListItem from '../src/components/ToDoListItem';
import {TextInput} from 'react-native';
import {fireEvent} from 'react-native-testing-library';

describe('ToDoListItem', () => {
  let tree;

  beforeEach(() => {
    tree = renderer.create(
      <Provider store={store}>
        <TodoListItem item={{
          key: 1,
        }}/>
      </Provider>,
    );
  });


  it('renders correctly', () => {
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('should change the task name', () => {
    const instance = tree.root;
    const textInput = instance.findByType(TextInput);
    fireEvent.changeText(textInput, 'new task');
    expect(textInput.props.value).toEqual('new task');
  });

});

