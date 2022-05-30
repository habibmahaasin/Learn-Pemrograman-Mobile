import React from "react";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { View, Text, StyleSheet, SafeAreaView, StatusBar, Pressable, TouchableOpacity, ScrollView, TextInput } from "react-native";

function daftarDevice({navigation} ){
  return(
    <SafeAreaView backgroundColor='white' style={{ flex: 1 }} >
        
        <View style={{ flex: 2 }}>
            <StatusBar backgroundColor='white' barStyle='dark-content'/>
            <Text style={styles.header} >Devices List</Text>
            <Text style={styles.desc} >Devices connected in ruangan ini</Text>
        </View>

        <View style={{ flex: 10 }}>
          <ScrollView>
              <TouchableOpacity onPress={() => navigation.navigate('Device Settings')}>
                  <View style={styles.deviceList} >
                      <Text style={styles.headerList}>Lampu Utama  </Text>
                      <View style={{alignSelf: "center", marginRight: 10}}>
                        <MaterialIcons 
                              name={'navigate-next'}
                              size = {40}
                              color={'#fff'}
                          />
                      </View>
                  </View>
              </TouchableOpacity>

              <TouchableOpacity >
                  <View style={styles.deviceList} >
                      <Text style={styles.headerList}>Air Conditioner</Text>
                      <View style={{alignSelf: "center", marginRight: 10}}>
                        <MaterialIcons 
                              name={'navigate-next'}
                              size = {40}
                              color={'#fff'}
                          />
                      </View>
                  </View>
              </TouchableOpacity>

              <TouchableOpacity>
                  <View style={styles.deviceList} >
                      <Text style={styles.headerList}>Lampu Biasa</Text>
                      <View style={{alignSelf: "center", marginRight: 10}}>
                        <MaterialIcons 
                              name={'navigate-next'}
                              size = {40}
                              color={'#fff'}
                          />
                      </View>
                  </View>
              </TouchableOpacity>

              <TouchableOpacity>
                  <View style={styles.deviceList} >
                      <Text style={styles.headerList}>Lampu Luar Biasa</Text>
                      <View style={{alignSelf: "center", marginRight: 10}}>
                        <MaterialIcons 
                              name={'navigate-next'}
                              size = {40}
                              color={'#fff'}
                          />
                      </View>
                  </View>
              </TouchableOpacity>
                
          </ScrollView>
        </View>

        <View style={{ flex: 1.5, marginTop: 20}}>
          <Pressable onPress={() => navigation.navigate('dashboard')} >
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
    flexDirection: "row", 
    justifyContent:'space-between'
  },

  deviceList2:{
    width:'85%',
    alignSelf:"center",
    backgroundColor: '#E86068',
    borderRadius : 15,
  },

  headerList: {
    marginLeft:10,
    padding:20,
    fontSize:18,
    color: 'white',
    fontWeight:'bold',
  },

});


export default daftarDevice;