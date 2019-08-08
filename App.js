import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as firebase from 'firebase'
import {createStackNavigator,createAppContainer} from 'react-navigation'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAqxrUyOWiFSO9nKdUMh-xe-JDh9NritPI",
  authDomain: "reactprueba-e767e.firebaseapp.com",
  databaseURL: "https://reactprueba-e767e.firebaseio.com",
  projectId: "reactprueba-e767e",
  storageBucket: "",
  messagingSenderId: "445878659414",
  appId: "1:445878659414:web:fbcb806bebc25363"
};

firebase.initializeApp(firebaseConfig)

import Londingscreen from './forms/Londingscreen'
import Home from './forms/home'
import Login from './forms/Login'
import singup from './forms/singup'
import denuncias from './forms/denuncias';



const Mainnavigator = createStackNavigator({
  londing:{screen: Londingscreen},
  Login:{screen: Login},
  Home:{screen: Home},
  Singup: {screen: singup},
  Denucias: {screen:denuncias}
},
{
  initialRouteName: "londing"
}
)

const App = createAppContainer(Mainnavigator)
export default App;
