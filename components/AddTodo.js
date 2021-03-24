import React, { useState } from 'react';
import { View, Modal, TextInput, StyleSheet, Text, Button } from 'react-native';

const AddTodo = (props) => {
  const [todoItem, setTodoItem] = useState('');

  const todoItemHandler = (todoTxt) => {
    setTodoItem(todoTxt);
  };

  const todoButtonHandler = () => {
    props.addTodo(todoItem);
    setTodoItem('');
  };
  return (
    <Modal visible={props.visible} animationType='slide'>
      <View style={styles.inputTextFrame}>
        <View>
          <TextInput
            value={todoItem}
            onChangeText={todoItemHandler}
            style={styles.addTextStyle}
            placeholder='Add Todo Item'
          />
        </View>
        <View style={styles.buttonStyleMain}>
          <Button title='Add Todo' onPress={todoButtonHandler} />
          <Button title='CANCLE!' color='red' onPress={props.onCancle} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputTextFrame: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addTextStyle: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    width: 300,
  },
  buttonStyleMain: {
    flexDirection: 'row',
  },
});

export default AddTodo;
