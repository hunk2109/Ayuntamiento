import React ,{ Component } from 'react';
import { StyleSheet, Text, View,KeyboardAvoidingView,FlatList,StatusBar,TouchableOpacity } from 'react-native';
import {Input,Card,Button,Icon, Item} from 'native-base'
import * as firebase from 'firebase'
import MapView from 'react-native-maps'
import { Dropdown } from 'react-native-material-dropdown';
import { TextInput } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { SearchBar } from 'react-native-elements';
import MapViewDirections from 'react-native-maps-directions';



export default class  duarte extends React.Component { 

  rutasb=()=>{
     
    
  }

  

  constructor(props) {
    super(props);
    this.state = { region:{
    latitude: 19.33915,
    longitude:  -70.93819,
    latitudeDelta: 0.0122,
    longitudeDelta: 0.0121,
  }
}
}


 

    render(){  

      let data = [{
        value: 'Lunes',
      }, {
        value: 'Martes',
      }, {
        value: 'Miercoles',

      },{
        value: 'Jueves',
      },{
        value: 'Viernes',
      },
    ];
      
      var mapStyle=[{"elementType": "geometry", "stylers": [{"color": "#242f3e"}]},{"elementType": "labels.text.fill","stylers": [{"color": "#746855"}]},{"elementType": "labels.text.stroke","stylers": [{"color": "#242f3e"}]},{"featureType": "administrative.locality","elementType": "labels.text.fill","stylers": [{"color": "#d59563"}]},{"featureType": "poi","elementType": "labels.text.fill","stylers": [{"color": "#d59563"}]},{"featureType": "poi.park","elementType": "geometry","stylers": [{"color": "#263c3f"}]},{"featureType": "poi.park","elementType": "labels.text.fill","stylers": [{"color": "#6b9a76"}]},{"featureType": "road","elementType": "geometry","stylers": [{"color": "#38414e"}]},{"featureType": "road","elementType": "geometry.stroke","stylers": [{"color": "#212a37"}]},{"featureType": "road","elementType": "labels.text.fill","stylers": [{"color": "#9ca5b3"}]},{"featureType": "road.highway","elementType": "geometry","stylers": [{"color": "#746855"}]},{"featureType": "road.highway","elementType": "geometry.stroke","stylers": [{"color": "#1f2835"}]},{"featureType": "road.highway","elementType": "labels.text.fill","stylers": [{"color": "#f3d19c"}]},{"featureType": "transit","elementType": "geometry","stylers": [{"color": "#2f3948"}]},{"featureType": "transit.station","elementType": "labels.text.fill","stylers": [{"color": "#d59563"}]},{"featureType": "water","elementType": "geometry","stylers": [{"color": "#17263c"}]},{"featureType": "water","elementType": "labels.text.fill","stylers": [{"color": "#515c6d"}]},{"featureType": "water","elementType": "labels.text.stroke","stylers": [{"color": "#17263c"}]}];

      const origin = {latitude: 19.338121, longitude: -70.937506};
      const destination = {latitude: 19.341120, longitude: -70.935640};
      const GOOGLE_MAPS_APIKEY = 'AIzaSyA5usGp5pk6nIHRlxE_2vTxRyOjLJQgC3g';
        return(  
        
          
<View style={styles.container}>

  
  <MapView  initialRegion={this.state.region} showsUserLocation={true}
	showsMyLocationButton={true} style={styles.map}
    customMapStyle={mapStyle} >
      <MapViewDirections 
      origin={origin}
      destination={destination}
      apikey={GOOGLE_MAPS_APIKEY}
      />



  </MapView>
  <View style={{width: 200, height: 50}}>
  <Dropdown style={styles.overlay}
        label='Dias'
        data={data}
      />
    </View>
  
    
  
</View>
        
   
                                        

          
       
    

      );
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