import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/Home/Index';
import ProfileScreen from './src/User/Index';
import NotifyScreen from './src/notify/Index';
import SettngScreen from './src/Setting/Index';
import AboutScreen from './src/About/Index';
import Navbar from './src/Nav/Index';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Notifications" component={NotifyScreen} />
        <Stack.Screen name="Settings" component={SettngScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>
      <Navbar /> 
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
