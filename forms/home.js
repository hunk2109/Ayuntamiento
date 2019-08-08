import React from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity,Alert,colors } from 'react-native';
import {Button} from 'native-base';
import * as firebase from 'firebase';
import {Permissions,Notifications} from 'expo';




import {
  createDrawerNavigator,
  createAppContainer,
  DrawerItems,
  SafeAreaView,NavigationAction,  createStackNavigator,NavigationDrawerStructure
} from 'react-navigation';

import { Ionicons } from '@expo/vector-icons';
import denuncias from './denuncias';
import rutas from './rutas';
import emer from './emer'



class Home extends React.Component {

  

registerforpush = async()=>{
  const {status} = await Permissions.getAsync(Permissions.NOTIFICATIONS);
  let finalstatus = status;
  
  if (status !=="granted") {
    const{status}=await Permissions.askAsync(Permissions.NOTIFICATIONS);
    finalstatus = status;

    
  }
  if (finalstatus !=="granted") 
  {
    return;
  }

  let tocken = await Notifications.getExpoPushTokenAsync();
  console.log(tocken);


  let uid = firebase.auth().currentUser.uid; 
  let una = firebase.auth().currentUser.displayName; 
  firebase.database().ref("user").child(uid).update({
    expoPushToken: tocken,
    nombre:una
    

  });
}

  constructor(props){
    super(props)
    this.state = {
      name:"",
      email:"",
      message:""

    }

    
  }
  static navigationOptions = {
    title: 'Inicio',
    drawerIcon: ({ focused }) => (
      <Ionicons name="md-home" size={24} color={focused ? 'blue' : 'black'} />
    ),
  };


  componentDidMount(){
  
    firebase.auth().onAuthStateChanged(authenticate =>{
      if (authenticate) {
        this.setState({
          email: authenticate.email,
          name: authenticate.displayName
        })
      }
      else{
        this.props.navigation.replace("Login")
        
      }
    });

    this.registerforpush();




  
  }
  
  Singoutuser=()=>{
    firebase
    .auth()
    .signOut()
    .then(()=> {console.log("Cerrado");})
    .catch(error => alert(error.message))
  }

  

  render() {
    return (
      <View style={styles.container}>
      <View style={styles.logoContainer}>
     <Image 
     source={require('../assets/logo.png')}
     />
     <Text>ayuntamineto</Text>

     </View>
     <View style={styles.paragraph}>

       <Text>hola: {this.state.name}</Text>
       <Text>prueba: {this.state.email}</Text>

     </View>
     
     

    </View>
  );

  }
}

class Profile extends React.Component {
  static navigationOptions = {
    title: 'Noticias',
    drawerIcon: ({ focused }) => (
      <Ionicons name="md-person" size={24} color={focused ? 'blue' : 'black'} />
    ),
  };

  render() {
    return (
      <View style={styles.container}>
        <Text
          style={styles.paragraph}
          onPress={() => {
            this.props.navigation.navigate('Home');
          }}>
          Go back home
        </Text>
      </View>
    );
  }



  
}

class Denu extends React.Component {
  static navigationOptions  = {
    title: 'Denuncias' ,
    drawerIcon: ({ focused }) => (
      <Ionicons name="md-person" size={24} color={focused ? 'blue' : 'black'} />
    ),
    
  };

  render() {
    return ( 
      this.props.navigation.navigate('denucias'));
  }
}
class Recolec extends React.Component {
  static navigationOptions  = {
    title: 'Rutas de Recoleccion' ,
    drawerIcon: ({ focused }) => (
      <Ionicons name="md-person" size={24} color={focused ? 'blue' : 'black'} />
    ),
    
  };

  render() {
    return ( 
      this.props.navigation.navigate('Home'));
  }
}
const CustomDrawerContentComponent = props => (
  <ScrollView>
    <SafeAreaView
      style={styles.container}
      forceInset={{ top: 'always', horizontal: 'never' }}>
      <DrawerItems {...props} />
      <Image
        style={styles.image}
        source={{
          uri: 'https://appjs.co/wp-content/uploads/2015/09/brent3-458x458.png',
        }}
      />
    </SafeAreaView>
  </ScrollView>
);

const navigator = createDrawerNavigator(
  
    
  
  {

    
   Item1:{

      screen:Home


    },
    Denuncias :{
      screen: denuncias, navigationOptions:{
        drawerIcon: ({ focused }) => (
          <Ionicons name="md-person" size={24} color={focused ? 'blue' : 'black'} />)
      }
    },
    Rutas:{
      screen: rutas,navigationOptions:{
        drawerIcon: ({ focused }) => (
          <Ionicons name= "ios-trash" size={24} color={focused ? 'blue' : 'black'} />),title:"Rutas de recoleccion"
    
        }

  },  

  Emergencias:{
    screen:emer ,navigationOptions:{
      drawerIcon: ({ focused }) => (
        <Ionicons name= "md-alert" size={24} color={focused ? 'blue' : 'black'} />),
          title: 'Numeros de emergencias',
          headerTintColor: 'white',
        
  

  }

},

  },

  
  
  
  {
    contentComponent:(props) => (
      <View style={{flex:1}}>
          <SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }}>
            <DrawerItems    {...props} />
            <TouchableOpacity onPress={()=>
              Alert.alert(
                'Salir',
                'Seguro que deseas salir?',
                [
                  {text: 'Cancelar', onPress: () => {return null}},
                  {text: 'Confirmar', onPress: () => {
                    firebase
                    .auth()
                    .signOut()
                    .then(()=> {console.log("Cerrado");})
                    .catch(error => alert(error.message))
                   // props.navigation.navigate('Login')
                  }},
                ],
                { cancelable: false }
              )  
            }>
              <View style={{ flexDirection: 'row',alignItems: "center",marginTop:240,bottom:0 }}>

              <Ionicons name="ios-exit" size={24} color={ 'black'} style={styles.iconContainer}/>
              <Text style={styles.icon}>Salir</Text>
              </View>
            </TouchableOpacity>
          </SafeAreaView>
      </View>
  ),
  
  drawerOpenRoute: 'DrawerOpen',
  drawerCloseRoute: 'DrawerClose',
  drawerToggleRoute: 'DrawerToggle'

  
    
  },
  
  {
    // even i tried: this.props.signOut()
   // 'drawerType: 'back',
    // drawerPosition: 'right',
    // drawerWidth: 200,
    // drawerBackgroundColor: 'orange',
    // contentComponent: CustomDrawerContentComponent
  },
  
);

export default createAppContainer(navigator);




 



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      margin: 20
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
    item: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    label: {
      margin: 16,
      fontWeight: 'bold',
      color: 'rgba(0, 0, 0, .87)',
      alignItems: 'center',

    },
    iconContainer: {
      marginHorizontal: 16,
      width: 24,
      alignItems: 'center',
    },
    
    icon: {
     
      width: 40,           
      left: 2, // Keep some space between your left border and Image
      marginHorizontal: 16,
      alignItems: 'center',
      fontWeight: 'bold',



    },
    btnText: {
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 16,
      color: 'white',
      height:'100%',
      width:'100%'
    },
    bottomView: {
      width: '100%',
      height: 50,
      backgroundColor: '#EE5407',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute', //Here is the trick
      bottom: 0, //Here is the trick
    },
  });
