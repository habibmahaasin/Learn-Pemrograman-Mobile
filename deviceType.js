import React from "react";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { View, Text, StyleSheet, SafeAreaView, StatusBar, Pressable, TouchableOpacity } from "react-native";

function deviceType({navigation} ){
  return(
    <SafeAreaView backgroundColor='white' style={{ flex: 1 }}>
        
        <View style={{ flex: 2 }}>
            <StatusBar backgroundColor='white' barStyle='dark-content'/>
            <Text style={styles.header} >Device Type</Text>
            <Text style={styles.desc} >Choose device type to connect</Text>
        </View>

        <View style={{ flex: 10 }}>
          <TouchableOpacity onPress={() => navigation.navigate('confirmationType')}>
              <View style={styles.addNewDevice}>
                  <Text style={styles.headerList2} >Lamp</Text>
                  <View style={{alignSelf: "center", marginRight: 10}}>
                    <MaterialIcons 
                        name={'navigate-next'}
                        size = {40}
                        color={'#22A7F0'}
                    />
                  </View>
              </View>
          </TouchableOpacity>

          <TouchableOpacity>
              <View style={styles.addNewDevice}>
                  <Text style={styles.headerList2} >Switcher</Text>
                  <View style={{alignSelf: "center", marginRight: 10}}>
                    <MaterialIcons 
                        name={'navigate-next'}
                        size = {40}
                        color={'#22A7F0'}
                    />
                  </View>
              </View>
          </TouchableOpacity>

          <TouchableOpacity>
              <View style={styles.addNewDevice}>
                  <Text style={styles.headerList2} >Air Conditioner</Text>
                  <View style={{alignSelf: "center", marginRight: 10}}>
                    <MaterialIcons 
                        name={'navigate-next'}
                        size = {40}
                        color={'#22A7F0'}
                    />
                  </View>
              </View>
          </TouchableOpacity>

          <TouchableOpacity>
              <View style={styles.addNewDevice}>
                  <Text style={styles.headerList2} >Colokan</Text>
                  <View style={{alignSelf: "center", marginRight: 10}}>
                    <MaterialIcons 
                        name={'navigate-next'}
                        size = {40}
                        color={'#22A7F0'}
                    />
                  </View>
              </View>
          </TouchableOpacity>

          <TouchableOpacity>
              <View style={styles.addNewDevice}>
                  <Text style={styles.headerList2} >Charger</Text>
                  <View style={{alignSelf: "center", marginRight: 10}}>
                    <MaterialIcons 
                        name={'navigate-next'}
                        size = {40}
                        color={'#22A7F0'}
                    />
                  </View>
              </View>
          </TouchableOpacity>
        </View>

        <View style={{ flex: 1.5, marginTop: 20}}>
          <Pressable onPress={() => navigation.navigate('tambahPerangkat')}>
              <View style={styles.deviceList1}>
                  <Text style={styles.buttonText}>Cancel</Text>
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
    shadowColor:'22A7F0',
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
  },

  deviceList1:{
    width:'85%',
    alignSelf:"center",
    backgroundColor: '#E86068',
    borderRadius : 15,
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

});


export default deviceType;