import React from 'react';
import { StyleSheet, ScrollView , Text} from 'react-native';

import { DrawerNavigator, StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

import {LoginScreen} from './Components/BasketRoute/LoginScreen'
import {SignUpScreen} from './Components/BasketRoute/SignUpScreen'
import {AvailabilityScreen} from './Components/BasketRoute/AvailabilityScreen'


import { DrawerItems, SafeAreaView } from 'react-navigation';

import styles from './Components/Styles/HeaderStyles'

// const CustomDrawerContentComponent = (props) => (
//   <ScrollView>
//     <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
//     </SafeAreaView>
//   </ScrollView>
// );

//HomeScreen
//SignUpScreen
//AvailabilityScreen


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




/*

const Screens = DrawerNavigator({
  AvailabilityHome: {
    screen: AvailabilityScreen,
    navigationOptions: {
      drawerLabel: 'Dashboard'
    }
  },
   
});

const DrawerNavigation = StackNavigator({
  DrawerStack: { screen: Screens }
}, {
  headerMode: 'float',
  navigationOptions: ({navigation}) => ({
    headerStyle: {backgroundColor: '#4C3E54'},
    title: 'ConNect',
    headerTintColor: 'white',
    headerLeft: <Icon name="bars" size={30} color="#fff" style={{ marginLeft: 5 }} onPress={() => navigation.navigate('DrawerToggle')} />
  })
})

export default class App extends React.Component {
  render() {
    return (
      <Screens />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/

