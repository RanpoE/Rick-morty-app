import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MainNavigator } from './src/navigations/MainNavigator';

export default function App() {
  return (
    <MainNavigator />
  );
}
