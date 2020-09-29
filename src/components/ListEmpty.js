import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function ListEmpty() {
  return (
    <View style={styles.container}>
      <MaterialIcons
        name={'list'}
        size={Dimensions.get('window').width * 0.6}
        color={'#dcdcdc'}
      />
      <Text style={styles.text}>No tasks found</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: '40%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#656565',
    fontSize: 22,
    fontStyle: 'italic',
  }
});
