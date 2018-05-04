import React from 'react';
import { StyleSheet, ScrollView , Text} from 'react-native';

import { DrawerNavigator, StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import {AvailabilityScreen} from './Components/BasketRoute/AvailabilityScreen'

import {HomeScreen} from './Components/BasketRoute/HomeScreen'
import {SignUpScreen} from './Components/BasketRoute/SignUpScreen'
import {WasherScreen} from './Components/BasketRoute/WasherScreen'
import {ApartmentLaundryScreen} from './Components/BasketRoute/ApartmentLaundryScreen'
import {LaundryScreen} from './Components/BasketRoute/LaundryScreen'

import { DrawerItems, SafeAreaView } from 'react-navigation';

// const CustomDrawerContentComponent = (props) => (
//   <ScrollView>
//     <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
//     </SafeAreaView>
//   </ScrollView>
// );

//HomeScreen
//SignUpScreen
//AvailabilityScreen
const Screens = DrawerNavigator({
  AvailabilityHome: {
    screen: LaundryScreen,
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


