import * as React from 'react';
import {Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';

import Register from './register';
import login from './login';
import dashboard from './dashboard';
import profile from './profile';
import settings from './settings';
import tambahPerangkat from './tambahPerangkat';
import deviceType from './deviceType';
import confirmationType from './confirmationType';
import daftarDevice from './daftarDevice';
import fungsiUtama from './fungsiUtama';
import editUsername from './editUsername';

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator >
      <Stack.Screen options={{headerShown: false}} name="Login" component={login} />     
      <Stack.Screen options={{headerShown: false}} name="dashboard" component={MyTabs}/>
      <Stack.Screen options={{headerShown: false}} name="Register" component={Register} />
      <Stack.Screen options={{headerShown: false}} name="tambahPerangkat" component={tambahPerangkat} />
      <Stack.Screen options={{headerShown: false}} name="deviceType" component={deviceType} />
      <Stack.Screen options={{headerShown: false}} name="confirmationType" component={confirmationType} />
      <Stack.Screen options={{headerShown: false}} name="daftarDevice" component={daftarDevice} />
      <Stack.Screen name="Device Settings" component={fungsiUtama} />
      <Stack.Screen name="Edit Username" component={editUsername} />
   </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator screenOptions={({route}) => ({
      tabBarIcon:({focused,color,size}) =>{
        if (route.name === 'Home'){
          return(
            <Octicons name={
              focused ? 'home': 'home'}
              size = {size}
              color = {color}
            />
          );
        }

        else if (route.name === 'profile'){
          return(
            <Feather name={
              focused ? 'user': 'user'}
              size = {size}
              color = {color}
            />
          );
        }

        else if (route.name === 'settings'){
          return(
            <Ionicons name={
              focused ? 'settings-outline': 'settings-outline'}
              size = {size}
              color = {color}
            />
          );
        }
      },

      tabBarInactiveTintColor: '#323232',
      tabBarActiveTintColor : '#22A7F0'
    })}>
      <Tab.Screen options={{headerShown: false}} name="Home" component={dashboard} />
      <Tab.Screen options={{headerShown: false}} name="profile" component={profile} />
      <Tab.Screen options={{headerShown: false}} name="settings" component={settings} />
      
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
