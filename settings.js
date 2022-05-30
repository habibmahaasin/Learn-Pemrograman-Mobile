import React from "react";
import { View, Text, StyleSheet, SafeAreaView, StatusBar, TouchableOpacity, ScrollView } from "react-native";

function Profile({navigation} ){
  return(
    <SafeAreaView backgroundColor='white'>
        
        <View>
            <StatusBar backgroundColor='white' barStyle='dark-content'/>
            <Text style={styles.header} >Settings</Text>
            <Text style={styles.desc} >Costumize your Application</Text>
        </View>
        
        <View>
            <Text style={styles.buttonText} >Comingsoon</Text>
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
    marginTop:220,
    paddingTop:18,
    paddingBottom:400,
    fontSize:18,
    color: '#323232',
    fontWeight:'bold'
  },

  deviceList:{
    marginBottom: 0,
    marginTop:20,
    width:'85%',
    alignSelf:"center",
    backgroundColor: '#2196F3',
    borderRadius : 20,
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

});


export default Profile;