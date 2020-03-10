// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Image, StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Sharing from 'expo-sharing';
import {styles} from '../../public/Styles/Style';

export default function HomePickPicture() {
    let [selectedImage, setSelectedImage] = React.useState(null);
    const toNavigate = null;
    let openImagePickerAsync = async () => {
      let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

      if (permissionResult.granted === false) {
        alert("Permission to access camera roll is required!");
        return;
      }

      let pickerResult = await ImagePicker.launchImageLibraryAsync();
      console.log(pickerResult);
      if (pickerResult.cancelled === true) {
        return;
      }

      setSelectedImage({ localUri: pickerResult.uri });
    };

  let openShareDialogAsync = async () => {
    if (!(await Sharing.isAvailableAsync())) {
      alert(`Uh oh, sharing isn't available on your platform`);
      return;
    }

    Sharing.shareAsync(selectedImage.localUri);
  };
  if (selectedImage !== null) {
    return (
      <View style={styles.view}>
        <Image source={{ uri: selectedImage.localUri }} style={styles.thumbnail} />
        <Button title="Share" onPress={openShareDialogAsync} />
      </View>
    );
  }

    return(
      <View style={styles.view}>
        <Button title="Pick a picture" onPress={openImagePickerAsync} />
      </View>
    )
}
