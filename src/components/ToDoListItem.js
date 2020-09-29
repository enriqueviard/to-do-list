import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

export default function TodoListItem({item, onPress}) {

  return (
    <TouchableOpacity style={styles.container(item.done)}
                      onPress={onPress}>
      <Text style={styles.title}>{item.name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: (done) => ({
    flex: 1,
    padding: 20,
    marginVertical: 5,
    marginHorizontal: 20,
    backgroundColor: '#fff',
    borderLeftColor: done ? 'green' : 'grey',
    borderLeftWidth: 4,
    shadowOffset: {width: 2, height: 2},
    shadowColor: '#131313',
    shadowOpacity: 0.1,
    shadowRadius: 1,
  }),
  title: {
    color: '#545454',
  }
});
