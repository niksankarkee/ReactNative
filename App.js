import React, { useState } from 'react';
import { StyleSheet, View, Button, Platform, FlatList } from 'react-native';

import AddTodo from './components/AddTodo';
import TodoItems from './components/TodoItems';

export default function App() {
  const [isAddMode, setIsAddMode] = useState(false);
  const [todoItemList, setTodoItemList] = useState([]);

  const todoListHandler = (todoItem) => {
    setTodoItemList((currentItem) => [
      ...currentItem,
      { id: Math.random().toString(), value: todoItem },
    ]);
    setIsAddMode(false);
  };
  const cancleButtonHandler = () => {
    setIsAddMode(false);
  };
  return (
    <View style={styles.screen}>
      <View style={styles.addTodoButton}>
        <Button
          title='Add Todo'
          color={Platform.OS === 'ios' ? 'white' : '#006B72'}
          onPress={() => setIsAddMode(true)}
        />
      </View>
      <AddTodo
        visible={isAddMode}
        onCancle={cancleButtonHandler}
        addTodo={todoListHandler}
      />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={todoItemList}
        renderItem={(todo) => <TodoItems title={todo.item.value} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
    backgroundColor: '#F3D8B6',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  addTodoButton: {
    color: '#ccc',
    backgroundColor: '#006B72',
    width: '80%',
    height: 50,
    borderRadius: 20,
    padding: 5,
  },
});
