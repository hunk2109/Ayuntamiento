import React from 'react';
import { StyleSheet, Text, View, Image,KeyboardAvoidingView,TouchableOpacity} from 'react-native';
import * as firebase from 'firebase'
import {Form,Item,Input,Label,Button} from 'native-base'





 

export default class singup extends React.Component {

    constructor(props){
        super(props);
        this.state={
            email:"",
            password:"",
            name:"",
            sector:""

        }

    }

    static navigationOpt ={
        title: "singup",
        header: null
    };

    singinuser= (name,email,password) => {

        firebase
        .auth()
        .createUserWithEmailAndPassword(email,password)
        .then(authenticate =>{
            return authenticate.user.updateProfile({
                displayName:name
            })
            .then(()=> {
                this.props.navigation.replace("Home")

            })
        })
        .catch(error=>{ alert(error.message)
        })
        
    }
    
    render(){
  return (
    <KeyboardAvoidingView
   behavior="position" enabled style={styles.container}

   
   
    >

      

      
      <Form style={styles.form}>
      <Item floatingLabel>
              <Label>Name</Label>
              <Input

              autoCorrect={false}
              autoCapitalize="none"
              keyboardType="name-phone-pad"
              onChangeText={name=> this.setState({name})} 

              
              />
          </Item>
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
              keyboardType="default" 
              onChangeText={password=> this.setState({password})}

              
              
              />
          </Item>
          <Item floatingLabel>
            <Label>Sector</Label>
            <Input
            autoCorrect={false}
            autoCapitalize="none"
            keyboardType = "default" 
            onChangeText={sector=> this.setState({sector})} 
            
            />
            
          </Item>
          <Button style={styles.button}
          full
          rounded
          onPress={()=>{
              this.singinuser(
                  this.state.name,
                  this.state.email,
                  this.state.password,
                  this.state.sector
              )
          }}><Text style={styles.buttonText}>Entrar</Text></Button>
      </Form>
      <View style={styles.footer}>
          <Text>O</Text>
          <TouchableOpacity onPress ={()=>{
              this.props.navigation.navigate("Login")
          }}> 
          <Text>Volver al Inicio</Text>
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
      backgroundColor: '#019031',
      borderWidth: 1,
      flexDirection: 'column',
    },
    logoContainer: {
      alignItems: "center",
      marginTop: 1,
      marginBottom: 1,         
      

    },
    form: {
      padding: 10,
      width: "100%"
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