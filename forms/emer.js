import { StyleSheet, Text, View, TouchableOpacity, Linking, Platform } from 'react-native';
import React ,{ Component } from 'react';

 
export default class  emer extends React.Component {  
  dialCall = () => {
 
    let phoneNumber = '';
 
    if (Platform.OS === 'android') {
      phoneNumber = 'tel:${1234567890}';
    }
    else {
      phoneNumber = 'telprompt:${1234567890}';
    }
 
    Linking.openURL(phoneNumber);
  };
 
  render() {
    return (
      <View style={styles.MainContainer}>
 
        <TouchableOpacity onPress={this.dialCall} activeOpacity={0.7} style={styles.button} >
 
          <Text style={styles.TextStyle}>Policia</Text>
 
        </TouchableOpacity>
        <TouchableOpacity onPress={this.dialCall} activeOpacity={0.7} style={styles.button} >
 
 <Text style={styles.TextStyle}>Bomberos</Text>

</TouchableOpacity>
 
      </View>
 
    );
  }
}
 
const styles = StyleSheet.create({
 
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
 
    width: '80%',
    padding: 6,
    backgroundColor: '#019031',
    borderRadius: 7,
    padding:20,
    marginTop:20
  },
 
  TextStyle: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  }
 
});