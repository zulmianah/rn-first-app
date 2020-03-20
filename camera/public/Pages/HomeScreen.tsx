// In App.js in a new project

import * as React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {styles} from '../../public/Styles/Style';

class HomeScreen extends React.Component {
  render(){
    const toNavigate = null;
    return(
      <View style={styles.view}>
        <Button title="Pick a picture" onPress={() => this.props.toNavigate.navigate('HomePickPicture')} />
        <Button title="Take a picture" onPress={() => this.props.toNavigate.navigate('HomeCamera')} />
        <Button title="View map" onPress={() => this.props.toNavigate.navigate('HomeMap')} />
        <Button title="View location" onPress={() => this.props.toNavigate.navigate('GeoLocation')} />
      </View>
    )
  }
}
export default HomeScreen;