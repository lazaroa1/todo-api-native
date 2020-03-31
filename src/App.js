import React from 'react';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import TodoList from './TodoList';
import store from './store';

// import { Container } from './styles';

export default function App() {
  return (
    <Provider store={store}>
      <TodoList />
    </Provider>
  );
}
