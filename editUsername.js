import React from "react";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { View, Text, StyleSheet, SafeAreaView, StatusBar, TextInput ,ScrollView, Image, Pressable} from "react-native";


function Profile({navigation}){
  return(
    <SafeAreaView backgroundColor='white' style={{ flex: 1 }}>
        
        <View style={{ flex: 2 }}>
            <StatusBar backgroundColor='white' barStyle='dark-content'/>
            <Text style={styles.header} >Profile</Text>
            <Text style={styles.desc} >Costumize you profile account</Text>
        </View>
        
        <View style={{ flex: 10 }}>
          <ScrollView>
              <View style={styles.deviceList}>
                  <Text style={styles.headerList}>
                  <FontAwesome5 
                      name={'user-alt'}
                      size = {20}
                      color={'#fff'}
                  />     brilliantfriezkaaina</Text>
              </View>

              <TextInput
                      style={styles.input}
                      placeholder="Masukkan Username Baru"
              />
              
          </ScrollView>
        </View>

        <View>
          <Pressable onPress={() => navigation.navigate('dashboard')}>
              <View style={styles.deviceList1}>
                  <Text style={styles.buttonText}>Save</Text>
              </View>
            </Pressable>
        </View>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  
  header:{
    marginTop: 20,
    marginLeft:30,
    fontSize: 38,
    fontWeight: 'bold',
    color: '#22A7F0',
  },

  input: {
    marginTop: 15,
    marginRight: 30,
    marginLeft:30,
    marginBottom:'90%',
    borderWidth: 2,
    padding:10,
    borderRadius : 12,
    borderColor: '#22A7F0',
  },

  desc:{
    marginLeft:30,
    fontSize: 20,
    color: '#323232',
    marginBottom:20,
  },

  addNewDevice:{
    shadowColor:'black',
    marginTop:15,
    width:'85%',
    alignSelf:"center",
    borderWidth: 2,
    borderRadius : 15,
    borderColor: '#323232',
  },
    
  buttonText: {
    textAlign: 'center',
    padding:15,
    fontSize:24,
    color: 'white',
    fontWeight:'bold'
  },

  deviceList:{
    marginBottom: 0,
    marginTop:15,
    width:'85%',
    alignSelf:"center",
    backgroundColor: '#22A7F0',
    borderRadius : 15,
  },

  deviceList2:{
    marginBottom: 0,
    marginTop:15,
    width:'85%',
    alignSelf:"center",
    backgroundColor: '#E86068',
    borderRadius : 15,
  },

  headerList: {
    marginLeft:5,
    padding:15,
    fontSize:18,
    color: 'white',
    fontWeight:'bold'
  },

  headerList2: {
    marginLeft:30,
    padding:12,
    fontSize:18,
    color: '#323232',
    fontWeight:'bold'
  },

  ConnectedSum: {
    marginLeft:30,
    paddingBottom:25,
    fontSize:16,
    color: 'white',
  },

  fotoProfile:{
    width: 150,
    height: 150,
    alignSelf: "center",
    borderWidth: 4,
    borderRadius : 100,
    borderColor: '#22A7F0',
    marginTop: 10,
    marginBottom: 20,
  },

  ganjelhehe:{
      marginBottom:100,
  },

  deviceList1:{
    width:'85%',
    alignSelf:"center",
    backgroundColor: '#43D07B',
    borderRadius : 15,
    marginBottom: 20
  },
});


export default Profile;