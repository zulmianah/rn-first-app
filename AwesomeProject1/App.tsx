import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Hello from "./Components/Hello";

const Stack = createStackNavigator();
export default function App() {
  return (
      <Stack.Navigator>
          <Stack.Screen name="Hello" component={Hello} />
      </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
