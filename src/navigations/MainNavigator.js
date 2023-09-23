import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native"
import TabNavigator from "./TabNavigator";
import { StatusBar } from "react-native";
import CharacterDetailsScreen from "../screens/CharacterDetailsScreen";
import {createSharedElementStackNavigator} from 'react-navigation-shared-element'

const Stack = createSharedElementStackNavigator()

export const MainNavigator = () => {
  return (
    <NavigationContainer>
      <StatusBar hidden />
      <Stack.Navigator>
        <Stack.Screen
          name="Root"
          component={TabNavigator}
          options={{
            headerShown: false,
            useNativeDriver: true
          }}
        />
        <Stack.Screen
          name="CharacterDetail"
          component={CharacterDetailsScreen}
          options={{
            headerShown: false,
            useNativeDriver: true,
            cardStyleInterpolator: ({current: {progress}}) => ({
              cardStyle: progress
            })
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
