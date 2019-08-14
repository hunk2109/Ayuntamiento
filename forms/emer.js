import { StyleSheet, Text, View, TouchableOpacity, Linking, Platform } from 'react-native';
import React ,{ Component } from 'react';

 
export default class  emer extends React.Component {  
  dialCall = () => {
 
    let phoneNumber = '';
 
    if (Platform.OS === 'android') {
      phoneNumber = 'tel:${8099137768}';
    }
    else {
      phoneNumber = 'telprompt:${8099137768}';
    }
 
    Linking.openURL(phoneNumber);
  };

  policia = () => {
 
    let phoneNumber = '';
 
    if (Platform.OS === 'android') {
      phoneNumber = 'tel:${8095788278}';
    }
    else {
      phoneNumber = 'telprompt:${8095788278}';
    }
 
    Linking.openURL(phoneNumber);
  };
  Hospital = () => {
 
    let phoneNumber = '';
 
    if (Platform.OS === 'android') {
      phoneNumber = 'tel:${8095788218}';
    }
    else {
      phoneNumber = 'telprompt:${8095788218}';
    }
 
    Linking.openURL(phoneNumber);
  };

  defensa = () => {
 
    let phoneNumber = '';
 
    if (Platform.OS === 'android') {
      phoneNumber = 'tel:${8097036600}';
    }
    else {
      phoneNumber = 'telprompt:${8097036600}';
    }
 
    Linking.openURL(phoneNumber);
  };
  medioanb = () => {
 
    let phoneNumber = '';
 
    if (Platform.OS === 'android') {
      phoneNumber = 'tel:${8095788366}';
    }
    else {
      phoneNumber = 'telprompt:${8095788366}';
    }
 
    Linking.openURL(phoneNumber);
  };
  piliciamun = () => {
 
    let phoneNumber = '';
 
    if (Platform.OS === 'android') {
      phoneNumber = 'tel:${8098819588}';
    }
    else {
      phoneNumber = 'telprompt:${8098819588}';
    }
 
    Linking.openURL(phoneNumber);
  };
 
  render() {
    return (
      <View style={styles.MainContainer}>
 
        <TouchableOpacity onPress={this.policia} activeOpacity={0.7} style={styles.button} >
 
          <Text style={styles.TextStyle}>Policia Nacional</Text>
 
        </TouchableOpacity>
        <TouchableOpacity onPress={this.piliciamun} activeOpacity={0.7} style={styles.button} >
 
          <Text style={styles.TextStyle}>Policia Municipal</Text>
 
        </TouchableOpacity>
<TouchableOpacity onPress={this.dialCall} activeOpacity={0.7} style={styles.button} >
 
 <Text style={styles.TextStyle}>Bomberos</Text>

</TouchableOpacity>
<TouchableOpacity onPress={this.Hospital} activeOpacity={0.7} style={styles.button} >
 
 <Text style={styles.TextStyle}>Hospital</Text>

</TouchableOpacity>
<TouchableOpacity onPress={this.defensa} activeOpacity={0.7} style={styles.button} >
 
 <Text style={styles.TextStyle}>Defensa Civil</Text>

</TouchableOpacity>
<TouchableOpacity onPress={this.medioanb} activeOpacity={0.7} style={styles.button} >
 
 <Text style={styles.TextStyle}>Medio Ambiente</Text>

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