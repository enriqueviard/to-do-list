import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch} from 'react-redux';
import {add} from '../redux/toDoSlice';

export default function ListHeader() {
  const dispatch = useDispatch();

  const onAddTask = () => {
    dispatch(
      add({
        key: Math.floor(Math.random() * 100000) + 1,
      }),
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{'Tasks'}</Text>
      <TouchableOpacity style={{position: 'absolute', right: 20}}>
        <MaterialCommunityIcons name={'plus-circle'}
                                color={'green'}
                                onPress={onAddTask}
                                size={30}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 30,
    color: '#545454',
    textAlign: 'center',
  },
});
