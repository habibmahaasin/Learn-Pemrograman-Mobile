import React, { useState } from "react";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { View, Text, StyleSheet, SafeAreaView ,StatusBar, Image, TouchableOpacity, ScrollView, Linking } from "react-native";
import Geolocation from 'react-native-geolocation-service';
import { Platform,PermissionsAndroid } from "react-native";

const lampuMenyala = { uri : 'https://i.ibb.co/TB4vg7v/Png-Item-5290496-1.png',};
const lampuMati = { uri : 'https://i.ibb.co/LYnt9K3/Group-35-2.png',};

function fungsiUtama({navigation} ){

  const [power,setPower] = useState(0);
  const pressOff = () => setPower(0);
  const pressOn = () => setPower(1);
  const [latitiude, setLatitude] = React.useState('');
  const [longitude, setLongitude] = React.useState('');

  const componentDidMount = () => {
    if (Platform.OS === 'android') {
      PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );
    if ("granted" === PermissionsAndroid.RESULTS.GRANTED) {
      Geolocation.getCurrentPosition(
        (position) => {
          setLatitude (position.coords.latitude)
          setLongitude (position.coords.longitude)
        },
        (error) => {
          // See error code charts below.
          console.log(error.code, error.message); 
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
    }
  }
}

  React.useEffect(()=>{
    componentDidMount();
  },[]);

  if (power == 0) {
    return(
      <SafeAreaView backgroundColor='white'>  
          <View>
              <StatusBar backgroundColor='white' barStyle='dark-content'/>
              <Text style={styles.header} >Lampu Utama</Text>
              <Text style={styles.desc} >Setting Your Device Properly</Text>
          </View>
          
          <ScrollView>
              <View style={styles.addNewDevice}>
                  <Text style={styles.headerList2} >Device Status</Text>
                  <Text style={styles.statusOff} >OFF</Text>
              </View>

              <View>
                  <Image source={lampuMati} style={styles.logo}></Image>
              </View>
              
              <View>
                  <Text style={styles.keterangan} >Power Setting</Text>
              </View>

              <TouchableOpacity onPress={pressOn}>
                  <View style={styles.deviceOn}>
                      <Text style={styles.buttonText}>ON</Text>
                  </View>
              </TouchableOpacity>

              <TouchableOpacity style={styles.kotakLokasi} onPress={ ()=>{ Linking.openURL("https://www.google.co.id/maps/place/"+latitiude+','+longitude)}}>
                  <Text style={styles.headerList2} >Lokasi Devices</Text>
                  <View style={{alignSelf: "center", marginRight: 10}}>
                        <MaterialIcons 
                              name={'navigate-next'}
                              size = {40}
                              color={'#22A7F0'}
                          />
                      </View>
              </TouchableOpacity>
          </ScrollView>
      </SafeAreaView>
    );
  }

  else {
    return(
      <SafeAreaView backgroundColor='white'>  
          <View>
              <StatusBar backgroundColor='white' barStyle='dark-content'/>
              <Text style={styles.header} >Lampu Utama</Text>
              <Text style={styles.desc} >Setting Your Device Properly</Text>
          </View>
          
          <ScrollView>
              <View style={styles.addNewDevice}>
                  <Text style={styles.headerList2} >Device Status</Text>
                  <Text style={styles.statusOn} >ON</Text>
              </View>

              <View>
                  <Image source={lampuMenyala} style={styles.logo}></Image>
              </View>
              
              <View>
                  <Text style={styles.keterangan} >Power Setting</Text>
              </View>

              <TouchableOpacity onPress={pressOff}>
                  <View style={styles.deviceOff}>
                      <Text style={styles.buttonText}>OFF</Text>
                  </View>
              </TouchableOpacity>

              <TouchableOpacity style={styles.kotakLokasi} onPress={ ()=>{ Linking.openURL("https://www.google.co.id/maps/place/"+latitiude+','+longitude)}}>
                  <Text style={styles.headerList2} >Lokasi Devices</Text>
                  <View style={{alignSelf: "center", marginRight: 10}}>
                        <MaterialIcons 
                              name={'navigate-next'}
                              size = {40}
                              color={'#22A7F0'}
                          />
                      </View>
              </TouchableOpacity>
          </ScrollView>
      </SafeAreaView>
    );
  }

}


const styles = StyleSheet.create({
    
    logo:{
        width: 145,
        height: 270,
        alignSelf: "center",
        marginTop: 15,
        marginBottom: '10%',
    },

    input: {
        marginTop: 15,
        marginRight: 30,
        marginLeft:30,
        borderWidth: 2,
        padding: 13,
        borderRadius : 12,
        borderColor: '#22A7F0',
    },
    

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

  keterangan:{
    textAlign : "center",
    fontSize: 20,
    color: '#323232',
    marginBottom:10,
    fontWeight: 'bold',
  },

  addNewDevice:{
    shadowColor:'22A7F0',
    marginBottom:'5%',
    width:'85%',
    alignSelf:"center",
    borderWidth: 2,
    borderRadius : 15,
    borderColor: '#22A7F0',
    flexDirection: "row", 
    justifyContent:'space-between'
  },

  kotakLokasi:{
    shadowColor:'22A7F0',
    marginBottom:'8%',
    width:'85%',
    alignSelf:"center",
    borderWidth: 2,
    borderRadius : 15,
    borderColor: '#22A7F0',
    flexDirection: "row", 
    justifyContent:'space-between'
  },


  buttonText: {
    textAlign: 'center',
    padding:13,
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

  deviceOn:{
    width:'85%',
    alignSelf:"center",
    backgroundColor: '#43D07B',
    borderRadius : 15,
    marginBottom: 10,
  },

  deviceOff:{
    width:'85%',
    alignSelf:"center",
    backgroundColor: '#E86068',
    borderRadius : 15,
    marginBottom: 10,
  },

  headerList: {
    marginLeft:30,
    padding:20,
    fontSize:18,
    color: 'white',
    fontWeight:'bold'
  },

  headerList2: {
    marginLeft:10,
    padding:15,
    fontSize:18,
    color: '#22A7F0',
    fontWeight:'bold'
  },

  lokasi: {
    marginLeft:10,
    padding:15,
    fontSize:18,
    color: '#22A7F0',
    fontWeight:'bold',
    textAlign: 'center',
  },

  statusOn: {
    marginRight:10,
    padding:15,
    fontSize:18,
    color: '#43D07B',
    fontWeight:'bold'
  },

  statusOff: {
    marginRight:10,
    padding:15,
    fontSize:18,
    color: '#E86068',
    fontWeight:'bold'
  },

});


export default fungsiUtama;