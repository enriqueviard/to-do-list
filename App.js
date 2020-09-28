/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';
import {Provider} from 'react-redux';
import {ToDoList} from './src/components/ToDoList';
import {store} from './src/redux/configureStore';

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1}}>
        <ToDoList/>
      </SafeAreaView>
    </Provider>
  );
};

export default App;
