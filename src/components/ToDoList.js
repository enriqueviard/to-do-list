import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';
import ToDoListItem from './ToDoListItem';
import ListHeader from './ListHeader';
import ListEmpty from './ListEmpty';

export default function ToDoList() {
  const data = useSelector((state) => state.items);

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => String(item.key)}
        renderItem={({item}) => <ToDoListItem item={item}/>
        }
        ListHeaderComponent={ListHeader}
        ListEmptyComponent={ListEmpty}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eeeeee',
  },
});
