import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import Home from './Home';
import Login from './Login';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='login' screenOptions={{headerShown: false}}>
        <Stack.Screen name= 'login' component={Login}/>
        <Stack.Screen name= 'Home' component = {Home}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
