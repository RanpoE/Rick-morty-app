import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native"
import TabNavigator from "./TabNavigator";
import { StatusBar } from "react-native";
import CharacterDetailsScreen from "../screens/CharacterDetailsScreen";

const Stack = createStackNavigator()

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
          }}
        />
        <Stack.Screen
          name="CharacterDetail"
          component={CharacterDetailsScreen}
          options={{
            headerShown: true,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
