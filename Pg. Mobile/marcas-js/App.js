import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import Routes from './src/routes';


export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Routes />
    </NavigationContainer>
  );
}
