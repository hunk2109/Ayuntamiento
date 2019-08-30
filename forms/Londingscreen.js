import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator,Image } from 'react-native';

import * as firebase from 'firebase';
import { Header } from 'native-base';
import * as Font from 'expo-font';
 

export default class Londinscreen extends React.Component {
    static navigationOpt ={
        title: "Loading",
        header: null
    };

    async componentWillMount() {
      await Font.loadAsync({
        Roboto: require("../assets/Roboto.ttf"),
        Roboto_medium: require("../assets/Roboto_medium.ttf")
      });
      this.setState({ loading: false });
    }

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
    backgroundColor: '#019031',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
