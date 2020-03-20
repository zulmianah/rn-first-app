import React from 'react';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions,Alert,TouchableOpacity } from 'react-native';

export default class HomeMap extends React.Component {
  longitude:number
  latitude:number
  constructor(props) {
    super(props)
  }
  state = {
    location: null,
  };

  componentDidMount() {
    this.findCoordinates()
  }

  findCoordinates = () => {
      navigator.geolocation.getCurrentPosition(
        position => {
          this.longitude = position.coords.longitude;
          this.latitude = position.coords.latitude;
          this.setState({ position });
        },
        error => Alert.alert(error.message),
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
      );
    };

  render() {
    return (
      <View style={styles.container}>
      <MapView style={styles.mapStyle}
        initialRegion={{
          latitude: this.latitude,
          longitude: this.longitude,
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
