import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, TextInput,Alert } from 'react-native';
import "react-native-gesture-handler";
import { Button, Input, Text } from '@rneui/base'
import {useState} from 'react'
import { createPostService } from './app/services/TestServices';

export default function App() {

  const createPost = () => {
    console.log("creando post " + subject + " " + message);
    createPostService({
        title: subject,
        body: message
    },()=>{
        console.log("Ejecutando fnExito, mostrando alerta.");
        Alert.alert("CONFIRMACIÓN", "Se ha ingresado un nuevo POST");
    }
    )
}

  const [puntEquipo1,setPuntEquipo1]=useState();
  const [puntEquipo2,setPuntEquipo2]=useState();

  return (

    <View style = {styles.contenedorPrincipal}>
      <View style = {styles.contenedorFormulario}>

        <View style={styles.usuarioText}>
          <Text style={{textAlign:'center'}}>USUARIO:</Text>
          <Text style={{textAlign:'center'}}>JOEL VILLAMAR</Text>
        </View>

        <View style={styles.equipos}>
          <View style={styles.equipoX}>
            <Text>ARGENTINA</Text>
            <Text>PUNTUACION</Text>
            <Input
              placeholder='0'
              value={puntEquipo1}
              onChangeText={(puntEquipo1)=>{
                setPuntEquipo1(puntEquipo1)
              }}
            ></Input>
          </View>
          <View style={styles.equipoX}>
            <Text>CANADÁ</Text>
            <Text>PUNTUACION</Text>
            <Input
              placeholder='0'
              value={puntEquipo2}
              onChangeText={(puntEquipo2)=>{
                setPuntEquipo2(puntEquipo2)
              }}
            ></Input>
          </View>
        </View>

        <View>
          <Button
          title='GUARDAR'
          onPress={createPost}
          ></Button>
        </View>
      </View>


    </View>
    /*<View style={styles.container}>
        <View style={styles.textContainer}>
          <Text>USUARIO: </Text>
            <Text h4="true">JOEL VILLAMAR</Text>
        </View>
        <View style={styles.formContainer}>  
          <View style={styles.marcador}>
            <
            <Text>ARGENTINA</Text>          
            <Input
                placeholder='TITULO'
                value={subject}
                onChangeText={(value)=>{
                    setSubject(value);
                }}
            /></View>
            <View style={styles.marcador}>
              <Text>BOLIVIA</Text>
              <Input
                  placeholder='MENSAJE'
                  value={message}
                  onChangeText={(value)=>{
                      setMessage(value);
                  }}
              />
            </View>
            
            <Button 
                title="Guardar"
            />
        </View>

    </View>*/
  );
}

const styles = StyleSheet.create({
  contenedorPrincipal:{
   // backgroundColor:'black',
    justifyContent:'center',
    alignItems:'center',
    paddingVertical:'30%'
  },
  contenedorFormulario:{
   // backgroundColor:'yellow',
    flexDirection: 'column',
    justifyContent:'center'
  },
  equipos:{
   // backgroundColor:'brown',
    flex:2,
    flexDirection:'row',
    justifyContent:'center',
    paddingHorizontal:20
  },
  equipoX:{
    flexDirection:'column',
    justifyContent:'center',
    marginRight:'20px'
   // backgroundColor:'green'
  },
  usuarioText:{
    flex:1,
    justifyContent:'center',
    textAlign:'center'
  }








})






/*
const styles = StyleSheet.create({
  container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#fff',
      justifyContent: 'center',
  },
  textContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems:'center',
      marginVertical: 10
  },
  formContainer: {
      flex: 7,
      flexDirection:'column',
      justifyContent:'center'

  },
  marcador: {
    flex: 1,
    flexDirection: "row"
  }
});
*/