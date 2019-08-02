import React from 'react';
import { StyleSheet, Text, View,KeyboardAvoidingView,FlatList,Callout,StatusBar } from 'react-native';
import {Input,Card,Button,Icon, Item} from 'native-base'
import * as firebase from 'firebase'
import MapView from 'react-native-maps'
import { Dropdown } from 'react-native-material-dropdown';
import { TextInput } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { SearchBar } from 'react-native-elements';


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
        
          
<SafeAreaView style={{flex:1}}>       
<View>
<StatusBar backgroundColor="rgba(1.0, 0, 0, 0.2)" translucent />
        <SearchBar
          ref='searchBar'
          placeholder='Find me'
          barStyle="black"
          showsCancelButtonWhileEditing={false}
        />

<MapView style={styles.map} initialRegion={this.state.region}/>


</View>
</SafeAreaView>
        
   
                                        

          
       
    

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
