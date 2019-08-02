import React ,{ Component } from 'react';
import { StyleSheet, Text, View,KeyboardAvoidingView,FlatList,StatusBar } from 'react-native';
import {Input,Card,Button,Icon, Item} from 'native-base'
import * as firebase from 'firebase'
import MapView from 'react-native-maps'
import { Dropdown } from 'react-native-material-dropdown';
import { TextInput } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { SearchBar } from 'react-native-elements';
import Callout from 'react-callout-component';


export default class  rutas extends React.Component { 

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

     
        return(  
        
          
<View>
  <MapView
    initialRegion={this.state.region}
    
  />
  <Callout>
    <View style={styles.calloutView} >
      <TextInput style={styles.calloutSearch}
        placeholder={"Search"}
      />
    </View>
  </Callout>
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
