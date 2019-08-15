import React from 'react';
import { StyleSheet, Text, View,KeyboardAvoidingView,Image,TouchableOpacity,ImageBackground } from 'react-native';

import * as firebase from 'firebase'
import {Form,Item,Input,Label,Button} from 'native-base'
import * as Facebook from 'expo-facebook';
 

export default class Login extends React.Component {

    constructor(props){
        super(props);
        this.state={
            email: "",
            password:""


        }
    }

    static navigationOpt ={
        title: "Login",
        header: "none"
    };


    componentDidMount() {

      firebase.auth().onAuthStateChanged((user) => {
        if (user != null) {
          console.log(user)
        }
      })
    }
    async loginWithFacebook() {

      //ENTER YOUR APP ID 
      const { type, token } = await Facebook.logInWithReadPermissionsAsync('897167117298559', { permissions: ['public_profile'] })
  
      if (type == 'success') {
  
        const credential = firebase.auth.FacebookAuthProvider.credential(token)
  
        firebase.auth().signInWithCredential(credential)
        .then(()=>{this.props.navigation.replace("Home")})
        .catch((error) => {
          console.log(error)
        })
      }
    }
    SingInUser = (email,password) =>{

      firebase
      .auth()
      .signInWithEmailAndPassword(email,password)
      .then(()=>{
        this.props.navigation.replace("Home")
      })
      .catch(error  =>{
        alert(error.message)
      })
      
    }

    render(){
  return (
    <ImageBackground
  source={require('../assets/imgbg.jpg')}
  style={{width: '100%', height: '100%'}}
> 
    

    <KeyboardAvoidingView
    behavior="position" enabled style={styles.container}
    
    >
      <View style={styles.logoContainer}>
     
      <Image 

source={require('../assets/logo.png')}


/>          
       </View >
      <Form style={styles.form}>
          <Item floatingLabel>
              <Label>Email</Label>
              <Input

              autoCorrect={false}
              autoCapitalize="none"
              keyboardType="email-address"
              onChangeText={email=> this.setState({email})}             
              
              />
          </Item>
          <Item floatingLabel>
              <Label>Contraseña</Label>
              <Input
              secureTextEntry={true}

              autoCorrect={false}
              autoCapitalize="none"
              keyboardType="p" 
              onChangeText={password=> this.setState({password})}

              
              
              />
          </Item>
          <Button style={styles.button}
          full
          rounded
          onPress={()=>{
              this.SingInUser(
                this.state.email,
                this.state.password
              )
          }}><Text style={styles.buttonText}>Entrar</Text>
          </Button>
          <Button style={styles.button}
          full
          rounded
          onPress={()=>{

            this.loginWithFacebook()
              
          }}><Text style={styles.buttonText}>Facebook</Text>
          </Button>
      </Form>
      <View style={styles.footer}>
          <Text>O</Text>
          <TouchableOpacity onPress ={()=>{
              this.props.navigation.navigate("Singup")
          }}> 
          <Text>Craer Nuevo Usuario</Text>
          </TouchableOpacity>
      </View>
   </KeyboardAvoidingView>
   </ImageBackground>
  );
}
}


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',      
      backgroundColor: '#019031',
      borderWidth: 1,
      flexDirection: 'column',
      
     
      
     
      
      
    },
    logoContainer: {
      alignItems: "center",
      marginTop: 1,
      marginBottom: 1,
      resizeMode:"contain",
      aspectRatio:1.70
      
     
    },
    form: {
      padding: 5,
      width: "100%",
      marginBottom: 5,
      
    },
    button: {
      marginTop: 20
    },
    buttonText: {
      color: "#fff"
    },
    footer: {
      alignItems: "center"
    }
  
});
