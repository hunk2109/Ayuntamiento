import React from 'react';
import { StyleSheet, Text, View,KeyboardAvoidingView,FlatList } from 'react-native';
import {Input,Card,Button,Icon, Item} from 'native-base'
import * as firebase from 'firebase'



export default class  denuncias extends React.Component { 



 
  



  constructor(props){
    super(props);
    this.state = {
      message:"",
      messagelist:[],
      name:"",
      email:""
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
  
  }


  sendmessage = message=>{
    var messagelistref = firebase.database().ref("Mensajes");
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

 //mostrar mensage en la pantalla
  /*componentWillMount(){

    var self = this;
    var messagelistref = firebase.database().ref("message_list")
    messagelistref.on("value", dataSnapshot =>{
      if (dataSnapshot.val()) {
        let messageList = Object.values(dataSnapshot.val());
        self.updatelist(messageList)

        
      }
    })
  }*/


  render() {
    return(
      <KeyboardAvoidingView behavior="padding" enabled style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Mensajes</Text>
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
    backgroundColor: "#01CBC6"
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
  }
});
