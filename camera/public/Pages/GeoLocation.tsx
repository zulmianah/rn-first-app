import React, { Component } from 'react';
import { Platform, Text, View, StyleSheet, Dimensions } from 'react-native';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';

export default class GeoLocation extends Component {

  constructor(props) {
    super(props);
    this.state = {
      location: null,
      errorMessage: null,
    };
    if (Platform.OS === 'android' && !Constants.isDevice) {
      this.setState({
        errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
      });
    } else {
      this._getLocationAsync();
    }
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }

    let location = await Location.getCurrentPositionAsync({});
    this.setState({ location });
  };
componentDidMount() {
    let text = 'Waiting..';
    let huhu = null;
    if (this.state.errorMessage) {
      text = this.state.errorMessage;
    } else if (this.state.location) {
      huhu = (this.state.location.coords.latitude)
      text = JSON.stringify(this.state.location.coords.latitude);
    }
}
  render() {

    return (
      <View style={styles.container}>
      <MapView style={styles.mapStyle} 
        initialRegion={{
          latitude: this.state.location.coords.latitude,
          longitude: 47.522004,
          latitudeDelta: 0.0001,
          longitudeDelta: 0.0001,
        }}
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    textAlign: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});