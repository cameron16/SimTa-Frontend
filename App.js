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

import { DrawerItems, SafeAreaView } from 'react-navigation';

import styles from './Components/Styles/HeaderStyles'





const RootNavigator = StackNavigator({

  Login: {
    screen: LoginScreen,
    navigationOptions: {
      headerTitle: 'Welcome to SimTa',
      headerTitleStyle: styles.header_text,
      headerStyle:  styles.header_rectangle, 
      
    },
  },
  SignUp:{
    screen: SignUpScreen,
    navigationOptions: {
      headerTitle: 'Sign Up',
      headerTitleStyle: styles.header_text,
      headerStyle:  styles.header_rectangle, 
      
    },
  },
  Availability:{
    screen: AvailabilityScreen,
    navigationOptions: {
      headerTitle: '77 Laundromat', 
      headerTitleStyle: styles.header_text,
      headerStyle:  styles.header_rectangle, 
    },
  },
  
});


export default RootNavigator;




