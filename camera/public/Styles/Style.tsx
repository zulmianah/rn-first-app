import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  view : {
    flex: 1, 
    alignItems: 'center',
    justifyContent: 'center'
  },
  thumbnail: {
    width: 300,
    height: 300,
    resizeMode: "contain"
  }
});

const camera = StyleSheet.create({
  view : {
    flex: 1, 
  },
  secondView : {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
  },
  touchableOpacity : {
      flex: 0.1,
      alignSelf: 'flex-end',
      alignItems: 'center',
  },
  text : {
    fontSize: 12, 
    marginBottom: 30, 
    color: 'white'
  },
});

export { styles,camera }   