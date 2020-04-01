import React from 'react';
import {Provider} from 'react-redux';
import store from './store';
import Routes from './routes';
import {setNavigator} from './service/Navigation';
import {NavigationContainer} from '@react-navigation/native';

// import { Container } from './styles';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer />
      <Routes ref={setNavigator} />
    </Provider>
  );
}
