import React from "react";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { View, Text, StyleSheet, SafeAreaView, StatusBar, TouchableOpacity, ScrollView } from "react-native";

function dashboard({navigation}){
  return(
    <SafeAreaView backgroundColor='white' style={{ flex: 1 }}>
        
        <View style={{ flex: 2 }}>
            <StatusBar backgroundColor='white' barStyle='dark-content'/>
            <Text style={styles.header} >Welcome</Text>
            <Text style={styles.desc} >To smart home system</Text>
        </View>

        <View style={{ flex: 2 , marginBottom: 20}}>
            <TouchableOpacity onPress={() => navigation.navigate('tambahPerangkat')}>
                <View style={styles.addNewDevice} >
                    <Text style={styles.buttonText} >Add New Device</Text>
                    <View style={styles.iconadd}>
                        <Ionicons 
                            name={'md-add-circle-outline'}
                            size = {50}
                            color={'#323232'}
                        /> 
                    </View>   
                </View>
            </TouchableOpacity>
            
        </View>
        
        <View style={{ flex: 10 }}>
            <ScrollView>
                    
            <TouchableOpacity onPress={() => navigation.navigate('daftarDevice')}>
                    <View style={styles.deviceList}>
                        <View>
                            <Text style={styles.headerList}>Bedroom</Text>
                            <Text style={styles.ConnectedSum}>2 Devices</Text>
                        </View>

                        <View style={{alignSelf: "center", marginRight: 10}}>
                        <MaterialIcons 
                              name={'navigate-next'}
                              size = {70}
                              color={'#fff'}
                          />
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('daftarDevice')}>
                    <View style={styles.deviceList}>
                        <View>
                            <Text style={styles.headerList}>Study Room</Text>
                            <Text style={styles.ConnectedSum}>5 Devices</Text>
                        </View>

                        <View style={{alignSelf: "center", marginRight: 10}}>
                        <MaterialIcons 
                              name={'navigate-next'}
                              size = {70}
                              color={'#fff'}
                          />
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('daftarDevice')}>
                    <View style={styles.deviceList}>
                        <View>
                            <Text style={styles.headerList}>Kitchen</Text>
                            <Text style={styles.ConnectedSum}>1 Devices</Text>
                        </View>

                        <View style={{alignSelf: "center", marginRight: 10}}>
                        <MaterialIcons 
                              name={'navigate-next'}
                              size = {70}
                              color={'#fff'}
                          />
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('daftarDevice')}>
                    <View style={styles.deviceList}>
                        <View>
                            <Text style={styles.headerList}>Living Room</Text>
                            <Text style={styles.ConnectedSum}>3 Devices</Text>
                        </View>

                        <View style={{alignSelf: "center", marginRight: 10}}>
                        <MaterialIcons 
                              name={'navigate-next'}
                              size = {70}
                              color={'#fff'}
                          />
                        </View>
                    </View>
                </TouchableOpacity>

            </ScrollView>
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
    paddingTop:10,
    fontSize:24,
    color: '#323232',
    fontWeight:'bold'
  },

  deviceList:{
    marginBottom: 0,
    marginTop:20,
    width:'85%',
    alignSelf:"center",
    backgroundColor: '#22A7F0',
    borderRadius : 20,
    flexDirection: "row", 
    justifyContent:'space-between',
  },

  headerList: {
    marginLeft:30,
    paddingTop:25,
    fontSize:22,
    color: 'white',
    fontWeight:'bold'
  },

  ConnectedSum: {
    marginLeft:30,
    paddingBottom:25,
    fontSize:16,
    color: 'white',
  },
  
  iconadd:{ 
    alignSelf: "center",
    paddingBottom:10,
  },

});

export default dashboard;