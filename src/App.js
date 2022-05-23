import React from 'react';
import {View, Text }from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './Screens/SplashScreen';
import HomeScreen from './Screens/HomeScreen';

const App = () => {

    const Stack = createNativeStackNavigator();
   return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
            name="Splash"
            component={SplashScreen}
            options={{headerShown: false}}
            />
            <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: 'Welcome' }}
            />

      </Stack.Navigator>
    </NavigationContainer>
  );
};



export default App;