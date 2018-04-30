import React from 'react';
import {StyleSheet, Text, View, Button } from 'react-native';

import styles from "../Styles/AvailabilityStyles"



// import { DrawerNavigator, StackNavigator } from 'react-navigation';
// import Icon from 'react-native-vector-icons/FontAwesome';



export class AvailabilityScreen extends React.Component {

	 render() {
	    return (

	       <View style = {styles.main_screen}>




          <View style = {styles.rectangle_header} />
          <Text style = {styles.header_text}>77 Laundromat</Text>

          <View style = {styles.rectangle_washer} />
          <View style = {styles.washer_union_rectangle_2} />
          <View style = {styles.washer_union_rectangle_1} />
          <Text style = {styles.washer_text}>Washers</Text>
          <View  style = {styles.washer_polygon_avail} />
          <View style = {styles.washer_ellipse_avail} />
          <Text style = {styles.washer_available_text}>0 of 10 Available</Text>

          <View style = {styles.washer_rectangle_notify} />
          <Text style = {styles.washer_notify_text}>Notify When Washer Available</Text>

          <View style = {styles.washer_rectangle_ping} />
          <Text style = {styles.washer_ping_text}>Ping Idle Users</Text>



          <View style = {styles.rectangle_dryer} />
          <View style = {styles.dryer_union_rectangle_2} />
          <View style = {styles.dryer_union_rectangle_1} />

          <Text style = {styles.dryer_text}>Dryers</Text>

          <View  style = {styles.dryer_polygon_avail} />
          <View style = {styles.dryer_ellipse_avail} />
          <Text style = {styles.dryer_available_text}>4 of 10 Available</Text>


	      </View>
	    );
	  }
	}





// const Screens = DrawerNavigator({
//   Home: {
//     screen: BasketHomeScreen,
//     navigationOptions: {
//       drawerLabel: 'Dashboard'
//     }
//   }
// });

// const DrawerNavigation = StackNavigator({
//   DrawerStack: { screen: Screens }
// }, {
//   headerMode: 'float',
//   navigationOptions: ({navigation}) => ({
//     headerStyle: {backgroundColor: '#4C3E54'},
//     title: 'ConNect',
//     headerTintColor: 'white',
//     headerLeft: <Icon name="bars" size={30} color="#fff" style={{ marginLeft: 5 }} onPress={() => navigation.navigate('DrawerToggle')} />
//   })
//})

// export default class App extends React.Component {
//   render() {
//     return (
//       <DrawerNavigation />
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });





/*
  send_post(){
      fetch("https://smartapp-196617.appspot.com/laundry", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              "username": 'Cam from app',
              "password": 'my pass',
              "first_name": 'ok',
              "last_name": 'last',
              "phone_number":'out',
            })
          }).then(function(response){
            if (response.status >= 400){
              console.log("there was an error")
              Alert.alert(
                'The username you entered is already in use'
              ) 
              // return false;
            } 
            else{
              console.log("this worked")
        }
      })

    }
*/

