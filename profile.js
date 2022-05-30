import React from "react";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { View, Text, StyleSheet, SafeAreaView, StatusBar, TouchableOpacity,ScrollView, Image, Pressable, Alert} from "react-native";
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const fotoProfile = { uri : 'https://id.visafoto.com/img/docs/zz_2x2_1mb.jpg',};


function Profile({navigation}){

  let options = {
    path:'images',
    mediaType : 'photo'
  };

  const bukaKamera =()=> {
    launchCamera(options, (response) => {
      console.log('Response = ', response);
    
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = response.assets[0];
        console.log(source.uri);
      }
    });
  }

  const bukaGallery =()=>{
    launchImageLibrary(options, (response) => {
      console.log('Response = ', response);
    
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = response.assets[0];
        console.log(source.uri);
      }
    });
  }

  const pilihan =()=>{
    Alert.alert(
      'Ubah Foto Profile',
      'pilih salah satu untuk mengganti foto profile anda',
      [{
        text:'Gallery',
        onPress:()=>bukaGallery()
      },
      {
        text:'Camera',
        onPress:()=>bukaKamera()
      }]
    )
  }
  
  return(
    <SafeAreaView backgroundColor='white'>
        
        <View>
            <StatusBar backgroundColor='white' barStyle='dark-content'/>
            <Text style={styles.header} >Profile</Text>
            <Text style={styles.desc} >Costumize you profile account</Text>
        </View>
        
        <ScrollView>
            <View>
                <Image source={fotoProfile} style={styles.fotoProfile}></Image>
            </View>

            <View>
                <Pressable onPress={pilihan}>
                    <View style={styles.deviceList}>
                        <Text style={styles.headerList}>
                        <FontAwesome5 
                            name={'camera'}
                            size = {20}
                            color={'#fff'}
                        />     Ganti Foto Profile</Text>

                      <View style={{alignSelf: "center", marginRight: 10}}>
                        <MaterialIcons 
                              name={'navigate-next'}
                              size = {40}
                              color={'#fff'}
                          />
                      </View>
                    </View>
                </Pressable>

                <TouchableOpacity onPress={() => navigation.navigate('Edit Username')}>
                    <View style={styles.addNewDevice} >
                        <Text style={styles.headerList2} >
                        <FontAwesome5 
                            name={'user-alt'}
                            size = {20}
                            color={'#323232'}
                        />      brilliantfriezkaaina</Text>

                      <View style={{alignSelf: "center", marginRight: 10}}>
                        <MaterialIcons 
                              name={'navigate-next'}
                              size = {40}
                              color={'#323232'}
                          />
                      </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.addNewDevice}>
                        <Text style={styles.headerList2} >
                        <Entypo 
                            name={'mail'}
                            size = {23}
                            color={'#323232'}
                        />     brilliantfaina@gmail.com</Text>
                        
                        <View style={{alignSelf: "center", marginRight: 10}}>
                        <MaterialIcons 
                              name={'navigate-next'}
                              size = {40}
                              color={'#323232'}
                          />
                      </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.addNewDevice}>
                        <Text style={styles.headerList2} >
                          <FontAwesome5 
                            name={'phone-alt'}
                            size = {20}
                            color={'#323232'}
                        />     +6281234567XXX</Text>
                        
                        <View style={{alignSelf: "center", marginRight: 10}}>
                        <MaterialIcons 
                              name={'navigate-next'}
                              size = {40}
                              color={'#323232'}
                          />
                      </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.addNewDevice} >
                        <Text style={styles.headerList2} >
                        <FontAwesome5 
                            name={'key'}
                            size = {20}
                            color={'#323232'}
                        />     Password</Text>

                        <View style={{alignSelf: "center", marginRight: 10}}>
                          <MaterialIcons 
                                name={'navigate-next'}
                                size = {40}
                                color={'#323232'}
                            />
                        </View>
                    </View>
                </TouchableOpacity>

                <Pressable onPress={() => navigation.navigate('Login')}>
                    <View style={styles.deviceList2}>
                        <Text style={styles.buttonText}>Logout</Text>
                    </View>
                </Pressable>

                <Text style={styles.ganjelhehe}> </Text>
            </View>
      </ScrollView>

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
    marginTop:15,
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
    marginLeft:5,
    padding:10,
    fontSize:18,
    color: '#323232',
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
    marginBottom: 10,
  },

  ganjelhehe:{
      marginBottom:100,
  }
});


export default Profile;