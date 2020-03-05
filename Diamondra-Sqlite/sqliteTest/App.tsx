import React, {Component, Props} from 'react';
import {AsyncStorage, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default class App extends Component<Props<Object>> {
  saveData(){
    let name = "DIAMONDRA RATOVONDRAINY";
    AsyncStorage.setItem('user',name);
  }
  displayData = async ()=>{
    try{
      let user = await AsyncStorage.getItem('user');
      alert(user);
    }
    catch(error){
      alert(error)
    }
  }
  render() {
    return (
        <View style={styles.container}>
          <TouchableOpacity onPress ={this.saveData}>
            <Text>Click to save data</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress ={this.displayData}>
            <Text>Click to display data</Text>
          </TouchableOpacity>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
