import React,{useState} from "react";
import { View, Text, StyleSheet, SafeAreaView, TextInput, StatusBar, TouchableOpacity, ScrollView } from "react-native";
import auth from '@react-native-firebase/auth'
import {firebase} from "@react-native-firebase/database"; 

function Register({navigation}) {

  const[email,setEmail] = useState('')
  const[password,setPassword] = useState('')
  const[username,setUsername] = useState('')
  const[notelp,setNotelp] = useState('')


  const daftar =()=> {
    firebase.database().ref('/daftarUser/').set({
      username:username,
      email:email,
      notelp:notelp,
      password:password
    }).then(()=>{
      console.log('Akun Ditambahkan')
    }).catch(error => {
      console.log(error)
    })

    auth().createUserWithEmailAndPassword(email,password)
    .then(()=>{
      alert('Akun Berhasil Dibuat')
      navigation.navigate('Login')

    }).catch(error => {
      if(error.code === 'auth/email-alredy-in-use'){
        alert('Email Sudah Digunakan')
      }

      else if(error.code === 'auth/invalid-email'){
        alert('Isi Ulang Email Dengan Tepat')
      }

      else if(error.code === 'auth/weak-password'){
        alert('Password Anda Lemah! min.6 Karakter')
      }

      console.error(error)
    })
  }


  return(
    <SafeAreaView backgroundColor='white'>
        <View>
            <StatusBar backgroundColor='white' barStyle='dark-content'/>
            <Text style={styles.header} >Register</Text>
            <Text style={styles.desc} >To smart home system</Text>
        </View>
        
        <ScrollView>
            <View>
                <TextInput
                    style={styles.input}
                    placeholder="Masukkan Username"
                    onChangeText={(text)=> setUsername(text)}
                />
                
                <TextInput
                    style={styles.input}
                    placeholder="Masukkan Email"
                    onChangeText={(text)=> setEmail(text)}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Masukkan Nomor Handphone"
                    onChangeText={(text)=> setNotelp(text)}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Masukkan Password"
                    onChangeText={(text)=> setPassword(text)}
                    secureTextEntry={true}
                />
            </View>

            <TouchableOpacity onPress={daftar}>
                <View style={styles.tombol}>
                    <Text style={styles.buttonText}>Register</Text>
                </View>
            </TouchableOpacity>

            <Text onPress={() => navigation.navigate('Login')} style={styles.descregister} >Hah! Kamu udah punya akun?! Login</Text>
        
      </ScrollView>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  

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
    marginTop: 20,
    marginRight: 30,
    marginLeft:30,
    borderWidth: 2,
    padding: 10,
    borderRadius : 12,
    borderColor: '#22A7F0',
  },

  tombol:{
    marginBottom: 0,
    marginTop:250,
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


export default Register;