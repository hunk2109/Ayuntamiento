import React from 'react';
import { StyleSheet, Text, View,KeyboardAvoidingView,Image,TouchableOpacity } from 'react-native';

import * as firebase from 'firebase'
import {Form,Item,Input,Label,Button} from 'native-base'
import { logOutAsync } from 'expo/build/Google';
 

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
    <KeyboardAvoidingView
    behavior="position" enabled style={styles.container}
    
    >
      <View style={styles.logoContainer}>
     
      <Image 

source={require('../assets/logo.png')}

/>          
       </View>
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
          }}><Text style={styles.buttonText}>Entrar</Text></Button>
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
  );
}
}


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',      
      backgroundColor: '#F5FCFF',
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
      padding: 20,
      width: "100%",
      marginBottom: 30,
      
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
