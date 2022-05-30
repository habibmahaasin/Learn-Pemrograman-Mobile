import React from "react";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { View, Text, StyleSheet, SafeAreaView, StatusBar, Pressable, TouchableOpacity } from "react-native";

function tambahPerangkat({navigation} ){
  return(
    <SafeAreaView backgroundColor='white' style={{ flex: 1 }}>
        
        <View style={{ flex: 2 }}>
            <StatusBar backgroundColor='white' barStyle='dark-content'/>
            <Text style={styles.header} >Add New Devices</Text>
            <Text style={styles.desc} >Select cara milihmuuuu</Text>
        </View>
        
        <View style={{ flex: 10 }}>
          <TouchableOpacity onPress={() => navigation.navigate('deviceType')}>
              <View style={styles.deviceList} >
                  <Text style={styles.headerList}>
                  <MaterialCommunityIcons 
                            name={'qrcode-scan'}
                            size = {20}
                            color={'#fff'}
                  />     Scan Now</Text>
              </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('deviceType')}>
              <View style={styles.deviceList} >
                  <Text style={styles.headerList}>
                  <FontAwesome5 
                            name={'wifi'}
                            size = {20}
                            color={'#fff'}
                  />     Wifi</Text>
              </View>
          </TouchableOpacity>
        </View>

        <View style={{ flex: 1.5, marginTop: 20}}>
          <Pressable onPress={() => navigation.navigate('dashboard')}>
              <View style={styles.deviceList2}>
                  <Text style={styles.buttonText}>Close</Text>
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

  desc:{
    marginLeft:30,
    fontSize: 20,
    color: '#323232',
    marginBottom:20,
  },

  addNewDevice:{
    shadowColor:'black',
    marginBottom: 10,
    marginTop:10,
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
    width:'85%',
    alignSelf:"center",
    backgroundColor: '#E86068',
    borderRadius : 15,
  },

  headerList: {
    marginLeft:5,
    padding:20,
    fontSize:18,
    color: 'white',
    fontWeight:'bold'
  },

});


export default tambahPerangkat;