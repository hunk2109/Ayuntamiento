import React from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity,Alert, Dimensions,colors } from 'react-native';
import { Container, Header, Body, Title, Content, Card, CardItem, Button, Left } from 'native-base';
import * as firebase from 'firebase';
import {Notifications} from 'expo';
import Moment from 'moment';
import HTML from 'react-native-render-html';
import * as Permissions from 'expo-permissions'



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
import quejas from './quejas' 



class Home extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      name:"",
      email:"",
      message:"",
      posts: [],
      loading: true 


    }

    
  }
  
  

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

    fetch(`http://wp.sajomaescucha.com/wp-json/wp/v2/posts?_embed`)
        .then((response) => response.json())
        .then((responseJson) => {
          this.setState({
            isLoading: false,
            posts: responseJson,
          })
        })
        .catch((error) => {
          console.error(error);
        }); 




  
  }

 
  
  Singoutuser=()=>{
    firebase
    .auth()
    .signOut()
    .then(()=> {console.log("Cerrado");})
    .catch(error => alert(error.message))
  }

  
  render() {
    if (this.state.isLoading == true) {
      return(
        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center',}}>
          <ActivityIndicator size="large" color="#1C97F7" />
        </View>
      )
    }
    else{
    Moment.locale('en');    
    return (
      <Container>

        <Header androidStatusBarColor="#004447" style={{ backgroundColor: '"#fff"' }}>
          <Body style = {{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', }}>
            <Title style={{color:"#2C3335"}}>Noticias</Title>
          </Body>
        </Header>

        <Content>
        {this.state.posts.map((item, index) => (
          <Card style={{flex: 0}} key = {item.id}>
            <CardItem>
              <Left>
                <Body>
                  <Text style = {{ fontSize: 24, fontWeight:'bold' }}>{item.title.rendered}</Text>
                  <Text note>Published on: {Moment(item.date).format('d MMM Y')}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              {item._embedded['wp:featuredmedia'].filter( element => element.id == item.featured_media).map((subitem, index) => (
                  <Image source={{uri: subitem.media_details.sizes.medium.source_url}} style={{height: 200, width: 200, flex: 1}} key = {item.id}/>
                  ))}
            </CardItem>
            <CardItem>
                <HTML html={item.content.rendered} imagesMaxWidth={Dimensions.get('window').width} />
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{color: '#87838B'}}>
                  <Text>Author:</Text>
                  {item._embedded.author.filter( element => element.id ==item.author).map((subitem, index) => (
                  <Text key = {item.id}>{subitem.name}</Text>
                  ))}
                </Button>
              </Left>
            </CardItem>
          </Card>
        ))}
        </Content>
      </Container>
    )
  }
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
          <Ionicons name="md-person" size={24} color={focused ? 'blue' : 'black'} />),title: 'Denuncias'
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

Quejas:{
  screen:quejas,navigationOptions:{
    drawerIcon: ({ focused }) => (
      <Ionicons name= "md-hand" size={24} color={focused ? 'blue' : 'black'} />),
        title: 'Quejas y sugerencias',
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
              <View style={{ flexDirection: 'row',alignItems: "center",marginTop:180,bottom:0 }}>

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
