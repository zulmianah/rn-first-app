import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import {styles,camera} from '../../public/Styles/Style';

export default function HomeCamera() {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const flashModeOrder = {
    off: 'on',
    on: 'auto',
    auto: 'torch',
    torch: 'off',
  };
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);
  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  takePicture = () => {
    if (this.camera) {
      this.camera.takePictureAsync({ onPictureSaved: this.onPictureSaved });
    }
  };
  return (
    <View style={camera.view}>
      <Camera style={camera.view} type={type}>
        <View style={camera.secondView}>
          <TouchableOpacity style={camera.touchableOpacity}
          onPress={() => {
            setType(
              type === Camera.Constants.Type.back
              ? Camera.Constants.Type.front
              : Camera.Constants.Type.back
              );
          }}>
          <Text  style={camera.text}> Flip </Text>
          </TouchableOpacity>
          <TouchableOpacity style={camera.touchableOpacity}
          onPress={() => {
            setType(
              type === Camera.Constants.FlashMode.off
              ? Camera.Constants.FlashMode.off
              : Camera.Constants.FlashMode.on
              );
          }}>
          <Text  style={camera.text}> Flash </Text>
          </TouchableOpacity>
          <TouchableOpacity style={camera.touchableOpacity}
          onPress={this.takePicture}>
          <Text  style={camera.text}> Take </Text>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
    );
}