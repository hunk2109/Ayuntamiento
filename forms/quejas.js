import React,{Component} from 'react';
import { StyleSheet, Text, View,KeyboardAvoidingView,FlatList,TouchableOpacity,Image } from 'react-native';
import {Input,Card,Button,Icon, Item} from 'native-base'
import * as firebase from 'firebase'
import {ImagePicker} from 'expo';
import Constants from 'expo-constants'
import * as Permissions from 'expo-permissions'




export default class  quejas extends React.Component { 

    constructor(props){
        super(props);
        this.state = {
          message:"",
          messagelist:[],
          name:"",
          email:"",
          image: null
        }
    
        
      };

      getPermissionAsync = async () => {
        if (Constants.platform.ios) {
          const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
          if (status !== 'granted') {
            alert('Sorry, we need camera roll permissions to make this work!');
          }
        }
      }
    
      _pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
        });
    
        console.log(result);
    
        if (!result.cancelled) {
          this.setState({ image: result.uri });
        }
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
        })
    
        this.getPermissionAsync();

      
      }

      sendmessage = message=>{
        var messagelistref = firebase.database().ref("Sugerencias");
        var newmesajeref = messagelistref.push();
        newmesajeref.set({
          text: message,
          time: Date.now().toString(),
          email: this.state.email,
          name: this.state.name
    
        });
    
        this.setState({message:""});
    
      };


      updatelist = messageList => {
        this.setState({messageList: messageList});
      }


      render() {
    
        let { image } = this.state;
    
        return(
          <KeyboardAvoidingView behavior="padding" enabled style={styles.container}>
            <View style={styles.header}>
              <Text style={styles.headerText}>Quejas y Sugerencias</Text>
            </View>
    
    
            
    
           
    
              <View style={styles.inputContainer}>
                <Input onChangeText ={text => {
                  this.setState({message: text})
                }}
                value={this.state.message}
                placeholder ="Escriba un mensaje"
                
                />
    
                <Button onPress={() => {
                  this.sendmessage(this.state.message)
                }} 
                danger 
                rounded 
                icon
                ><Icon name="arrow-forward"/></Button>
    
              </View>
    
            
          </KeyboardAvoidingView>        
          
        );
      }
    
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 25,
      margin: 2,
      backgroundColor: "#fff"
    },
    header: {
      backgroundColor: "#2B2B52",
      alignItems: "center",
      height: 40,
      justifyContent: "center"
    },
    headerText: {
      paddingHorizontal: 10,
      color: "#FFF",
      fontSize: 20
    },
    listContainer: {
      flex: 1,
      padding: 5
    },
    listItem: {
      padding: 10
    },
    messageText: {
      fontSize: 20
    },
    timeText: {
      fontSize: 10
    },
    inputContainer: {
      flexDirection: "row",
      padding: 5,
      borderWidth: 5,
      borderRadius: 15,
      borderColor: "#2B2B52",
      color: "#fff"
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5
    },
    btn: {
      borderWidth: 1,
      paddingLeft: 20,
      paddingRight: 20,
      paddingTop: 10,
      paddingBottom: 10,
      borderRadius: 20,
      borderColor: 'rgba(0,0,0,0.3)',
      backgroundColor: 'rgb(68, 99, 147)'
    },
    btnTxt: {
      color: '#fff'
    },
    image: {
      marginTop: 20,
      minWidth: 200,
      height: 200
    }
  
  });