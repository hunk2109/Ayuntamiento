import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator,Image } from 'react-native';

import * as firebase from 'firebase';
import { Header } from 'native-base';
 

export default class Londinscreen extends React.Component {
    static navigationOpt ={
        title: "Loading",
        header: null
    };

    componentDidMount(){
        firebase.auth().onAuthStateChanged((authenticate)=>{
            if (authenticate) {
                this.props.navigation.replace("Home")
                
            }
            else{
                this.props.navigation.replace("Login")

            }

        })
    }

 render(){
  return (
    <View style={styles.container}>
       <Image 

source={require('../assets/logo.png')}

/>  
      <ActivityIndicator  size="large"/>
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#20bf6b',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
