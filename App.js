import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Button } from 'react-native';

export default function App() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const submit = () =>{
    const usernameReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(usernameReg.test(userName) === true){
      
      console.log('userName: ', userName, 'Password: ', password);
    }else{
      console.error('email invalide');
    }
  }
  return (

    <SafeAreaView style={styles.container}>
      <Text>Login</Text>
      <TextInput 
      placeholder=' Enter Mail'
      onChangeText={(text) => setUserName(text)}
      style={styles.input}/>

      <TextInput 
      placeholder=' Password'
      onChangeText={(password) => setPassword(password)}
      secureTextEntry={true}
      style={styles.input}/>

      <Button title='Connexion' onPress={()=> submit()}/>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth:2,
    borderColor:'skyblue',
    margin:15,
    backgroundColor:'white',
  }
});
