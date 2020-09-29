import React from 'react';
import {StyleSheet, Text, View} from 'react-native';


export default function ListHeader() {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{'Tasks'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 30,
    color: '#545454',
    textAlign: 'center',
  }
});
