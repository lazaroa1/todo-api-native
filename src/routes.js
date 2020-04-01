import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import Home from './pages/home';
import Todos from './pages/Todos/index';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {backgroundColor: '#077ed8'},
        }}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerTintColor: '#fff', headerTitleAlign: 'center'}}
        />
        <Stack.Screen
          name="Todos"
          component={Todos}
          options={{headerTintColor: '#fff', headerTitleAlign: 'center'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
