import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export function ToDoList() {

  return (
    <View style={styles.container}>
      <Text>render ToDoList Component</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
