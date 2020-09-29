import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useDispatch} from 'react-redux';
import {edit, remove, toggle} from '../redux/toDoSlice';

export default function TodoListItem({item}) {
  const dispatch = useDispatch();
  const [editing, setEditing] = useState(!item.name);
  const [name, setName] = useState('');

  const onPress = () => {
    dispatch(toggle(item.key));
  };

  const onRemove = () => {
    dispatch(remove(item.key));
  };

  const onEdit = () => {
    if (editing) {
      dispatch(edit({key: item.key, name: name}));
      setEditing(false);
    } else {
      setName(item.name);
      setEditing(true);
    }
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <MaterialIcons
        name={item.done ? 'check-circle-outline' : 'radio-button-unchecked'}
        size={20}
        style={{paddingHorizontal: 10}}
        color={item.done ? 'green' : '#545454'}
      />
      {editing ?
        <TextInput
          value={name}
          multiline
          onChangeText={setName}
          style={styles.input}/> :
        <Text style={styles.title(item.done)}>{item.name}</Text>
      }
      <TouchableOpacity onPress={onEdit}>
        <MaterialIcons
          name={editing ? 'save' : 'edit'}
          style={{paddingHorizontal: 8}}
          color={'#333ac2'}
          size={20}/>
      </TouchableOpacity>
      <TouchableOpacity onPress={onRemove}>
        <MaterialIcons
          name={'delete'}
          style={{paddingHorizontal: 8}}
          color={'#ff3333'}
          size={20}/>
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 20,
    alignItems: 'center',
    marginVertical: 5,
    marginHorizontal: 20,
    backgroundColor: '#fff',
    shadowOffset: {width: 2, height: 2},
    shadowColor: '#131313',
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  title: (done) => ({
    color: done ? 'green' : '#545454',
    flex: 1,
  }),
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#a8a8a8',
    borderRadius: 5,
    padding: 10,
  },
});
