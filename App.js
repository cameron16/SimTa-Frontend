import React from 'react';
import { StyleSheet, ScrollView , Text} from 'react-native';

import { DrawerNavigator, StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

import {LoginScreen} from './Components/BasketRoute/LoginScreen'
import {SignUpScreen} from './Components/BasketRoute/SignUpScreen'
import {AvailabilityScreen} from './Components/BasketRoute/AvailabilityScreen'

import {WasherScreen} from './Components/BasketRoute/WasherScreen'
import {ApartmentLaundryScreen} from './Components/BasketRoute/ApartmentLaundryScreen'
import {LaundryScreen} from './Components/BasketRoute/LaundryScreen'
import {SimTaHomeScreen} from './Components/BasketRoute/SimTaHomeScreen'
import {ApartmentLaundryCodeScreen} from './Components/BasketRoute/ApartmentLaundryCodeScreen'
import {LaundromatSearchScreen} from './Components/BasketRoute/LaundromatSearchScreen'
import {OvenScreen} from './Components/BasketRoute/OvenScreen'


import { DrawerItems, SafeAreaView } from 'react-navigation';

import styles from './Components/Styles/HeaderStyles'


// styles.green_header_rectangle,
const RootNavigator = StackNavigator({

  Login: {
    screen: ApartmentLaundryCodeScreen,
    navigationOptions: {
      headerTitle: 'Welcome to SimTa',
      headerTitleStyle: styles.header_text,
      headerStyle:  styles.green_header_rectangle,  
      
    },
  },
  SignUp:{
    screen: SignUpScreen,
    navigationOptions: {
      headerTitle: 'Sign Up',
      headerTitleStyle: styles.header_text,
      headerStyle:  styles.green_header_rectangle, 
      headerBackTitleStyle: styles.back_text,
      headerTintColor: '#F2F2F2'
      
    },
  },
  SimTaHome:{
    screen: SimTaHomeScreen,
    navigationOptions: {
      headerTitle: 'Your Appliances', 
      headerTitleStyle: styles.header_text,
      headerStyle:  styles.green_header_rectangle, 
      headerLeft: null,
      headerTintColor: '#F2F2F2'
    },
  }, 
  Availability:{
    screen: AvailabilityScreen,
    navigationOptions: {
      headerTitle: '550 West 45th', 
      headerTitleStyle: styles.header_text,
      headerStyle:  styles.blue_header_rectangle,
      headerBackTitleStyle: styles.back_text,
      headerTintColor: '#F2F2F2' 
    },
  },
  Washer:{
    screen: WasherScreen,
    navigationOptions: {
      headerTitle: 'Washers', 
      headerTitleStyle: styles.header_text,
      headerStyle:  styles.blue_header_rectangle, 
      headerBackTitleStyle: styles.back_text,
      headerTintColor: '#F2F2F2'
    },
  },
  ApartmentLaundry:{
    screen: ApartmentLaundryScreen,
    navigationOptions: {
      headerTitle: 'Apartment', 
      headerTitleStyle: styles.header_text,
      headerStyle:  styles.blue_header_rectangle, 
      headerBackTitleStyle: styles.back_text,
      headerTintColor: '#F2F2F2'
    },
  },
  ApartmentLaundryCode:{
    screen: ApartmentLaundryCodeScreen,
    navigationOptions: {
      headerTitle: 'Apartment Code', 
      headerTitleStyle: styles.header_text,
      headerStyle:  styles.blue_header_rectangle, 
      headerBackTitleStyle: styles.back_text,
      headerTintColor: '#F2F2F2'
    },
  },

  Laundry:{
    screen: LaundryScreen,
    navigationOptions: {
      headerTitle: 'Laundry', 
      headerTitleStyle: styles.header_text,
      headerStyle:  styles.blue_header_rectangle, 
      headerBackTitleStyle: styles.back_text,
      headerTintColor: '#F2F2F2'
    },
  },
  LaundromatSearch:{
    screen: LaundromatSearchScreen,
    navigationOptions: {
      headerTitle: 'Laundromat Search', 
      headerTitleStyle: styles.header_text,
      headerStyle:  styles.blue_header_rectangle, 
      headerBackTitleStyle: styles.back_text,
      headerTintColor: '#F2F2F2'
    },
  },
 Oven:{
    screen: OvenScreen,
    navigationOptions: {
      headerTitle: 'Your Oven', 
      headerTitleStyle: styles.header_text,
      headerStyle:  styles.red_header_rectangle, 
      headerBackTitleStyle: styles.back_text,
      headerTintColor: '#F2F2F2'
    },
  },


  
  



  
});


export default RootNavigator;




