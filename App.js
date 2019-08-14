import React,{Component} from 'react';
import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native';
import * as firebase from 'firebase'
import {createStackNavigator,createAppContainer,createDrawerNavigator} from 'react-navigation'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAqxrUyOWiFSO9nKdUMh-xe-JDh9NritPI",
  authDomain: "reactprueba-e767e.firebaseapp.com",
  databaseURL: "https://reactprueba-e767e.firebaseio.com",
  projectId: "reactprueba-e767e",
  storageBucket: "reactprueba-e767e.appspot.com",
  messagingSenderId: "445878659414",
  appId: "1:445878659414:web:fbcb806bebc25363"
};

firebase.initializeApp(firebaseConfig)

import Londingscreen from './forms/Londingscreen'
import Home from './forms/home'
import Login from './forms/Login'
import singup from './forms/singup'
import denuncias from './forms/denuncias';


class NavigationDrawerStructure extends Component {
  //Structure for the navigatin Drawer
  toggleDrawer = () => {
    //Props to open/close the drawer
    this.props.navigationProps.toggleDrawer();
  };
  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          {/*Donute Button Image */}
          <Image
            source={require('./assets/drawer.png')}
            style={{ width: 25, height: 25, marginLeft: 5 }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
const Mainnavigator = createStackNavigator({
  londing:{screen: Londingscreen},
  Login:{screen: Login},
  Home:{screen: Home,
    navigationOptions: ({ navigation }) => ({
      title: 'Inicio',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#019031',
      },
      headerTintColor: '#fff',
    }),},
  Singup: {screen: singup},
  Denucias: {screen:denuncias},
},
{
  initialRouteName: "londing"
}
)

const App = createAppContainer(Mainnavigator)
export default App;
