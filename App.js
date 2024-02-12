import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView } from 'react-native';
import HomeScreen from './src/Home/Index';
import AcountScreen from './acount/Index';
import ProfileScreen from './src/User/Index';
import NotifyScreen from './src/notify/Index';
import SettngScreen from './src/Setting/Index';
import AboutScreen from './src/About/Index';
import LoginScreen from './acount/Login/Index';
import RegisterScreen from './acount/Register/Index';
import Navbar from './src/Nav/Index';
import Conection from './src/Alerts/Conection';

const Stack = createStackNavigator();

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const userLoggedIn = true;
    setLoggedIn(userLoggedIn);
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator>
          {loggedIn ? (
            <>
              <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
              <Stack.Screen name="Profile" component={ProfileScreen} />
              <Stack.Screen name="Notifications" component={NotifyScreen} />
              <Stack.Screen name="Settings" component={SettngScreen} />
              <Stack.Screen name="About" component={AboutScreen} />
              <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
              <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
            </>
          ) : (
            <Stack.Screen name="Acount" component={AcountScreen} options={{ headerShown: false }} />
          )}
        </Stack.Navigator>

        {loggedIn && <Navbar />}
        <Conection />
      </NavigationContainer>
    </SafeAreaView>
  );
}
