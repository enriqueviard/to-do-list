import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useDispatch} from 'react-redux';
import {edit, remove} from '../redux/toDoSlice';

export default function TodoListItem({item, onPress}) {

  const dispatch = useDispatch();

  const onItemPress = () => {
    dispatch(edit(item.key));
  };

  const onRemove = () => {
    dispatch(remove(item.key));
  };

  return (
    <View style={styles.container(item.done)}>
      <TouchableOpacity onPress={onItemPress}>
        <MaterialIcons name={item.done ? 'check-circle-outline' : 'radio-button-unchecked'}
                       size={20}
                       style={{paddingHorizontal: 10}}
                       color={'#545454'}
        />
      </TouchableOpacity>
      <Text style={styles.title}
      >{item.name}</Text>
      <TouchableOpacity onPress={onRemove}>
        <MaterialIcons name={'delete'}
                       style={{paddingHorizontal: 10}}
                       color={'#ff3333'}
                       size={20}/>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: (done) => ({
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 20,
    alignItems: 'center',
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
    flex: 1,
  },
});
