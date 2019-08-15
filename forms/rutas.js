import React ,{ Component } from 'react';
import { StyleSheet, Text, View,KeyboardAvoidingView,FlatList,StatusBar,TouchableOpacity,Picker } from 'react-native';
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
    this.state = {
      isLoading: true,
      throttlemode:'',
      region:{
        latitude: 19.33915,
        longitude:  -70.93819,
        latitudeDelta: 0.0122,
        longitudeDelta: 0.0121,
    }
  }

}

  onPickerValueChange=(value, index)=>{
    this.setState(
      {
        "throttlemode": value
      },
      () => {
        // here is our callback that will be fired after state change.
        this.props.navigation.navigate( this.state.throttlemode);
      }
    );
  }
  render() {
    return (
        <View style={styles.MainContainerAddCamp}>
        <Text style={{fontSize: 12}}> Rutas</Text>
        <Picker style={styles.PickerStyleClass}
        selectedValue={this.state.throttlemode}
        onValueChange={this.onPickerValueChange}>
          <Picker.Item label="Elija una Ruta" value=""/>
          <Picker.Item label="Centro" value="Centro" />
          <Picker.Item label="AV. SANTIAGO" value="Avenida" />
          <Picker.Item label="URBANIZACION ESTRELLA" value="Estrella" />
          <Picker.Item label="VILLA DUARTE ARRIBA" value="Duarte" />
          <Picker.Item label="FERNANDO VALERIO" value="Valerio" />
          <Picker.Item label="TOMAS FERNANDEZ" value="Tomas" />
          <Picker.Item label="LICEO CANADA" value="Canada" />
          <Picker.Item label="CENTRO PEÑITA" value="Peñita" />
          <Picker.Item label="Cañada del Caimito" value="Cañada" />
          <Picker.Item label="Ojo de Agua" value="Ojo" />
          <Picker.Item label="URBANIZACION ZARZUELA" value="Zarzuela" />
          <Picker.Item label="ENSANCHE LAS PALMAS" value="Palmas" />
          <Picker.Item label="CAOBANICO" value="CAOBANICO" />
          <Picker.Item label="CARRETERA LOS MONTONES, SABANETA CAFÉ, ENTRADA PEDREGAL" value="Montones" />
          <Picker.Item label="BARRIO BALAGUER" value="Balaguer" />
          <Picker.Item label="BARRIO DON LUIS" value="Luis" />
          <Picker.Item label="LA QUEBRADITA" value="Quebradita"/>
          <Picker.Item label="URBANIZACION OFELIA" value="Ofelia" />
          <Picker.Item label="VILLA VERDUN" value="Verdun" />
          <Picker.Item label="CERRO HERMOSO" value="Cerro" />
          <Picker.Item label="PUEBLO NUEVO (BARRIO YEYA)" value="Yeya" />
          <Picker.Item label="LOS JARDINES" value="Jardines" />
          <Picker.Item label="LA PATA DEL GRILLO" value="Grillo" />
          <Picker.Item label="BARRIO LINDO" value="Lindo" />
          <Picker.Item label="ENSANCHE LA CAOBA" value="Ensanche" />
          <Picker.Item label="VILLA ESPERANZA" value="Esperanza" />
          <Picker.Item label="CALLE DUARTE" value="Duarte1" />
          <Picker.Item label="BARRIO TARINGO" value="Taringo" />
          <Picker.Item label="BARRIO LAS FLORES" value="Flores" />
          <Picker.Item label="HOSPITAL MUNICIPAL" value="Hospital" />
          <Picker.Item label="PEDREGAL" value="Pedregal" />
          <Picker.Item label="LA CEIBITA PEDREGAL" value="Ceibita" />
          <Picker.Item label="ARROYO JANICO" value="Janico" />
          <Picker.Item label="MOTOLON" value="MOTOLON" />
          <Picker.Item label="CALLEJONES DE GUAJACA" value="Guajaca" />
          <Picker.Item label="PARALIMON" value="PARALIMON" />
          <Picker.Item label="BARRIO LOS TREMENDOS" value="Tremendos" />
          <Picker.Item label="INOA" value="INOA" />
          <Picker.Item label="LOS PLATANITOS" value="Platanitos" />
          <Picker.Item label="EL PARAISO" value="Paraiso" />
          <Picker.Item label="ARROYO HONDO POR FUERA" value="Fuera" />
          <Picker.Item label="EL FUERTE" value="Fuerte" />
          <Picker.Item label="ALTOS LAS PIÑAS" value="Piñas" />














        </Picker>




       </View>
      );
  }
}
const styles = StyleSheet.create({
MainContainerAddCamp :{
flex:1,
margin: 10,
paddingTop: (Platform.OS === 'ios') ? 20 : 20,
padding: 5,
},
TextInputStyleClass: {
textAlign: 'left',
paddingLeft: 7,
marginBottom: 7,
height: 40,
borderWidth: 1,
borderColor: '#00BCD4',
},
PickerStyleClass:{
    backgroundColor:'#87ceeb',
    paddingLeft: 7,
marginBottom: 7,
height: 40,
borderWidth: 1,
 borderColor: '#FF5722',
}
});


