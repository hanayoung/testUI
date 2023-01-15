import React from 'react';
import {LinearGradient} from 'expo-linear-gradient'
import MainNavigator from './navigation/Navigator';
import {LogBox} from 'react-native'

export default function App() {
  LogBox.ignoreAllLogs();
  console.disableYellowBox = true;
  return (
      <LinearGradient colors = {['#353544', '#1B1B23']} style = {{flex: 1}}>
        <MainNavigator/>
      </LinearGradient>
  );
}

