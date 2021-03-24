import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TodoItems = ({ title }) => {
  return (
    <View style={styles.todoItem}>
      <Text>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  todoItem: {
    fontSize: 18,
    margin: 10,
    backgroundColor: '#C0c0c0',
  },
});

export default TodoItems;
