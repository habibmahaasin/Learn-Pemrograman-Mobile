import React,{useState} from "react";
import { View, Text, StyleSheet, SafeAreaView ,StatusBar, Pressable,Image, TextInput, ScrollView } from "react-native";
import {Picker} from '@react-native-picker/picker';

const lampu = { uri : 'https://i.ibb.co/TB4vg7v/Png-Item-5290496-1.png',};

function deviceType({navigation} ){
  const [selectedLanguage, setSelectedLanguage] = useState();

  return(
    <SafeAreaView backgroundColor='white'>
        
        <View>
            <StatusBar backgroundColor='white' barStyle='dark-content'/>
            <Text style={styles.header} >Confirmation</Text>
            <Text style={styles.desc} >Change device name and categories</Text>
        </View>
        
        <ScrollView>
            <View>
                <Image source={lampu} style={styles.logo}></Image>
            </View>

            <TextInput
                    style={styles.input}
                    placeholder="Masukkan Nama Device"
            />

            <View style= {styles.pilihan}>
              <Picker
                  selectedValue={selectedLanguage}
                  onValueChange={(itemValue, itemIndex) =>
                    setSelectedLanguage(itemValue)
                  }>
                  <Picker.Item label="Bedroom" value="Bedroom" />
                  <Picker.Item label="Study Room" value="Study Room" />
                  <Picker.Item label="Living Room" value="Living Room" />
                  <Picker.Item label="Kitchen" value="Kitchen" />
                  <Picker.Item label="Garage" value="Garage" />
                  <Picker.Item label="Sitting Room" value="Sitting Room" />
                  <Picker.Item label="Home Yard" value="Home Yard" />
              </Picker>
            </View>
            
            <Pressable onPress={() => navigation.navigate('dashboard')}>
                <View style={styles.deviceList1}>
                    <Text style={styles.buttonText}>Continue</Text>
                </View>
            </Pressable>
            <Text style={styles.buttonText}> </Text>
        </ScrollView>
    </SafeAreaView>
  )
};


const styles = StyleSheet.create({
    
    logo:{
        width: 136,
        height: 254,
        alignSelf: "center",
        marginTop: 50,
        marginBottom: 50,
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

      pilihan: {
        marginTop: 15,
        marginRight: 30,
        marginLeft:30,
        borderWidth: 2,
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

 addNewDevice:{
    shadowColor:'22A7F0',
    marginTop:15,
    width:'85%',
    alignSelf:"center",
    borderWidth: 2,
    borderRadius : 15,
    borderColor: '#22A7F0',
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
    marginTop:'15%',
    width:'85%',
    alignSelf:"center",
    backgroundColor: '#43D07B',
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