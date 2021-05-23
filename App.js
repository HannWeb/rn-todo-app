import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import TodoItem from './components/TodoItem'

//components
import Header from './components/Header';
import AddTodo from './components/AddTodo';

export default function App() {

  const [todos, setTodos] = useState([
    { text: 'buy coffee', key: '1' },
    { text: 'create an app', key: '2' },
    { text: 'play on the switch', key: '3' },
  ]);

  const onPressItem = (key) => {
    setTodos((itemsList) => {
      return itemsList.filter(todo => todo.key !== key)
    })
  }

  const addTodo = (text) => {
    setTodos((todoList) => {
      return [{ text, key: Math.random().toString() }, ...todoList]
    })
  }

  return (
    <View style={styles.container}>
      <Header />
      <StatusBar style="auto" />
      <View style={styles.list}>
        <AddTodo onSubmit={addTodo} />
        <FlatList
          data={todos}
          renderItem={({ item }) => (
            <TodoItem item={item} onPress={onPressItem} />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  list: {
    flex: 1,
    backgroundColor: "#fff",
    marginHorizontal: 30,
  }
});


//Blue: #00bbf9
//purple: #9b5de5
//pink: #f15bb5
//Yellow: #fee440
//Aqua: 00f5d4