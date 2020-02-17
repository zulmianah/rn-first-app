import React, {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import styles from './component_style/my-style';

export default function App() {
  const[outputText, setOutputText] = useState('test')
  return (
    <View style={styles.container}>
      <Text>{outputText}</Text>
      <TextInput style={styles.mytextinput} placeholder={"Pseudo"}/>
      <TextInput style={styles.mytextinput} placeholder={"Mot de passe"}/>
      <Button title="change text" onPress={()=>setOutputText('essai')}/>
    </View>
  );
}
