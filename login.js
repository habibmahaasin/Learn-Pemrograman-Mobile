import React,{useState} from "react";
import auth from '@react-native-firebase/auth'
import { View, Text, Image, StyleSheet, SafeAreaView, TextInput, StatusBar, ScrollView, TouchableOpacity, Alert } from "react-native";

const logo = { uri : 'https://i.ibb.co/nQjxXNC/logo-smarthome.png',};

function login({navigation}) {

  const[email,setEmail] = useState('')
  const[password,setPassword] = useState('')

  const masuk =()=> {
    auth().signInWithEmailAndPassword(email,password)
    .then( users =>{
      const user = users.user

      alert('Login Berhasil')
      navigation.navigate('dashboard')

    }).catch(error => {

      if(error.code === 'auth/invalid-email'){
        alert('Isi Ulang Email Dengan Tepat')
      }

      else if(error.code === 'auth/user-not-found'){
        alert('Akun Tidak Ditemukan')
      }

      else if(error.code === 'auth/wrong-password'){
        alert('Password yang anda masukkan salah')
      }

      console.error(error)
    })
  }

  return(
    <SafeAreaView backgroundColor='white'>
        <View>
            <StatusBar backgroundColor='white' barStyle='dark-content'/>
            <Text style={styles.header} >Welcome</Text>
            <Text style={styles.desc} >To smart home system</Text>
        </View>
        
        <ScrollView>
            <View>
                <Image source={logo} style={styles.logo}></Image>
            </View>
    
            <View>
            <TextInput
                style={styles.input}
                placeholder="Masukkan Email Anda"
                onChangeText={(text)=> setEmail(text)}
            />

            <TextInput
                style={styles.input}
                placeholder="Masukkan Password"
                onChangeText={(text)=> setPassword(text)}
                secureTextEntry={true}
            />
            </View>

            <TouchableOpacity onPress={masuk}>
                <View style={styles.tombol}>
                    <Text style={styles.buttonText}>Login</Text>
                </View>
            </TouchableOpacity>

            <Text onPress={() => navigation.navigate('Register')} style={styles.descregister} >Kamu gapunya akun ya? Register</Text>
      </ScrollView>
    </SafeAreaView>
  )
};


const styles = StyleSheet.create({
  logo:{
    width: 271.4,
    height: 282,
    alignSelf: "center",
    marginTop: 40,
    marginBottom: 10,
  },

  header:{
    marginTop: 20,
    marginLeft:20,
    fontSize: 38,
    fontWeight: 'bold',
    color: '#22A7F0',
    
  },

  desc:{
    marginLeft:20,
    fontSize: 20,
    color: '#323232',
    marginBottom:15,
  },

  descregister:{
    marginTop: 10,
    fontSize: 18,
    color: '#323232',
    marginBottom:20,
    textAlign:"center",
  },

  input: {
    marginTop: 15,
    marginRight: 30,
    marginLeft:30,
    borderWidth: 2,
    padding: 10,
    borderRadius : 12,
    borderColor: '#22A7F0',
  },

  tombol:{
    marginBottom: 0,
    marginTop: 72,
    width:'85%',
    alignSelf:"center",
    backgroundColor: '#2196F3',
    borderRadius : 12,
  },
  
  buttonText: {
    textAlign: 'center',
    padding: 18,
    fontSize:18,
    color: 'white'
  },
});


export default login;