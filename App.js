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

import { DrawerItems, SafeAreaView } from 'react-navigation';

import styles from './Components/Styles/HeaderStyles'



const RootNavigator = StackNavigator({

  Login: {
    screen: LoginScreen,
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
  Availability:{
    screen: AvailabilityScreen,
    navigationOptions: {
      headerTitle: '77 Laundromat', 
      headerTitleStyle: styles.header_text,
      headerStyle:  styles.blue_header_rectangle,
      headerBackTitleStyle: styles.back_text,
      headerTintColor: '#F2F2F2' 
    },
  },
  Washer:{
    screen: WasherScreen,
    navigationOptions: {
      headerTitle: 'Washers - 77 Laundromat', 
      headerTitleStyle: styles.header_text,
      headerStyle:  styles.blue_header_rectangle, 
      headerBackTitleStyle: styles.back_text,
      headerTintColor: '#F2F2F2'
    },
  },
  ApartmentLaundry:{
    screen: ApartmentLaundryScreen,
    navigationOptions: {
      headerTitle: 'Apartment Laundry Room', 
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


  
});


export default RootNavigator;




