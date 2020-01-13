import React ,{ Component } from 'react';
import { StyleSheet, Text, View,KeyboardAvoidingView,FlatList,StatusBar,TouchableOpacity } from 'react-native';
import {Input,Card,Button,Icon, Item} from 'native-base'
import * as firebase from 'firebase'
import MapView from 'react-native-maps'
import { Marker } from 'react-native-maps';
import { Dropdown } from 'react-native-material-dropdown';
import { TextInput } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { SearchBar } from 'react-native-elements';
import MapViewDirections from 'react-native-maps-directions';



export default class  centro extends React.Component { 

 

  componentDidMount(){
    this.watchPassenger()


  }

  
  constructor(props) {
    super(props);
  this.state = {passengerPosition: {
    latitude: 0, 
    longitude: 0, 
    
    }, 
  region:{
    latitude: 19.33915,
    longitude:  -70.93819,
    latitudeDelta: 0.0122,
    longitudeDelta: 0.0121,
  }
 } 
}
 
watchPassenger() {  
  const positionOptions = {    
    enableHighAccuracy: true, 
   }

    navigator.geolocation.watchPosition(pos => {   
       this.updatePassengerPosition({latitude: pos.coords.latitude,
                                    longitude: pos.coords.longitude,
                                    })
                                    },
                                     positionOptions) 
                                     
                                    
                                    
                                    
                                    }

       updatePassengerPosition(passengerPosition) {  
         this.setState({passengerPosition})
         let uid = firebase.auth().currentUser.uid; 
 
        const user = firebase.database().ref('posicion/' + uid)  
        user.update({passengerPosition}) 
        console.log('prueba') 
        console.log(passengerPosition) 
      }



       

        



 
  
  render() {  
       return (      
       <MapView  initialRegion={this.state.region} style={styles.map}>
         <Marker coordinate={this.state.passengerPosition} />     
       
        </MapView>) 
         } 
    
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      margin: 20
    },
    map:{

      left:0,
      right:0,
      top:0,
      bottom:0,
      position: "absolute"

    },

    logoContainer: {
      alignItems: "center",
      marginTop: 1,
      marginBottom: 1
    },
    userDetails: {},
  
    button: {
      marginTop: 20
    },
    buttonText: {
      color: "#fff"
    },
    paragraph: {
      margin: 24,
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    image: {
      flex: 1,
      height: 300,
    },
    inputContainer: {
      flexDirection: "row",
      padding: 1,
      borderWidth: 1,
      borderRadius: 15,
      borderColor: "#2B2B52",
      color: "#fff"
    }
  });