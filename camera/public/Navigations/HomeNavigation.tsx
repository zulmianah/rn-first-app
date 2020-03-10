// In App.js in a new project

import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../../public/Pages/HomeScreen';
import HomePickPicture from '../../public/Pages/HomePickPicture';
import HomeCamera from '../../public/Pages/HomeCamera';

function CallHomeScreen({ navigation }) {
  return (
    <HomeScreen toNavigate={navigation}/>
  );
}

function CallHomePickPictureScreen({ navigation }) {
  return (
    <HomePickPicture toNavigate={navigation}/>
  );
}

function CallHomeCamera({ navigation }) {
  return (
    <HomeCamera toNavigate={navigation}/>
  );
}

const Stack = createStackNavigator();

class HomeNavigation extends React.Component {
  render(){
    return(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={CallHomeScreen} options={{ title: 'My home' }} />
          <Stack.Screen name="HomePickPicture" component={CallHomePickPictureScreen} options={{ title: 'Pick a picture' }} />
          <Stack.Screen name="HomeCamera" component={CallHomeCamera} options={{ title: 'Camera' }} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

export default HomeNavigation;